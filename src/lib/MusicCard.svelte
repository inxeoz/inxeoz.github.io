<script lang="ts">

    let pauseIcon = "https://varn-music-list.s3.ap-south-1.amazonaws.com/assets/paused.svg";
    let  playIcon = "https://varn-music-list.s3.ap-south-1.amazonaws.com/assets/playing.svg"

    import Slider from "./Slider.svelte";
    import {
        activeMusicId,
        LastPlaybackTime,
        MusicState,
        OnTimeMusicStateChange,
        StartChnageMusicTimingFromSlider
    } from "./store";
    import {audioInstance, pauseMusic, playMusic, seekMusic, setSrcMusic, stopMusic} from './audioStore';
    import {onDestroy, onMount} from "svelte";
    export let card_stroke_width=0.4;
    export let card_stroke_color="#001136";
    export let title_color = "#fff"
    export let music_player_color = "#000"
    export let poster_background_color = '#eb5e28';
    export let song_title = "(0_1)";
    export let poster_svg: string = "";
    export let music_id = 0;
    export let audioSrc: string = "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3";

    let sliderValue = 0;
    let audioDuration = 0;
    let local_music_state = $OnTimeMusicStateChange;
    let currentTime = 0;
    let instance: HTMLAudioElement;

    function handleCallbackPlay() {
        if ($activeMusicId !== music_id) return;
        local_music_state = MusicState.Playing;
    }

    function handleCallbackPause() {
        if ($activeMusicId !== music_id) return;
        local_music_state = MusicState.Paused;
    }

    function handleCallbackTimeUpdate() {
        if ($activeMusicId !== music_id) return;
        currentTime = instance?.currentTime || 0;
        audioDuration = instance?.duration || 0;
        sliderValue = currentTime / (audioDuration || 1);
    }

    function handleSliderChange(val: number) {
        if ($activeMusicId !== music_id) return;
        if ($StartChnageMusicTimingFromSlider) {
            seekMusic(val * audioDuration);
        } else {
            sliderValue = val;
        }
    }

    function prepareNewTrack() {
        if ($activeMusicId !== music_id) {
            stopMusic();
            activeMusicId.set(music_id);
            setSrcMusic(audioSrc, sliderValue * audioDuration);
        }

    }

    function localPlayMusic() {
        prepareNewTrack();
        playMusic();
    }

    function localPauseMusic() {
        prepareNewTrack();
        pauseMusic();
    }

    // Listen for global music state changes
    const unsubscribe = activeMusicId.subscribe(id => {
        if (id !== music_id && local_music_state === MusicState.Playing) {
            local_music_state = MusicState.Paused;
            //  stopMusic(); // remove this motherfucker <----
        }
    });


    let audioUnsub: () => void;

    onMount(() => {
        console.log('[MOUNT] Song component mounted:', music_id);

        if (music_id === $activeMusicId) {
            console.log('[MOUNT] Active track - initial local state:', local_music_state);
            // playMusic()
        }

        audioUnsub = audioInstance.subscribe(audio => {
            instance = audio;

            if (music_id === $activeMusicId) {
                console.log('[AUDIO READY] Subscribed and active - local state:', local_music_state);
            }

            instance.addEventListener('play', handleCallbackPlay);
            instance.addEventListener('pause', handleCallbackPause);
            instance.addEventListener('timeupdate', handleCallbackTimeUpdate);
        });
    });

    onDestroy(() => {
        console.log('[DESTROY] Song component unmounted:', music_id);

        unsubscribe();

        instance?.removeEventListener('play', handleCallbackPlay);
        instance?.removeEventListener('pause', handleCallbackPause);
        instance?.removeEventListener('timeupdate', handleCallbackTimeUpdate);

        audioUnsub?.();

        if (music_id === $activeMusicId) {
            console.log('[DESTROY] Saving local music state:', local_music_state);
            OnTimeMusicStateChange.set(local_music_state);
        }
    });


</script>

<div class="music_card_main global_center_div" style="--poster-background-color: {poster_background_color};
--card-stroke-width: {card_stroke_width}rem;
--card-stroke-color: {card_stroke_color};
--title-color: {title_color};
--music-player-color: {music_player_color};

">
    <div class="music_card_player global_center_div">
        <div class="music_poster">
            <img src={poster_svg} alt="poster image">
        </div>
        <div class="music_player global_center_div">
            {#if local_music_state === MusicState.Playing}
                <div class="play_pause global_center_div" on:click={localPauseMusic}>
                    <img src={playIcon} alt="pause music">
                </div>
            {:else}
                <div class="play_pause global_center_div" on:click={localPlayMusic}>
                    <img src={pauseIcon} alt="play music">
                </div>
            {/if}

            <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    width={150}
                    knobSize={16}
                    barHeight={5}
                    leftColor={poster_background_color}
                    rightColor="#ffffff"
                    knobColor="#ffffff"
            />
        </div>
    </div>
    <div class="music_info global_font">{song_title}</div>
</div>

<style>
    .play_pause {
        max-height: 20px;
        max-width: 20px;
        cursor: pointer;
    }

    .music_info {
        color: var(--title-color);
        font-style: italic;
        font-weight: bold;
    }

    .music_card_main {
        flex-direction: column;
        gap: 20px;
        padding-bottom: 10px;
    }

    .music_card_player {
        background: var(--poster-background-color);
        padding: 20px;
        flex-direction: column;
        border: var(--card-stroke-width) solid var(--card-stroke-color) ;
    }

    .music_player {
        height: 50px;
        width: 100%;
        background: var(--music-player-color);
        justify-content: space-evenly;
        gap: 2px;
    }
</style>

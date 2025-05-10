import {writable, type Writable} from 'svelte/store';


// Create audio element outside of Svelte components
const audio = new Audio();
audio.loop = true;


export const audioInstance: Writable<HTMLAudioElement> = writable(audio);

export function setSrcMusic(src: string, seekTime: number = 0) {
    if (audio.src !== src) {
        audio.src = src;
        audio.load();

        audio.onloadedmetadata = () => {
            console.log("Audio loaded and duration", audio.duration);
                audio.currentTime = seekTime;
        };
    }
}
// Controls
export function playMusic() {
    audio.play();
}
export function pauseMusic() {
    audio.pause();
}
export function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}
export function seekMusic(time: number) {
    if ( time >= 0 && time <= (audio.duration || 0)) {
        audio.currentTime = time;
    }
}
export function toggleMuteMusic() {
    audio.muted = !audio.muted;
}



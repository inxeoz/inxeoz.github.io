<script lang="ts">

    import Project_temp from "./Project_temp.svelte";
    import MusicCard from "./lib/MusicCard.svelte";


    const projects = [
        {
            project_logo: "https://varn-music-list.s3.ap-south-1.amazonaws.com/assets/chak_logo.svg",
            project_bg_color: "#83c5be",
            project_sec_color: "#051634",
            project_link: "https://chak.inxeoz.com/",
            project_title: "CHAK A VERSION CONTROL SYSTEM",
            project_desc: "I tried to build a version control system in Rust inspired by Git. Although it’s not complete, it is easily understandable and extendable"
        },
        {
            project_bg_color: "#a9b4c2",
            project_sec_color: "#1c2321",
            project_title: "NRISETU A MOBILE APPLICATION",
            project_link: "https://nrisetu.inxeoz.com/",
            project_desc: "NriSetu is an unofficial mobile application for NRI Institute. It helps students easily access notifications, institute fee details, and payment history via a React Native application."
        },
        {
            project_bg_color: "#fcb1a6",
            project_sec_color: "#5d2a42",
            project_title: "BRAINFLEX MATHEMATICAL EQ. BASED GAME",
            project_link: "https://brainflex.inxeoz.com/",
            project_desc: "As a fun project, I started Brainflex. At that time, I had no experience with game development, so I began learning the Godot engine and started building games. Brainflex is a result of that learning process"
        },
        {
            project_bg_color: "#669bbc",
            project_sec_color: "#001233",
            project_title: "MUSIC ARTIST VARN's PORTFOLIO",
            project_link: "https://varn.inxeoz.com/",
            project_desc: "It’s kind of a personal project. In this project, I built a portfolio for my friend Varn. He is a music artist and dancer, currently in the early stage of his career. So, this project is a kind of gift to him",
            slot_component: MusicCard,
            slot_props: {
                title_color: "#000",
                music_player_color: "#001233",
                poster_svg: "https://varn-music-list.s3.ap-south-1.amazonaws.com/assets/music_thumbnail/intzar_song.svg",
                song_title: "Intzar ",
                audioSrc: "https://varn-music-list.s3.ap-south-1.amazonaws.com/INTZAR+-+VARN+-+VISUALISER.mp3",
                poster_background_color: "#0466c8",
                music_id: 1010
            }


        }
    ];



</script>

<div class="project_main global_center_div">

    {#each projects as project}
        <Project_temp
                project_logo={project.project_logo}
                project_bg_color={project.project_bg_color}
                project_sec_color={project.project_sec_color}
                project_link={project.project_link}
                project_title={project.project_title}
                project_desc={project.project_desc}
        >

            {#if project.slot_component}
                <svelte:component this={project.slot_component} {...project.slot_props} />
            {/if}

        </Project_temp>
    {/each}

</div>

<style>


    .project_main {
        height: 100%;
        width: 100%;
        flex-direction: column;
        gap: 1rem;

    }


</style>
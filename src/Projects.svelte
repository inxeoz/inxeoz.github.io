<script lang="ts">

    import chak_logo from './assets/chak_logo.svg'
    import Project_temp from "./Project_temp.svelte";

</script>

<div class="project_main global_center_div">

    <Project_temp
            project_logo={chak_logo},
            project_bg_color="#83c5be"
            project_link="https://chak.inxeoz.com/"
            project_title="CHAK A VERSION CONTROL SYSTEM"
            project_desc="I tried to build a version control system in Rust inspired by Git. Although it’s not complete, it is easily understandable and extendable"
    />

    <Project_temp
            project_bg_color="#a9b4c2"
            project_sec_color="#1c2321"
            project_title="NRISETU A MOBILE APPLICATION"
            project_link="https://nrisetu.inxeoz.com/"
            project_desc="NriSetu is an unofficial mobile application for NRI Institute. It helps students
        easily access notifications, institute fee details, and payment
        history via a React Native application."

    />

    <Project_temp
            project_bg_color="#fcb1a6"
            project_sec_color="#5d2a42"
            project_title="BRAINFLEX MATHEMATICAL EQ. BASED GAME"
            project_link="https://brainflex.inxeoz.com/"
            project_desc="As a fun project, I started Brainflex. At that time, I had no experience with game development, so I began learning the Godot engine and started building games. Brainflex is a result of that learning process"


    />

    <Project_temp
            project_bg_color="#8bbeb2"
            project_sec_color="#18314f"
            project_title="MUSIC ARTIST VARN's PORTFOLIO"
            project_link="https://varn.inxeoz.com/"
            project_desc="It’s kind of a personal project. In this project, I built a portfolio for my friend Varn. He is a music artist and dancer, currently in the early stage of his career. So, this project is a kind of gift to him"


    />



</div>

<style>


    .project_main {
        height: 100%;
        width: 100%;
        flex-direction: column;
        gap: 1rem;

    }



</style>
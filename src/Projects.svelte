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
            project_bg_color="#f5cb5c"
            project_title="NRISETU A MOBILE APPLICATION USING WEBSCRAPPING"
            project_link="https://nrisetu.inxeoz.com/"
            project_desc="NriSetu is an unofficial mobile application for NRI Institute. It helps students
        easily access notifications, institute fee details, and payment
        history via a React Native application."

    >
        </Project_temp>


</div>

<style>


    .project_main {
        height: 100%;
        width: 100%;
        flex-direction: column;
        gap: 1rem;

    }



</style>
<script lang="ts">

    import chak_logo from './assets/chak_logo.svg'
    import link from './assets/link.svg'
</script>

<div class="project_main">

    <div class="chak global_center_div">

        <div class="chak_basic global_center_div">
            <img src={chak_logo} alt="chak logo" height="50px">
            CHAK A VERSION CONTROL SYSTEM
            <div class="links global_center_div"  on:click={() => window.open('https://chak.inxeoz.com/')}>
                <img src={link} alt="link to project chak" height="25px">
            </div>
        </div>

    </div>

</div>

<style>

    .links {
        background: #051634;
        padding: 20px;
        border-radius: 50%;
        cursor: pointer;
    }

    .project_main {
        height: 100%;
        width: 100%;

    }

    .chak {
        color: #051634;
        font-weight: bold;
        background: #489fb5;
        padding: 20px;
        gap: 20px;
        text-wrap: auto;
        border: 5px solid #051634;
        justify-content: space-around;
        font-family: "JetBrains Mono", monospace;
    }

    .chak_basic {
        width: 100%;
        gap: 20px;
        text-wrap: auto;
        justify-content: space-around;
        font-family: "JetBrains Mono", monospace;
    }

</style>
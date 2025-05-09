<script lang="ts">

    import chak_logo from './assets/chak_logo.svg'
    import link from './assets/link.svg'

    export let project_title = "---";
    export let project_logo = chak_logo;
    export let project_link = '';
    export let project_desc = '';
    export let project_bg_color = "#489fb5"
    export let project_sec_color = "#051634"


</script>


<div class="global_center_div project" style="--project-bg-color: {project_bg_color};
--project-sec-color: {project_sec_color};">
    <div class="basic global_center_div">

        {#if project_logo}
            <img src={chak_logo} alt="chak logo" height="50px">
        {/if}

        {project_title}

        {#if project_link.length > 0}
            <div class="links global_center_div" on:click={() => window.open('https://chak.inxeoz.com/')}>
                <img src={link} alt="link to project chak" height="25px">
            </div>
        {/if}

    </div>

    {#if project_desc.length > 0}
        {project_desc}
    {/if}

    <slot/>

</div>


<style>

    .links {
        background: var(--project-sec-color);
        padding: 20px;
        border-radius: 50%;
        cursor: pointer;
    }


    .project {
        color: #051634;
        font-weight: bold;
        background: var(--project-bg-color);

        padding: 1rem;
        gap: 2rem;
        text-wrap: auto;
        border: 5px solid #051634;
        justify-content: space-around;
        font-family: "JetBrains Mono", monospace;
        flex-direction: column;
    }

    .basic {
        width: 100%;
        gap: 2rem;
        text-wrap: auto;
        justify-content: space-around;
        font-family: "JetBrains Mono", monospace;
        padding-bottom: 1rem;
        border-bottom: 3px solid var(--project-sec-color);

    }

</style>
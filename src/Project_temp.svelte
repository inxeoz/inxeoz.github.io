<script lang="ts">

    import {onDestroy, onMount} from "svelte";

    let link = "https://varn-music-list.s3.ap-south-1.amazonaws.com/assets/link.svg"

    export let project_title = "---";
    export let project_logo = "";
    export let project_link = '';
    export let project_desc = '';
    export let project_bg_color = "#489fb5"
    export let project_sec_color = "#051634"

    let showFullDesc = false;

    let windowWidth = window.innerWidth;

    // Update windowWidth on resize
    function handleResize() {
        windowWidth = window.innerWidth;
    }

    onMount(() => {
        window.addEventListener('resize', handleResize);
        // Set initial value
        handleResize();
    });

    onDestroy(() => {
        window.removeEventListener('resize', handleResize);
    });

    // Reactive statements
    $: maxChars = windowWidth < 600 ? 50 : 200;
    $: truncatedDesc = project_desc.slice(0, maxChars);

</script>


<div class="global_center_div project" style="--project-bg-color: {project_bg_color};
--project-sec-color: {project_sec_color};">
    <div class="basic global_center_div">

        {#if project_logo}
            <img src={project_logo} alt="chak logo" height="50px">
        {/if}
        <div class="project_title global_center_div">
            {project_title}
        </div>


        {#if project_link.length > 0}

            <button class="links global_center_div" on:click={() => window.open(project_link)}>
                {project_link.slice(8, project_link.length - 1)}
            </button>
        {/if}

    </div>

    {#if project_desc.length > 0}
        <div class="desc">
            {#if ! showFullDesc}
                {truncatedDesc}{project_desc.length > maxChars ? '...' : ''}
            {:else}
                {project_desc}
            {/if}
        </div>

        {#if project_desc.length > maxChars}
            <button class="more-btn" on:click={() => showFullDesc = !showFullDesc}>
                {showFullDesc ? 'Less' : 'More'}
            </button>
        {/if}
    {/if}

    <slot/>

</div>


<style>


    .project_title {
        flex-grow: 2;
    }

    .more-btn {
        all: unset;
        background: var(--project-sec-color);
        color: white;
        border-radius: 20px;
        cursor: pointer;
        display: inline-block;
        font-size: 1rem;
        padding: 0.5em 1em;
        margin-top: 0.5em;
    }

    @media (max-width: 600px) {
        .desc {
            font-size: 0.95rem;
        }

        .more-btn {
            font-size: 0.9rem;
            padding: 0.4em 0.8em;
        }
    }

    .links {
        all: unset;
        background: var(--project-sec-color);
        padding: 20px;
        cursor: pointer;
        color: white;
        border-radius: 50px;
        overflow: hidden;
    }


    .project {
        color: var(--project-sec-color);
        background: var(--project-bg-color);
        padding: 1rem;
        gap: 1rem;
        text-wrap: auto;
        border: 5px solid #051634;
        justify-content: center;
        font-family: "JetBrains Mono", monospace;
        flex-direction: column;
        font-weight: 500;
    }

    .basic {
        width: 100%;
        text-wrap: auto;
        justify-content: space-between;
        font-family: "JetBrains Mono", monospace;
        padding-bottom: 1rem;
        border-bottom: 3px solid var(--project-sec-color);
        font-weight: 700;
        padding-top: 1rem;

    }

    @media (max-width: 450px) {

        .basic {
            flex-direction: column;
            gap: 1rem;
        }

    }

</style>
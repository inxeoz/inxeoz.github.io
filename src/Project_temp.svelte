<script lang="ts">

    let link = "https://varn-music-list.s3.ap-south-1.amazonaws.com/assets/link.svg"

    export let project_title = "---";
    export let project_logo = "";
    export let project_link = '';
    export let project_desc = '';
    export let project_bg_color = "#489fb5"
    export let project_sec_color = "#051634"
    let showFullDesc = false;
</script>


<div class="global_center_div project" style="--project-bg-color: {project_bg_color};
--project-sec-color: {project_sec_color};">
    <div class="basic global_center_div">

        {#if project_logo}
            <img src={project_logo} alt="chak logo" height="50px">
        {/if}

        {project_title}

        {#if project_link.length > 0}
            <button class="links global_center_div" on:click={() => window.open(project_link)}>


                <!--                <div class="link_icon global_center_div" on:click={() => window.open(project_link)}>-->
                <!--                    <img src={link} alt="link to project chak" height="25px">-->
                <!--                </div>-->
                {project_link.slice(8, project_link.length - 1)}


            </button>

        {/if}

    </div>

    {#if project_desc.length > 0}
        <div class="desc" style="height: {showFullDesc ? 'auto' : '50px'}; overflow: hidden;">
            {project_desc  }
        </div>
        {#if project_desc.length > 100 && !showFullDesc}
            ...
            <button class="more-btn" on:click={() => showFullDesc = true}>More</button>
        {/if}
        {#if showFullDesc && project_desc.length > 100}
            <button class="more-btn" on:click={() => showFullDesc = false}>Less</button>
        {/if}
    {/if}


    <slot/>

</div>


<style>

    .more-btn {
        all: unset;
        background: var(--project-sec-color);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 8px;
        display: inline-block;
    }


    .desc {
        height: 100px;
        overflow: scroll;
    }


    .links {
        all: unset;
        background: var(--project-sec-color);
        padding: 20px;
        cursor: pointer;
        color: white;
        border-radius: 50px;

    }

    .links:hover {
        height: 100%;
    }


    .project {
        color: var(--project-sec-color);
        background: var(--project-bg-color);
        padding: 1rem;
        gap: 2rem;
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
        justify-content: space-evenly;
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
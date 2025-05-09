<script lang="ts">
    import {Tabs, activeTab} from './lib/store'

    import love from './assets/love.svg'
    import fav from './assets/fav.svg'
    import project from './assets/project.svg'

    function onTabClick(tab: Tabs) {
        activeTab.set(tab)
    }

</script>

<div class="navigation_main global_center_div">
    <button
            class="global_center_div global_font  {$activeTab === Tabs.Projects ? 'active_tab' : 'tab'}"
            on:click={() => onTabClick(Tabs.Projects)}
            type="button"
    >
        <img src={project} alt={$activeTab} height="25px"/>

        <div class=" title {$activeTab === Tabs.Projects ? 'active_title' : ''}">
            {$activeTab}
        </div>
    </button>

    <button
            class="global_center_div global_font  {$activeTab === Tabs.Favorites ? 'active_tab' : 'tab'}"
            on:click={() => onTabClick(Tabs.Favorites)}
            type="button"
    >
        <img src={fav} alt={$activeTab} height="25px"/>

        <div class=" title {$activeTab === Tabs.Favorites? 'active_title' : ''}">
            {$activeTab}
        </div>
    </button>

    <button
            class="global_center_div global_font  {$activeTab === Tabs.Interests ? 'active_tab' : 'tab'}"
            on:click={() => onTabClick(Tabs.Interests)}
            type="button"
    >
        <img src={love} alt={$activeTab} height="25px"/>

        <div class=" title {$activeTab === Tabs.Interests? 'active_title' : ''}">
            {$activeTab}
        </div>
    </button>
</div>

<style>

    .title, .active_title {
        transition: color 0.4s ease,
        opacity 0.4s cubic-bezier(.4, 0, .2, 1),
        max-width 0.4s cubic-bezier(.4, 0, .2, 1),
        transform 0.4s cubic-bezier(.4, 0, .2, 1);
    }

    .title {
        opacity: 0;
        max-width: 0;
        overflow: hidden;
        display: inline-block;
        transform: translateY(12px); /* subtle slide up */
        pointer-events: none;
        font-style: italic;
        font-weight: 900;
        font-size: 18px;

    }

    .active_title {
        opacity: 1;
        max-width: 200px;
        color: #000000;
        transform: translateY(0);
        pointer-events: auto;
    }

    .active_tab {
        color: var(--main-bg-color);
        padding: 0.8rem;
        background: var(--sec-color);
        border: 2px solid black;
        flex-direction: row;
        height: auto;
        width: auto;
        gap: 0.8rem;
        border-radius: 50px;

    }

    .tab {
        padding: 0.8rem;
        flex-direction: row;
        background: var(--main-bg-color);
        height: auto;
        border: 3px solid black;
        border-radius: 50px;
    }

    .navigation_main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }

</style>

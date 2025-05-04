<script>
    import map from './assets/map.svg';
    import cat from './assets/cat.svg';
    import linkedin from './assets/linkedin.svg';
    import Cursor from "./Cursor.svelte";
    import HackCompo from "./HackCompo.svelte";

    let activeTab = 'Projects';

    const tabs = ['Projects', 'My Favorite', 'Interests', ];

    let color = '#ff3e00';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=DM+Serif+Display&display=swap');

    :root {
        --main-bg-color: #003049;
        --secondary-main-bg-color: #000000;
        --secondary-main-text-color: #000000;
        --main-text-color: white;
    }

    html, body {
        margin: 0;
        padding: 0;
        color: #333;
        font-family: 'Inter', sans-serif;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6rem 2rem;
        gap: 3rem;
        background-color: var(--main-bg-color);
        width: auto;
        height: auto;
    }

    h1 {
        font-family: 'DM Serif Display', serif;
        font-size: 3rem;
        color: var(--main-text-color);
        text-align: center;
        margin: 0;
    }

    .links {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }

    button.icon {
        all: unset;
        cursor: pointer;
        padding: 10px;
        background-color: white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    button.icon:hover {
        transform: scale(1.26);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 36px;
        height: 36px;
    }

    .quote {
        max-width: 640px;
        font-size: 1.25rem;
        text-align: center;
        color: var(--main-text-color);
        line-height: 1.6;
        padding: 0 1rem;
    }

    a {
        color: var(--main-text-color);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease;
    }

    a:hover {
        color: var(--main-text-color);
    }

    .tabs {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
        align-items: center;
    }

    .tab {
        padding: 0.6rem 1.2rem;
        border: 1px solid #dcdcdc;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.95rem;
        color: var(--main-text-color);
        background-color: var(--main-bg-color);
        transition: all 0.2s ease;
    }

    .tab:hover {
        background-color: #f0f0f0;
        color: var(--secondary-main-text-color);

    }

    .tab.active {
        background-color: #eaeaea;
        border-color: #bbb;
        color: #222;
        font-weight: 600;
    }

    .tab-content {
        margin-top: 2rem;
        max-width: 700px;
        text-align: center;
        font-size: 1rem;
        color: var(--main-text-color);
        line-height: 1.6;
        width: auto;
    }

    .intro-text {
        font-size: 1.25rem;
        color: var(--main-text-color);
        text-align: center;
        max-width: 800px;
        padding: 1rem;
    }

    /* Mobile-first responsive styling */
    @media (max-width: 768px) {
        .container {
            padding: 4rem 1rem;
        }

        h1 {
            font-size: 2.5rem;
        }

        .links {
            flex-direction: column;
            gap: 1.5rem;
        }

        .links button.icon {
            padding: 12px;
        }

        .intro-text {
            font-size: 1.1rem;
            padding: 1rem;
        }

        .tabs {
            flex-direction: column;
            gap: 1rem;
        }

        .tab {
            width: 100%;
            padding: 1rem;
            text-align: center;
        }

        .quote {
            font-size: 1rem;
        }
    }

    /* Larger screen styling */
    @media (min-width: 769px) {
        .container {
            padding: 6rem 2rem;
        }

        h1 {
            font-size: 3rem;
        }

        .links {
            gap: 2rem;
        }

        .intro-text {
            font-size: 1.25rem;
        }

        .tabs {
            flex-direction: row;
        }

        .tab {
            padding: 0.6rem 1.2rem;
        }
    }
</style>

<div class="container">
    <Cursor />

    <h1>
        <a href="https://www.google.com/search?client=firefox-b-d&q=define+purushottam" target="_blank">
            Purushottam
        </a>
    </h1>

    <div class="links">
        <button class="icon" on:click={() => window.open('https://medium.com/@inxeoz')}>
            <img src={map} alt="Medium" />
        </button>
        <button class="icon" on:click={() => window.open('https://github.com/inxeoz/')}>
            <img src={cat} alt="GitHub" />
        </button>
        <button class="icon" on:click={() => window.open('https://www.linkedin.com/in/purushottam-singram/')}>
            <img src={linkedin} alt="linkedin" />
        </button>

    </div>

    <!-- New text section -->
    <div class="intro-text">
        <p>I am Purushottam, software developer, research enthusiast...</p>
    </div>

    <div class="tabs">
        {#each tabs as tab}
            <div
                    class="tab {activeTab === tab ? 'active' : ''}"
                    on:click={() => activeTab = tab}
            >
                {tab}
            </div>
        {/each}
    </div>

    <div class="tab-content">
        {#if activeTab === 'Projects'}
            <p>Here are some of the cool things I've built — from web apps to random experiments.</p>
        {:else if activeTab === 'My Favorite'}
            <p>Books, songs, quotes, or memories — just a few of the things that inspire me daily.</p>
            <HackCompo/>

            <div class="quote">
                "The world has tied beauty to virtue so tightly that an 'ugly' face is mistaken for failure before it even speaks."
            </div>
        {:else if activeTab === 'Interests'}
            <p>Coding, design, philosophy, tech culture, maps, and all things creative.</p>
        {:else if activeTab === 'Favorite Site'}
            <p>I love sites that are clean, purposeful, and poetic — like <a href="https://are.na" target="_blank">Are.na</a> or <a href="https://read.cv" target="_blank">Read.cv</a>.</p>
        {/if}
    </div>

</div>

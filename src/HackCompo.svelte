<script>
    let activeTab = 'YOUTBERS';

    const tabs = ['YOUTBERS', 'SITE:S', 'QUOTES', 'SONGS'];

    const content = {
        YOUTBERS: [
            { text: "PHYSICS VIDEOS BY EUGENE KHUTORYANSKY", url: "https://www.youtube.com/@EugeneKhutoryansky" },
            { text: "ALAN BECKER", url: "https://www.youtube.com/@alanbecker" },
            { text: "BRANCH EDUCATION", url: "https://www.youtube.com/@BranchEducation" },
            { text: "KHAN ACADEMY", url: "https://www.youtube.com/@khanacademy" },
            { text: "3B1B", url: "https://www.youtube.com/@3blue1brown" },
            { text: "VERITASIUM", url: "https://www.youtube.com/@veritasium" },
            { text: "LESICS", url: "https://www.youtube.com/@SabinCivil" },
            { text: "SARTHAK GOSWAMI", url: "https://www.youtube.com/@SundaySarthak" }
        ],
        "SITE:S": [
            { text: "onlineminitools.com", url: "https://onlineminitools.com/" },
            { text: "devhints.io", url: "https://devhints.io/" },
            { text: "fairlynerdy.com", url: "https://www.fairlynerdy.com" },
            { text: "mathsisfun.com", url: "https://www.mathsisfun.com/" },
            { text: "egyankosh.ac.in", url: "https://egyankosh.ac.in/handle/123456789/17990?mode=full" },
            { text: "zerotomastery.io", url: "https://zerotomastery.io/" }
        ],
        QUOTES: [
            " \"EVERY AND EACH TYPE OF PROBLEM HAS SOLUTION ALWAYS\" ",
            " \"YOU CAN'T BE ONLINE EVERY TIME , BE READY FOR OFFLINE MODE\" ",
            " \"KEEP BREATHING , TIDE WILL COME TAKE SOMEWHERE ; DON'T GIVE UP\" "
        ].map(q => ({ text: q, url: `https://www.google.com/search?q=${encodeURIComponent(q)}` })),
        SONGS: [
            { text: "No songs added yet...", url: "https://www.youtube.com/results?search_query=songs+playlist" }
        ]
    };
</script>

<div class="wrapper global_center_div">
    <div class="tabs">
        {#each tabs as tab}
            <button
                    on:click={() => activeTab = tab}
                    class:selected={activeTab === tab}
            >
                {tab}
            </button>
        {/each}
    </div>

    <div class="content">
        {#each content[activeTab] as item}
            <a class="content-item" href={item.url} target="_blank" rel="noopener noreferrer">
                {item.text}
            </a>
        {/each}
    </div>
</div>

<style>
    .wrapper {
        flex-direction: column;
        background-color: #003049;
        color: var(--sec-color);
        font-family: "JetBrains Mono",serif;
        padding: 1.875rem;
        max-width: 56.25rem;
        margin: 2.5rem auto;
        border: 2px solid var(--sec-color);
        min-width: 18rem;

    }

    .tabs {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1.563rem;
        flex-wrap: wrap;
    }

    .tabs button {
        background: none;
        color: var(--sec-color);
        border: 2px solid transparent;
        padding: 0.625rem 1rem;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .tabs button.selected {
        border-color: var(--sec-color);
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-transform: lowercase;
    }

    .content-item {
        font-size: 1.15rem;
        color: #33ccff;
        transition: color 0.3s;
        cursor: pointer;
        line-height: 1.5;
        text-decoration: none;
        font-family: "JetBrains Mono",serif;
        text-transform: lowercase;
    }

    .content-item:hover {
        color: orange;
    }

    @media (max-width: 37.5rem) {
        .tabs {
            flex-direction: column;
        }

        .tabs button {
            width: 100%;
        }

        .wrapper {
            padding: 1.25rem;
        }
    }
</style>

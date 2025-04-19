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
            { text: "https://onlineminitools.com/", url: "https://onlineminitools.com/" },
            { text: "https://devhints.io/", url: "https://devhints.io/" },
            { text: "www.fairlynerdy.com", url: "https://www.fairlynerdy.com" },
            { text: "https://www.mathsisfun.com/", url: "https://www.mathsisfun.com/" },
            { text: "https://egyankosh.ac.in/handle/123456789/17990?mode=full", url: "https://egyankosh.ac.in/handle/123456789/17990?mode=full" },
            { text: "https://zerotomastery.io/", url: "https://zerotomastery.io/" }
        ],
        QUOTES: [
            "EVERY AND EACH TYPE OF PROBLEM HAS SOLUTION ALWAYS",
            "YOU CAN'T BE ONLINE EVERY TIME , BE READY FOR OFFLINE MODE",
            "AM I WASTING MY TIME",
            "KEEP BREATHING , TIDE WILL COME TAKE SOMEWHERE ; DON'T GIVE UP"
        ].map(q => ({ text: q, url: `https://www.google.com/search?q=${encodeURIComponent(q)}` })),
        SONGS: [
            { text: "No songs added yet...", url: "https://www.youtube.com/results?search_query=songs+playlist" }
        ]
    };
</script>

<div class="wrapper">
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
        background-color: #000;
        color: #00ff00;
        font-family: 'Courier New', Courier, monospace;
        padding: 30px;
        max-width: 900px;
        margin: 40px auto;
        border: 2px solid #00ff00;

    }

    .tabs {
        display: flex;
        gap: 12px;
        margin-bottom: 25px;
        flex-wrap: wrap;
    }

    .tabs button {
        background: none;
        color: #00ff00;
        border: 2px solid transparent;
        padding: 10px 16px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;

        transition: all 0.3s ease;
    }

    .tabs button.selected {
        border-color: #00ff00;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .content-item {
        font-size: 1.15rem;
        color: #33ccff;
        transition: color 0.3s;
        cursor: pointer;
        line-height: 1.5;
        text-decoration: none;
    }

    .content-item:hover {
        color: orange;
    }

    @media (max-width: 600px) {
        .tabs {
            flex-direction: column;
        }

        .tabs button {
            width: 100%;
        }

        .wrapper {
            padding: 20px;
        }
    }
</style>

<script>
    import map from './map.svg';
    import cat from './cat.svg';
    import music from './music.svg';

</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap');

    html, body {
        margin: 0;
        min-height: 100%;
        min-width: 100%;
        height: fit-content;
        padding: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        min-height: 100vh;

    }

    * {
        box-sizing: border-box;
    }


    /* Board */
    .board-f8c1c1478a13 {
        position: relative;
        width: 100%;
        height:auto;
        background: #0466C8;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        display: flex;
        align-items: center;
        align-content: stretch;
        justify-content: center;
        gap: 50px;
        padding: 100px 50px 100px 50px;
        z-index: 0;
        flex-direction: column;
        flex-wrap: nowrap;
        flex-grow: 1;
    }

    /* Board */
    .board-f8c1c1478a14 {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 100px;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    /* Board */
    .board-f8c2468f081c {
        font-family: 'JetBrains Mono', serif;
        font-size: 2.25rem;
        color: white;
        position: relative;
        height: 100%;
        background: none;
        border-radius: 0px 0px 0px 0px;
        flex: 1;
        flex-shrink: 0;
    }

    /* Board */
    .board-f8c1c1478a15 {
        position: relative;
        width: 100%;
        height: auto;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        column-gap: 121px;
        row-gap: 40px;
        padding: 0px 0px 0px 0px;
        flex-direction: row-reverse;
        flex-wrap: wrap;
    }

    /* Board */
    .board-f8c244a3d412 {
        position: relative;
        width: auto;
        height: auto;
        justify-content: center;
        align-items: center;
        background: none;
        border-radius: 0px 0px 0px 0px;
        flex-shrink: 0;
    }

    /* Board */
    .board-f8c242e1472c {
        position: relative;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        background: none;
        border-radius: 0px 0px 0px 0px;
        flex-shrink: 0;
    }

    /* Board */
    .board-f8c240ed9fd3 {
        position: relative;
        width: auto;
        height: auto;
        background: none;
        justify-content: center;
        align-items: center;
        border-radius: 0px 0px 0px 0px;
        flex-shrink: 0;
    }

    /* Board */
    .board-f8c1c1478a16 {
        font-family: 'Samarkan', serif;
        font-size: 3rem;
        color: white;
        position: relative;
        width: 100%;
        height: 87px;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }


    @font-face {
        font-family: 'Samarkan';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url("custom.woff") format('woff');
    }
    button {
        all: unset;
        cursor: pointer;
    }

</style>

<!-- frame: Board -->
<div class="frame board-f8c1c1478a13">
    <!-- frame: Board -->
    <div class="frame board-f8c1c1478a16"

    >
        <a href="https://www.google.com/search?client=firefox-b-d&q=define+purushottam"
           style="text-decoration: none; color: white" target="_blank">
            purushottam

        </a>

    </div>
    <!-- frame: Board -->
    <div class="frame board-f8c1c1478a15">
        <!-- frame: Board -->
        <button class="shape frame board-f8c240ed9fd3" on:click={()=>window.open('https://medium.com/@inxeoz')}>
            <img src={map} alt="map"/>
        </button>
        <!-- frame: Board -->
        <button class="shape frame board-f8c242e1472c" on:click={()=>window.open('https://github.com/inxeoz/')}>
            <img src="{cat}" alt="cat"/>
        </button>
        <!-- frame: Board -->
        <button class="shape frame board-f8c244a3d412" on:click={()=>window.open('https://www.youtube.com/@inxeoz')}>
            <img src={music} alt="music"/>
        </button>

    </div>
    <!-- frame: Board -->
    <div class="frame board-f8c1c1478a14">
        <!-- frame: Board -->
        <div class="shape frame board-f8c2468f081c">
            "The world has tied beauty to virtue so tightly that an 'ugly' face is mistaken for failure before it even
            speaks."
        </div>
    </div>
</div>

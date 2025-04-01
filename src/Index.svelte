<style>
    @font-face {
        font-family: 'Samarkan';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url("custom.woff") format('woff');
    }

    /* cyrillic-ext */
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    /* cyrillic */
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTPlOVgaY.woff2) format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* greek */
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOVOVgaY.woff2) format('woff2');
        unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }

    /* vietnamese */
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNVOVgaY.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }

    /* latin-ext */
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNFOVgaY.woff2) format('woff2');
        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    /* latin */
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://design.penpot.app/internal/gfonts/font/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }


    html, body {
        margin: 0;
        min-height: 100%;
        min-width: 100%;
        padding: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
    }

    .text-node {
        background-clip: text !important;
        -webkit-background-clip: text !important;
    }

    /* Board */
    .board-f7e5665fd1b2 {
        position: relative;
        width: 100%;
        background: #0466C8;
        border-radius: 0px 0px 0px 0px;
        overflow: hidden;
        display: flex;
        align-items: center;
        align-content: stretch;
        justify-content: center;
        gap: 90.5px;
        padding: 230px 150px 230px 150px;
        z-index: 0;
        flex-direction: column;
        flex-wrap: nowrap;
        flex-grow: 1;
    }

    /* Board */
    .board-f7e5882c779b {
        position: relative;
        width: 100%;
        height: 122px;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    /* "The world has tied beauty to virtue so tightly that an 'ugly' face is mistaken for failure before it even speaks." */
    .the-world-f7e5665fd1b5 {
        height: 100%;
        flex: 1;
        flex-shrink: 0;
    }

    .the-world-f7e5665fd1b5 .root-0 {


        display: flex;
        white-space: break-spaces;
        align-items: flex-start;
    }

    .the-world-f7e5665fd1b5 .root-0-paragraph-set-0 {
        display: inline-flex;
        flex-direction: column;
        justify-content: inherit;
        min-width: 100%;
        margin-right: 1px;
        vertical-align: top;
    }

    .the-world-f7e5665fd1b5 .root-0-paragraph-set-0-paragraph-0 {
        font-size: 0;
        line-height: 1.2;
        margin: 0;
        text-align: left;
    }

    .the-world-f7e5665fd1b5 .root-0-paragraph-set-0-paragraph-0-text-0 {
        color: rgba(255, 255, 255, 1);
        text-transform: none;

        line-break: auto;
        overflow-wrap: initial;
        white-space: break-spaces;
        font-size: 36px;
        text-rendering: geometricPrecision;
        caret-color: rgba(255, 255, 255, 1);
        text-decoration: none;
        letter-spacing: 0px;
        font-family: "JetBrains Mono";
        font-style: normal;
        font-weight: 400;
    }

    /* Board */
    .board-f7e5665fd1b4 {
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

    /* Group */
    .group-f7e5665fd1b6 {
        position: relative;
        width: 107px;
        height: 107px;
        flex-shrink: 0;
    }

    /* map-svgrepo-com */
    .mapsvgrep-f7e5666065b6 {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 107px;
        height: 107px;
        border-radius: 0px 0px 0px 0px;
    }

    /* map-svgrepo-com */
    .mapsvgrep-f7e5666065b7 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .mapsvgrep-f7e5666065b7 {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 107px;
        height: 107px;
    }

    /* svg-polygon */
    .svgpolygo-f7e566608850 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpolygo-f7e566608850 {
        position: absolute;
        left: 38.45px;
        top: 3.34px;
        width: 30.09px;
        height: 99.95px;
        opacity: 0.2;
    }

    /* svg-path */
    .svgpath-f7e56660884f > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e56660884f {
        position: absolute;
        left: 86.94px;
        top: 68.42px;
        width: 9.56px;
        height: 13.26px;
    }

    /* svg-path */
    .svgpath-f7e56660884e > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e56660884e {
        position: absolute;
        left: 3.34px;
        top: 30.46px;
        width: 31.76px;
        height: 58.4px;
    }

    /* svg-path */
    .svgpath-f7e56660884d > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e56660884d {
        position: absolute;
        left: 38.45px;
        top: 48.75px;
        width: 17.93px;
        height: 27.78px;
    }

    /* svg-path */
    .svgpath-f7e56660884c > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e56660884c {
        position: absolute;
        left: 50.16px;
        top: 21.67px;
        width: 18.39px;
        height: 14.19px;
    }

    /* svg-path */
    .svgpath-f7e5666065c0 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065c0 {
        position: absolute;
        left: 71.89px;
        top: 3.35px;
        width: 31.76px;
        height: 45.28px;
    }

    /* svg-path */
    .svgpath-f7e5666065bf > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065bf {
        position: absolute;
        left: 83.59px;
        top: 65.07px;
        width: 16.24px;
        height: 19.95px;
    }

    /* svg-path */
    .svgpath-f7e5666065be > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065be {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 107px;
        height: 107px;
    }

    /* svg-path */
    .svgpath-f7e5666065bd > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(4.547473508864641e-13px, 0px);
    }

    .svgpath-f7e5666065bd {
        position: absolute;
        left: 71.89px;
        top: 39.21px;
        width: 31.77px;
        height: 64.07px;
    }

    /* svg-path */
    .svgpath-f7e5666065bc > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065bc {
        position: absolute;
        left: 38.45px;
        top: 3.34px;
        width: 30.09px;
        height: 99.95px;
    }

    /* svg-path */
    .svgpath-f7e5666065bb > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065bb {
        position: absolute;
        left: 3.34px;
        top: 72.03px;
        width: 31.77px;
        height: 31.63px;
    }

    /* svg-path */
    .svgpath-f7e5666065ba > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065ba {
        position: absolute;
        left: 3.34px;
        top: 4.36px;
        width: 31.77px;
        height: 36.19px;
    }

    /* svg-path */
    .svgpath-f7e5666065b9 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5666065b9 {
        position: absolute;
        left: 71.89px;
        top: 10.07px;
        width: 10.93px;
        height: 14.14px;
    }

    /* base-background */
    .basebackg-f7e5666065b8 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .basebackg-f7e5666065b8 {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 107px;
        height: 107px;
        border-radius: 0px 0px 0px 0px;
        display: none;
    }

    /* svg-path */
    .svgpath-f7e5665fd1b7 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5665fd1b7 {
        position: relative;
        width: 86.32px;
        height: 107px;
        flex-shrink: 0;
    }

    /* svg-g */
    .svgg-f7e5665fd1b8 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgg-f7e5665fd1b8 {
        position: relative;
        width: 77.81px;
        height: 77.81px;
        flex-shrink: 0;
    }

    /* svg-path */
    .svgpath-f7e5665fd1cb > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5665fd1cb {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 77.81px;
        height: 77.81px;
    }

    /* svg-path */
    .svgpath-f7e5665fd1ca > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5665fd1ca {
        position: absolute;
        left: 41.5px;
        top: 20.75px;
        width: 36.31px;
        height: 15.56px;
    }

    /* svg-path */
    .svgpath-f7e5665fd1c9 > svg {
        position: absolute;
        top: 0px;
        left: 0px;
        transform: translate(0px, 0px);
    }

    .svgpath-f7e5665fd1c9 {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 77.81px;
        height: 77.81px;
    }

    /* Board */
    .board-f7e658287412 {
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

    /* purushottam */
    .purushotta-f7e5665fd1b3 {
        width: 411px;
        height: 87px;
        flex-shrink: 0;
    }

    .purushotta-f7e5665fd1b3 .root-0 {


        display: flex;
        white-space: break-spaces;
        align-items: flex-start;
    }

    .purushotta-f7e5665fd1b3 .root-0-paragraph-set-0 {
        display: inline-flex;
        flex-direction: column;
        justify-content: inherit;

        margin-right: 1px;
        vertical-align: top;
    }

    .purushotta-f7e5665fd1b3 .root-0-paragraph-set-0-paragraph-0 {
        font-size: 0;
        line-height: 1.2;
        margin: 0;
        text-align: left;
    }

    .purushotta-f7e5665fd1b3 .root-0-paragraph-set-0-paragraph-0-text-0 {
        color: rgba(255, 255, 255, 1);
        text-transform: none;

        line-break: auto;
        overflow-wrap: initial;
        white-space: pre;
        font-size: 72px;
        text-rendering: geometricPrecision;
        caret-color: rgba(255, 255, 255, 1);
        text-decoration: none;
        letter-spacing: 0px;
        font-family: "Samarkan";
        font-style: normal;
        font-weight: 400;
    }
</style>

<!-- frame: Board -->
<div class="frame board-f7e5665fd1b2">
    <!-- frame: Board -->
    <div class="frame board-f7e658287412">
        <!-- text: purushottam -->
        <div class="shape text purushotta-f7e5665fd1b3">
            <div class="text-node-html" id="html-text-node-dcb3643a-5925-8019-8005-f7e5665fd1b3" data-x="2479"
                 data-y="405.99991141244146">
                <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start"
                     xmlns="http://www.w3.org/1999/xhtml">
                    <div class="paragraph-set root-0-paragraph-set-0">


                        <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="ltr"><span
                                on:click={()=>window.open('https://www.google.com/search?client=firefox-b-d&q=define+purushottam')}
                                class="text-node root-0-paragraph-set-0-paragraph-0-text-0"
                                style="cursor: pointer; color:rgba(255, 255, 255, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:pre;font-size:72px;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:custom-e248973e-f8b8-800d-8005-f7e2cf0fdc15;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-family:&quot;Samarkan&quot;;font-style:normal;font-weight:400">purushottam</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- frame: Board -->
    <div class="frame board-f7e5665fd1b4">
        <!-- group: svg-g -->
        <div class="shape group svgg-f7e5665fd1b8"
             on:click={()=>window.open('https://www.youtube.com/@inxeoz')}
             style="cursor: pointer;">
            <svg width="77.813" xmlns="http://www.w3.org/2000/svg" height="77.813"
                 id="screenshot-dcb3643a-5925-8019-8005-f7e5665fd1b8" viewBox="2863.254 598.093 77.813 77.813"
                 style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                 version="1.1">
                <g id="shape-dcb3643a-5925-8019-8005-f7e5665fd1b8" style="fill:#000000" clip-path="url(#render-1762-a)"
                   rx="0"
                   ry="0">
                    <defs>
                        <clipPath id="render-1762-a" class="svg-def"
                                  transform="matrix(2.593750, 0.000000, 0.000000, 2.593750, 2860.660354, 595.500316)">
                            <rect width="32" height="32" fill="#fff"></rect>
                        </clipPath>
                    </defs>
                    <g id="shape-dcb3643a-5925-8019-8005-f7e5665fd1c9">
                        <defs></defs>
                        <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5665fd1c9">
                            <path
                                    d="M2915.129,629.219C2915.129,626.366,2912.795,624.032,2909.942,624.032C2908.826,624.032,2907.815,624.369,2906.959,624.965C2905.480,624.369,2903.872,624.032,2902.160,624.032C2895.002,624.032,2889.192,629.842,2889.192,637.000C2889.192,644.159,2895.002,649.969,2902.160,649.969C2909.319,649.969,2915.129,644.159,2915.129,637.000C2915.129,635.288,2914.792,633.680,2914.195,632.202C2914.766,631.346,2915.129,630.334,2915.129,629.219ZZM2919.798,602.348C2926.957,605.979,2932.818,611.789,2936.605,618.896C2936.372,618.870,2936.138,618.844,2935.879,618.844C2933.026,618.844,2930.692,621.178,2930.692,624.032C2930.692,626.885,2933.026,629.219,2935.879,629.219C2937.461,629.219,2938.888,628.493,2939.822,627.378C2940.600,630.464,2941.067,633.680,2941.067,637.000C2941.067,658.477,2923.637,675.907,2902.160,675.907C2880.684,675.907,2863.254,658.477,2863.254,637.000C2863.254,615.524,2880.684,598.094,2902.160,598.094C2908.489,598.094,2914.507,599.624,2919.798,602.348ZZ"
                                    style="fill:#ffc44d"></path>
                        </g>
                    </g>
                    <g id="shape-dcb3643a-5925-8019-8005-f7e5665fd1ca">
                        <defs></defs>
                        <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5665fd1ca">
                            <path
                                    d="M2936.605,618.896C2939.121,619.259,2941.066,621.438,2941.066,624.032C2941.066,625.303,2940.599,626.470,2939.821,627.378C2938.887,628.493,2937.461,629.219,2935.879,629.219C2933.025,629.219,2930.691,626.885,2930.691,624.032C2930.691,621.178,2933.025,618.844,2935.879,618.844C2936.138,618.844,2936.371,618.870,2936.605,618.896ZZM2909.942,624.032C2912.795,624.032,2915.129,626.366,2915.129,629.219C2915.129,630.334,2914.766,631.346,2914.195,632.202C2913.236,633.525,2911.679,634.407,2909.942,634.407C2907.088,634.407,2904.754,632.072,2904.754,629.219C2904.754,627.481,2905.636,625.925,2906.959,624.965C2907.815,624.369,2908.826,624.032,2909.942,624.032ZZ"
                                    style="fill:#ffe6ea"></path>
                        </g>
                    </g>
                    <g id="shape-dcb3643a-5925-8019-8005-f7e5665fd1cb">
                        <defs></defs>
                        <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5665fd1cb">
                            <path
                                    d="M2907.368,598.438C2905.664,598.210,2903.926,598.093,2902.160,598.093C2880.673,598.093,2863.254,615.513,2863.254,637.000C2863.254,658.486,2880.673,675.906,2902.160,675.906C2923.646,675.906,2941.066,658.486,2941.066,637.000M2941.067,624.032L2941.067,598.094L2915.129,603.281L2915.129,629.219M2941.067,624.032C2941.067,621.168,2938.743,618.844,2935.879,618.844C2933.016,618.844,2930.692,621.168,2930.692,624.032C2930.692,626.895,2933.016,629.219,2935.879,629.219C2938.743,629.219,2941.067,626.895,2941.067,624.032ZZM2915.129,629.219C2915.129,626.356,2912.805,624.032,2909.942,624.032C2907.078,624.032,2904.754,626.356,2904.754,629.219C2904.754,632.083,2907.078,634.407,2909.942,634.407C2912.805,634.407,2915.129,632.083,2915.129,629.219ZZM2897.112,625.052C2892.459,627.021,2889.191,631.628,2889.191,636.999C2889.191,644.163,2894.998,649.968,2902.160,649.968C2907.443,649.968,2911.990,646.809,2914.010,642.275M2881.410,616.250L2886.598,621.438M2922.910,657.750L2917.723,652.563"
                                    fill="none" stroke-linejoin="round" style="fill:none"></path>
                        </g>
                        <g fill="none" stroke-linejoin="round"
                           id="strokes-dcb3643a-5925-8019-8005-f7e890756211-dcb3643a-5925-8019-8005-f7e5665fd1cb"
                           class="strokes">
                            <g class="stroke-shape">
                                <defs></defs>
                                <path
                                        d="M2907.368,598.438C2905.664,598.210,2903.926,598.093,2902.160,598.093C2880.673,598.093,2863.254,615.513,2863.254,637.000C2863.254,658.486,2880.673,675.906,2902.160,675.906C2923.646,675.906,2941.066,658.486,2941.066,637.000M2941.067,624.032L2941.067,598.094L2915.129,603.281L2915.129,629.219M2941.067,624.032C2941.067,621.168,2938.743,618.844,2935.879,618.844C2933.016,618.844,2930.692,621.168,2930.692,624.032C2930.692,626.895,2933.016,629.219,2935.879,629.219C2938.743,629.219,2941.067,626.895,2941.067,624.032ZZM2915.129,629.219C2915.129,626.356,2912.805,624.032,2909.942,624.032C2907.078,624.032,2904.754,626.356,2904.754,629.219C2904.754,632.083,2907.078,634.407,2909.942,634.407C2912.805,634.407,2915.129,632.083,2915.129,629.219ZZM2897.112,625.052C2892.459,627.021,2889.191,631.628,2889.191,636.999C2889.191,644.163,2894.998,649.968,2902.160,649.968C2907.443,649.968,2911.990,646.809,2914.010,642.275M2881.410,616.250L2886.598,621.438M2922.910,657.750L2917.723,652.563"
                                        style="fill:none;fill-opacity:none;stroke-width:2;stroke:#000000;stroke-opacity:1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <!-- path: svg-path -->
        <div class="shape path svgpath-f7e5665fd1b7"
             on:click={()=>window.open('https://github.com/inxeoz/')}
             style="cursor: pointer;">
            <svg width="86.32" xmlns="http://www.w3.org/2000/svg" height="107"
                 id="screenshot-dcb3643a-5925-8019-8005-f7e5665fd1b7" viewBox="2655.933 583.5 86.32 107"
                 style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                 version="1.1">
                <g id="shape-dcb3643a-5925-8019-8005-f7e5665fd1b7">
                    <defs></defs>
                    <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5665fd1b7">
                        <path
                                d="M2742.105,624.777C2741.479,622.409,2739.049,620.996,2736.681,621.623C2736.291,621.739,2733.864,622.386,2731.238,624.620C2729.935,625.738,2728.598,627.285,2727.610,629.313C2726.618,631.338,2726.004,633.822,2726.010,636.634C2726.013,640.050,2726.874,643.926,2728.819,648.391C2730.132,651.401,2730.730,654.597,2730.730,657.763C2730.743,663.119,2728.967,668.370,2726.316,672.033C2725.000,673.867,2723.485,675.294,2721.966,676.217C2721.342,676.596,2720.724,676.872,2720.108,677.091L2720.315,675.868C2720.303,672.309,2719.469,668.587,2717.594,665.308C2711.668,654.933,2703.754,637.149,2703.754,637.149L2703.435,636.130C2709.594,634.500,2715.677,631.238,2718.722,624.639C2726.858,607.012,2710.137,594.810,2710.137,594.810C2710.137,594.810,2704.712,583.061,2702.002,583.513C2699.290,583.965,2693.414,591.649,2693.414,591.649L2688.443,591.649L2683.472,591.649C2683.472,591.649,2677.598,583.965,2674.887,583.513C2672.174,583.061,2666.752,594.810,2666.752,594.810C2666.752,594.810,2650.030,607.012,2658.166,624.639C2661.054,630.898,2666.680,634.162,2672.509,635.871L2671.892,637.890C2671.892,637.890,2665.224,654.933,2659.295,665.308C2653.367,675.681,2657.814,690.500,2665.965,690.500C2672.123,690.500,2682.504,690.500,2687.217,690.500C2688.741,690.500,2689.675,690.500,2689.675,690.500C2694.386,690.500,2704.768,690.500,2710.927,690.500C2713.571,690.500,2715.813,688.923,2717.448,686.462C2720.755,686.459,2723.887,685.444,2726.582,683.795C2730.648,681.305,2733.835,677.459,2736.077,672.950C2738.310,668.432,2739.600,663.204,2739.604,657.763C2739.604,653.482,2738.792,649.065,2736.954,644.845C2735.374,641.221,2734.881,638.530,2734.884,636.634C2734.890,635.061,2735.198,634.012,2735.586,633.203C2735.882,632.600,2736.239,632.123,2736.627,631.722C2737.207,631.122,2737.874,630.702,2738.372,630.456C2738.619,630.332,2738.818,630.254,2738.931,630.214L2739.025,630.182L2739.023,630.176C2741.346,629.516,2742.725,627.120,2742.105,624.777ZZ"
                                class="st0" style="fill:#001845;fill-opacity:1"></path>
                    </g>
                </g>
            </svg>
        </div>
        <!-- group: Group -->
        <div class="group group-f7e5665fd1b6"
             on:click={()=>window.open('https://medium.com/@inxeoz')}

             style="cursor: pointer;">
            <!-- frame: map-svgrepo-com -->
            <div class="frame mapsvgrep-f7e5666065b6">
                <!-- group: map-svgrepo-com -->
                <div class="shape group mapsvgrep-f7e5666065b7">
                    <svg width="107" xmlns="http://www.w3.org/2000/svg" height="107"
                         id="screenshot-dcb3643a-5925-8019-8005-f7e5666065b7" viewBox="2427.933 583.5 107 107"
                         style="-webkit-print-color-adjust::exact" xmlns:xlink="http://www.w3.org/1999/xlink"
                         fill="none"
                         version="1.1">
                        <g id="shape-dcb3643a-5925-8019-8005-f7e5666065b7" style="fill:#000000" version="1.0"
                           width="800"
                           height="800" xml:space="preserve" rx="0" ry="0">
              <defs></defs>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065b8" style="display:none">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065b8">
                  <rect rx="0" ry="0" x="2427.933395891654" y="583.4999999999998"
                        transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="107"
                        height="107.00000000000023" fill="none" style="fill:none"></rect>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065b9">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065b9">
                  <path
                          d="M2506.132,607.093C2506.993,607.180,2507.729,607.364,2508.320,607.515C2508.598,607.585,2508.962,607.677,2509.165,607.704C2509.914,607.129,2510.775,606.069,2510.750,605.184C2509.952,604.877,2508.626,604.303,2507.620,602.763C2506.624,601.195,2506.450,599.705,2506.323,598.619C2506.249,597.997,2506.192,597.505,2506.007,597.015C2505.734,596.303,2505.714,595.517,2505.950,594.794C2506.097,594.339,2506.274,593.948,2506.450,593.566L2499.824,595.656L2499.824,605.358C2500.282,605.515,2500.740,605.672,2501.151,605.818C2502.855,606.428,2504.203,606.908,2506.132,607.093ZZ"
                          style="fill:#45aab8"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065ba">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065ba">
                  <path
                          d="M2431.277,601.891L2431.277,612.183C2432.277,612.176,2433.263,612.122,2434.490,612.056L2435.840,611.982C2436.550,611.944,2437.256,611.701,2438.072,611.422C2439.177,611.041,2440.432,610.613,2441.940,610.613C2443.152,610.613,2444.343,610.902,2445.448,611.455C2447.529,612.470,2448.584,614.062,2449.432,615.338C2449.890,616.028,2450.286,616.625,2450.788,617.044C2451.973,618.039,2452.981,618.395,2454.379,618.887C2455.760,619.375,2457.327,619.927,2459.136,621.141C2460.630,622.145,2461.871,623.062,2463.044,624.045L2463.044,587.857L2433.466,598.754C2432.155,599.236,2431.277,600.496,2431.277,601.891ZZ"
                          style="fill:#45aab8"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065bb">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065bb">
                  <path
                          d="M2461.521,655.546C2461.424,655.539,2461.331,655.531,2461.237,655.526C2461.234,655.631,2461.230,655.738,2461.227,655.829C2461.190,656.984,2461.135,658.729,2459.941,660.286C2458.571,662.108,2456.683,663.071,2454.483,663.071C2453.282,663.071,2452.151,662.792,2451.154,662.546L2450.547,662.399C2448.497,661.933,2447.232,660.719,2446.306,659.834C2445.866,659.413,2445.450,659.015,2445.204,658.955C2444.594,658.808,2444.064,658.681,2443.764,658.681C2443.692,658.681,2443.560,658.681,2443.263,658.801C2442.510,659.109,2442.079,660.147,2441.273,662.446C2441.021,663.172,2440.755,663.924,2440.456,664.675C2440.185,665.360,2440.125,666.244,2440.063,667.182C2439.937,669.038,2439.767,671.583,2437.667,673.581C2436.169,675.008,2434.470,675.704,2432.479,675.704C2432.066,675.704,2431.672,675.660,2431.277,675.612L2431.277,683.813C2431.277,684.874,2431.789,685.882,2432.645,686.509C2433.222,686.932,2433.905,687.156,2434.621,687.156C2434.962,687.156,2435.301,687.104,2435.629,687.001L2463.043,678.344L2463.043,655.713C2462.857,655.645,2462.672,655.608,2462.474,655.600C2462.143,655.590,2461.826,655.568,2461.521,655.546ZZ"
                          style="fill:#45aab8"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065bc">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065bc">
                  <path
                          d="M2467.443,587.016C2467.102,586.901,2466.748,586.844,2466.387,586.844L2466.387,627.215C2467.027,627.887,2467.689,628.612,2468.415,629.436C2469.282,630.425,2469.862,631.413,2470.330,632.207C2470.889,633.155,2471.202,633.666,2471.685,633.979C2471.752,634.021,2471.783,634.031,2471.815,634.032C2472.071,634.032,2472.574,633.884,2473.061,633.738C2473.943,633.476,2475.047,633.146,2476.339,633.146C2477.294,633.146,2478.225,633.329,2479.130,633.698L2479.710,633.937C2482.333,635.012,2485.596,636.350,2487.006,640.972C2487.887,643.815,2487.883,646.210,2487.004,648.959C2486.357,651.020,2485.028,652.069,2484.234,652.694C2484.048,652.843,2483.791,653.043,2483.741,653.110L2483.712,653.197C2483.672,653.338,2483.754,653.776,2483.829,654.160C2484.035,655.222,2484.346,656.827,2483.595,658.694C2482.318,661.797,2479.812,663.372,2476.145,663.372C2475.762,663.372,2475.375,663.357,2474.993,663.334C2472.631,663.195,2471.128,662.018,2470.031,661.157C2469.628,660.841,2469.245,660.542,2468.844,660.304C2467.881,659.736,2467.092,659.104,2466.387,658.480L2466.387,677.284L2467.395,677.601L2496.480,686.790L2496.480,622.311C2496.174,622.318,2495.875,622.323,2495.557,622.334C2494.934,622.356,2494.285,622.378,2493.590,622.378C2493.207,622.378,2492.809,622.371,2492.393,622.353C2492.242,622.348,2492.093,622.344,2491.949,622.344C2491.177,622.344,2490.465,622.426,2489.711,622.512C2488.895,622.605,2488.051,622.700,2487.099,622.700C2485.929,622.700,2484.807,622.548,2483.669,622.234C2483.293,622.130,2482.893,622.055,2482.470,621.977C2480.771,621.657,2478.207,621.176,2476.374,618.163C2474.218,614.537,2474.196,610.074,2476.329,606.207C2478.447,602.417,2481.751,602.217,2483.938,602.085C2484.459,602.053,2484.949,602.023,2485.439,601.952C2486.066,601.866,2486.693,601.824,2487.302,601.824C2490.008,601.824,2492.056,602.646,2494.033,603.442C2494.838,603.765,2495.634,604.061,2496.477,604.328L2496.477,596.694L2495.474,596.362L2467.443,587.016ZZ"
                          style="fill:#45aab8"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065bd">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065bd">
                  <path
                          d="M2529.883,635.221L2529.709,635.186C2527.204,634.684,2525.237,633.895,2523.200,631.526C2521.731,629.846,2521.415,627.877,2521.182,626.440C2521.102,625.937,2520.982,625.185,2520.851,624.947C2520.607,624.968,2520.137,625.098,2519.721,625.212C2518.870,625.447,2517.812,625.740,2516.586,625.785C2515.558,625.830,2514.615,626.084,2513.619,626.353C2512.402,626.681,2511.022,627.052,2509.426,627.052C2508.280,627.052,2507.179,626.867,2506.047,626.481C2504.283,625.877,2503.131,624.904,2502.205,624.123C2501.571,623.588,2501.113,623.202,2500.521,622.956C2500.277,622.853,2500.050,622.779,2499.822,622.705L2499.822,686.780L2529.301,676.954C2530.670,676.498,2531.590,675.222,2531.590,673.781L2531.590,635.489C2531.006,635.418,2530.438,635.325,2529.883,635.221ZZ"
                          style="fill:#45aab8"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065be">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065be">
                  <path
                          d="M2532.198,584.792C2531.038,583.941,2529.647,583.502,2528.243,583.502C2527.569,583.502,2526.890,583.604,2526.233,583.811L2496.535,593.189L2468.500,583.843C2467.814,583.614,2467.100,583.500,2466.385,583.500C2465.602,583.500,2464.818,583.637,2464.074,583.913L2432.309,595.616C2429.681,596.584,2427.933,599.089,2427.933,601.891L2427.933,683.813C2427.933,685.942,2428.948,687.947,2430.669,689.208C2431.829,690.057,2433.217,690.500,2434.621,690.500C2435.296,690.500,2435.977,690.396,2436.634,690.189L2466.387,680.793L2496.139,690.189C2496.795,690.396,2497.472,690.500,2498.150,690.500C2498.866,690.500,2499.580,690.386,2500.267,690.157L2530.361,680.126C2533.091,679.215,2534.933,676.660,2534.933,673.781L2534.933,590.187C2534.933,588.058,2533.919,586.053,2532.198,584.792ZZM2463.043,678.344L2435.629,687.001C2435.301,687.104,2434.962,687.156,2434.621,687.156C2433.905,687.156,2433.222,686.932,2432.645,686.509C2431.789,685.882,2431.277,684.874,2431.277,683.813L2431.277,675.614C2431.670,675.660,2432.066,675.706,2432.479,675.706C2434.470,675.706,2436.169,675.010,2437.667,673.581C2439.767,671.583,2439.936,669.038,2440.063,667.182C2440.125,666.244,2440.185,665.360,2440.456,664.675C2440.757,663.924,2441.021,663.172,2441.273,662.446C2442.079,660.147,2442.510,659.109,2443.263,658.801C2443.560,658.681,2443.692,658.681,2443.764,658.681C2444.065,658.681,2444.594,658.808,2445.204,658.955C2445.450,659.015,2445.866,659.413,2446.306,659.834C2447.232,660.719,2448.499,661.933,2450.547,662.399L2451.154,662.546C2452.152,662.792,2453.282,663.071,2454.483,663.071C2456.681,663.071,2458.569,662.108,2459.941,660.286C2461.135,658.729,2461.189,656.984,2461.227,655.829C2461.230,655.738,2461.234,655.633,2461.237,655.526C2461.331,655.531,2461.424,655.539,2461.521,655.546C2461.827,655.570,2462.143,655.590,2462.474,655.600C2462.672,655.608,2462.857,655.645,2463.043,655.713L2463.043,678.344ZZM2463.043,652.329C2462.884,652.308,2462.742,652.264,2462.575,652.258C2461.953,652.239,2461.388,652.166,2460.861,652.166C2460.050,652.166,2459.321,652.336,2458.592,653.129C2457.333,654.484,2458.417,656.783,2457.271,658.275C2456.439,659.381,2455.504,659.726,2454.486,659.726C2453.496,659.726,2452.428,659.403,2451.293,659.136C2449.012,658.616,2448.258,656.252,2445.988,655.700C2445.137,655.496,2444.457,655.332,2443.766,655.332C2443.216,655.332,2442.661,655.436,2442.004,655.700C2439.182,656.848,2438.712,660.028,2437.346,663.441C2436.229,666.266,2437.338,669.274,2435.360,671.158C2434.399,672.076,2433.477,672.358,2432.481,672.358C2432.095,672.358,2431.693,672.315,2431.279,672.251L2431.279,615.525C2432.742,615.513,2434.158,615.414,2436.025,615.319C2438.358,615.190,2440.029,613.955,2441.942,613.955C2442.584,613.955,2443.253,614.094,2443.983,614.460C2446.219,615.550,2446.635,617.926,2448.640,619.604C2451.666,622.142,2454.068,621.764,2457.271,623.913C2459.659,625.516,2461.314,626.852,2463.044,628.570L2463.043,652.329ZZM2463.043,624.043C2461.869,623.060,2460.629,622.142,2459.134,621.139C2457.325,619.925,2455.758,619.373,2454.377,618.885C2452.980,618.394,2451.972,618.038,2450.786,617.043C2450.285,616.623,2449.890,616.028,2449.430,615.336C2448.583,614.059,2447.528,612.469,2445.446,611.454C2444.341,610.900,2443.151,610.611,2441.939,610.611C2440.431,610.611,2439.175,611.041,2438.070,611.420C2437.254,611.700,2436.549,611.942,2435.838,611.980L2434.490,612.056C2433.263,612.122,2432.277,612.176,2431.277,612.183L2431.277,601.891C2431.277,600.496,2432.155,599.236,2433.466,598.754L2463.043,587.857L2463.043,624.043ZZM2466.387,632.254C2467.635,633.940,2468.125,635.659,2469.866,636.786C2470.541,637.224,2471.185,637.378,2471.813,637.378C2473.320,637.378,2474.746,636.493,2476.338,636.493C2476.821,636.493,2477.321,636.575,2477.841,636.788C2480.511,637.901,2482.781,638.590,2483.809,641.967C2484.483,644.141,2484.501,645.806,2483.809,647.964C2483.127,650.146,2481.129,650.031,2480.500,652.259C2479.940,654.165,2481.219,655.635,2480.500,657.427C2479.614,659.584,2477.978,660.033,2476.144,660.033C2475.829,660.033,2475.510,660.020,2475.187,660.000C2473.218,659.885,2472.332,658.484,2470.539,657.427C2468.832,656.420,2467.654,655.043,2466.387,653.958L2466.387,632.254ZZM2496.480,618.967C2495.572,618.986,2494.640,619.034,2493.590,619.034C2493.249,619.034,2492.897,619.027,2492.530,619.012C2492.332,619.004,2492.140,619.001,2491.949,619.001C2490.099,619.001,2488.683,619.357,2487.099,619.357C2486.319,619.357,2485.499,619.270,2484.563,619.012C2482.406,618.414,2480.616,618.698,2479.248,616.451C2477.662,613.784,2477.742,610.569,2479.248,607.837C2480.827,605.012,2483.206,605.654,2485.894,605.264C2486.389,605.198,2486.855,605.166,2487.303,605.166C2490.642,605.166,2492.844,606.883,2496.479,607.827L2496.480,618.967ZZM2496.480,604.327C2495.638,604.059,2494.844,603.763,2494.036,603.440C2492.058,602.645,2490.012,601.822,2487.305,601.822C2486.696,601.822,2486.070,601.864,2485.443,601.951C2484.953,602.021,2484.461,602.053,2483.941,602.083C2481.754,602.215,2478.451,602.416,2476.333,606.206C2474.201,610.073,2474.221,614.535,2476.378,618.161C2478.210,621.176,2480.775,621.656,2482.473,621.975C2482.896,622.053,2483.296,622.129,2483.672,622.232C2484.811,622.547,2485.932,622.699,2487.103,622.699C2488.054,622.699,2488.898,622.602,2489.714,622.510C2490.468,622.425,2491.180,622.343,2491.953,622.343C2492.097,622.343,2492.245,622.346,2492.396,622.351C2492.812,622.369,2493.208,622.376,2493.593,622.376C2494.288,622.376,2494.937,622.353,2495.561,622.333C2495.877,622.321,2496.178,622.316,2496.484,622.309L2496.484,686.788L2467.398,677.603L2466.387,677.287L2466.387,658.484C2467.092,659.107,2467.881,659.739,2468.844,660.308C2469.245,660.545,2469.628,660.843,2470.031,661.160C2471.128,662.021,2472.631,663.198,2474.993,663.337C2475.376,663.362,2475.764,663.375,2476.145,663.375C2479.812,663.375,2482.318,661.802,2483.595,658.698C2484.344,656.830,2484.035,655.225,2483.829,654.163C2483.754,653.779,2483.670,653.341,2483.712,653.200L2483.741,653.114C2483.791,653.047,2484.048,652.846,2484.234,652.697C2485.030,652.072,2486.359,651.024,2487.004,648.962C2487.883,646.212,2487.887,643.818,2487.006,640.976C2485.596,636.353,2482.333,635.015,2479.710,633.940L2479.130,633.701C2478.225,633.332,2477.294,633.150,2476.339,633.150C2475.047,633.150,2473.943,633.477,2473.061,633.742C2472.574,633.887,2472.071,634.036,2471.815,634.036C2471.782,634.034,2471.752,634.024,2471.685,633.982C2471.203,633.670,2470.889,633.160,2470.330,632.210C2469.864,631.414,2469.282,630.428,2468.415,629.440C2467.689,628.616,2467.027,627.890,2466.387,627.218L2466.387,586.844C2466.748,586.844,2467.102,586.901,2467.443,587.016L2495.477,596.360L2496.480,596.694L2496.480,604.327ZZM2499.824,595.656L2506.448,593.565C2506.274,593.948,2506.095,594.337,2505.948,594.792C2505.712,595.517,2505.732,596.302,2506.005,597.014C2506.191,597.504,2506.249,597.995,2506.321,598.617C2506.448,599.704,2506.624,601.195,2507.618,602.762C2508.626,604.301,2509.952,604.877,2510.748,605.183C2510.773,606.067,2509.912,607.127,2509.163,607.702C2508.961,607.674,2508.596,607.583,2508.319,607.513C2507.727,607.363,2506.991,607.179,2506.130,607.092C2504.201,606.906,2502.853,606.426,2501.150,605.816C2500.739,605.669,2500.280,605.512,2499.822,605.356L2499.824,595.656ZZM2531.590,673.781C2531.590,675.222,2530.670,676.498,2529.303,676.953L2499.824,686.778L2499.824,622.704C2500.051,622.777,2500.277,622.853,2500.523,622.955C2501.115,623.200,2501.573,623.587,2502.206,624.122C2503.133,624.902,2504.285,625.875,2506.048,626.479C2507.180,626.863,2508.282,627.051,2509.427,627.051C2511.024,627.051,2512.403,626.680,2513.620,626.352C2514.618,626.083,2515.560,625.830,2516.588,625.783C2517.813,625.740,2518.872,625.446,2519.723,625.210C2520.139,625.096,2520.607,624.966,2520.853,624.946C2520.983,625.183,2521.104,625.936,2521.184,626.439C2521.416,627.875,2521.732,629.844,2523.202,631.525C2525.238,633.894,2527.206,634.684,2529.710,635.184L2529.884,635.219C2530.438,635.323,2531.008,635.417,2531.591,635.487L2531.590,673.781ZZM2531.590,632.128C2531.198,632.068,2530.792,631.989,2530.366,631.907C2528.415,631.518,2527.191,631.036,2525.718,629.323C2523.979,627.337,2524.991,624.123,2523.075,622.445C2522.336,621.813,2521.627,621.602,2520.911,621.602C2519.534,621.600,2518.133,622.384,2516.439,622.445C2513.654,622.568,2511.738,623.709,2509.427,623.709C2508.713,623.709,2507.961,623.602,2507.133,623.319C2504.890,622.550,2504.030,620.793,2501.820,619.873C2501.108,619.572,2500.458,619.387,2499.826,619.248L2499.826,608.896C2501.708,609.566,2503.387,610.188,2505.803,610.421C2507.125,610.553,2508.193,611.056,2509.263,611.056C2509.865,611.056,2510.469,610.895,2511.116,610.421C2513.120,608.926,2514.842,606.204,2513.777,603.552C2513.085,601.805,2511.418,602.462,2510.442,600.969C2509.396,599.324,2509.892,597.821,2509.130,595.823C2509.604,594.359,2510.414,593.329,2510.862,592.170L2527.236,586.999C2527.562,586.896,2527.901,586.844,2528.244,586.844C2528.955,586.844,2529.657,587.073,2530.224,587.489C2531.078,588.118,2531.590,589.126,2531.590,590.187L2531.590,632.128ZZ"
                          style="fill:#394240"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065bf">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065bf">
                  <path
                          d="M2520.398,649.241C2519.265,648.894,2518.195,648.566,2517.038,648.566C2515.948,648.566,2514.963,648.862,2514.022,649.474C2512.965,650.171,2512.661,651.032,2512.590,651.629C2512.405,653.242,2513.600,654.510,2514.866,655.850C2515.712,656.747,2516.989,658.101,2516.742,658.744C2516.581,659.172,2516.096,659.406,2515.105,659.803C2513.873,660.298,2512.007,661.042,2511.604,663.265C2511.377,664.499,2511.658,665.633,2512.415,666.542C2513.480,667.818,2515.409,668.520,2517.854,668.520C2520.345,668.520,2522.794,667.801,2524.421,666.587C2527.184,664.467,2528.244,661.371,2527.570,657.387C2526.898,653.323,2524.454,650.517,2520.398,649.241ZZM2522.403,663.922C2521.383,664.685,2519.596,665.178,2517.854,665.178C2516.317,665.178,2515.307,664.790,2514.983,664.402C2514.926,664.333,2514.827,664.216,2514.891,663.867C2514.953,663.534,2515.210,663.364,2516.345,662.911C2517.541,662.433,2519.178,661.777,2519.868,659.931C2520.860,657.335,2518.800,655.153,2517.295,653.558C2516.897,653.137,2516.342,652.548,2516.066,652.149C2516.944,651.686,2517.945,651.988,2519.500,652.467C2522.246,653.331,2523.805,655.118,2524.272,657.940C2524.743,660.724,2524.162,662.573,2522.403,663.922ZZ"
                          style="fill:#394240"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e5666065c0">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e5666065c0">
                  <path
                          d="M2530.222,587.491C2529.655,587.074,2528.953,586.845,2528.243,586.845C2527.901,586.845,2527.562,586.897,2527.234,587.001L2510.860,592.172C2510.410,593.329,2509.603,594.360,2509.128,595.825C2509.890,597.823,2509.394,599.326,2510.440,600.971C2511.417,602.464,2513.084,601.807,2513.776,603.554C2514.841,606.206,2513.119,608.929,2511.114,610.422C2510.466,610.897,2509.864,611.058,2509.262,611.058C2508.190,611.058,2507.123,610.554,2505.801,610.422C2503.385,610.190,2501.707,609.568,2499.824,608.896L2499.824,619.246C2500.456,619.385,2501.108,619.571,2501.819,619.872C2504.027,620.791,2504.888,622.548,2507.132,623.317C2507.959,623.600,2508.712,623.707,2509.426,623.707C2511.738,623.707,2513.652,622.567,2516.437,622.443C2518.131,622.383,2519.532,621.599,2520.910,621.600C2521.625,621.600,2522.334,621.811,2523.073,622.443C2524.989,624.122,2523.978,627.335,2525.716,629.321C2527.189,631.033,2528.413,631.515,2530.364,631.906C2530.792,631.988,2531.197,632.066,2531.588,632.126L2531.588,590.187C2531.590,589.126,2531.078,588.118,2530.222,587.491ZZ"
                          style="fill:#f9ebb2"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e56660884c">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e56660884c">
                  <path
                          d="M2485.896,605.264C2483.209,605.654,2480.830,605.012,2479.250,607.837C2477.744,610.571,2477.663,613.786,2479.250,616.451C2480.616,618.700,2482.408,618.414,2484.565,619.012C2485.501,619.270,2486.320,619.357,2487.101,619.357C2488.684,619.357,2490.100,619.001,2491.951,619.001C2492.140,619.001,2492.334,619.004,2492.531,619.012C2492.899,619.027,2493.250,619.034,2493.591,619.034C2494.641,619.034,2495.574,618.986,2496.482,618.967L2496.482,607.827C2492.847,606.885,2490.645,605.166,2487.307,605.166C2486.857,605.166,2486.391,605.198,2485.896,605.264ZZ"
                          style="fill:#f9ebb2"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e56660884d">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e56660884d">
                  <path
                          d="M2477.842,636.786C2477.321,636.574,2476.822,636.492,2476.339,636.492C2474.748,636.492,2473.321,637.376,2471.815,637.376C2471.186,637.376,2470.543,637.222,2469.867,636.784C2468.125,635.659,2467.635,633.940,2466.387,632.254L2466.387,653.954C2467.655,655.040,2468.832,656.419,2470.539,657.424C2472.332,658.480,2473.219,659.881,2475.187,659.997C2475.510,660.017,2475.831,660.030,2476.144,660.030C2477.979,660.030,2479.614,659.580,2480.500,657.424C2481.219,655.631,2479.940,654.162,2480.500,652.256C2481.129,650.027,2483.125,650.141,2483.809,647.961C2484.501,645.802,2484.483,644.137,2483.809,641.964C2482.783,638.588,2480.511,637.899,2477.842,636.786ZZ"
                          style="fill:#f9ebb2"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e56660884e">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e56660884e">
                  <path
                          d="M2448.638,619.606C2446.633,617.927,2446.217,615.552,2443.982,614.461C2443.251,614.095,2442.582,613.957,2441.940,613.957C2440.026,613.957,2438.354,615.192,2436.024,615.321C2434.156,615.416,2432.740,615.515,2431.277,615.526L2431.277,672.253C2431.692,672.317,2432.091,672.360,2432.479,672.360C2433.476,672.360,2434.395,672.078,2435.358,671.160C2437.338,669.276,2436.229,666.268,2437.344,663.442C2438.710,660.030,2439.182,656.850,2442.002,655.702C2442.659,655.437,2443.214,655.334,2443.764,655.334C2444.455,655.334,2445.135,655.498,2445.986,655.702C2448.255,656.253,2449.011,658.617,2451.291,659.137C2452.426,659.403,2453.495,659.727,2454.484,659.727C2455.503,659.727,2456.437,659.383,2457.270,658.276C2458.415,656.783,2457.332,654.484,2458.591,653.130C2459.321,652.336,2460.048,652.167,2460.859,652.167C2461.386,652.167,2461.951,652.241,2462.573,652.259C2462.742,652.266,2462.884,652.309,2463.041,652.331L2463.041,628.574C2461.311,626.855,2459.656,625.519,2457.268,623.916C2454.066,621.766,2451.662,622.142,2448.638,619.606ZZ"
                          style="fill:#f9ebb2"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e56660884f">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e56660884f">
                  <path
                          d="M2519.502,652.465C2517.947,651.987,2516.947,651.682,2516.068,652.147C2516.344,652.545,2516.899,653.135,2517.297,653.557C2518.801,655.152,2520.861,657.335,2519.870,659.930C2519.179,661.776,2517.541,662.431,2516.347,662.909C2515.212,663.362,2514.954,663.533,2514.893,663.865C2514.829,664.215,2514.928,664.332,2514.985,664.400C2515.307,664.787,2516.319,665.176,2517.855,665.176C2519.597,665.176,2521.383,664.683,2522.404,663.921C2524.163,662.571,2524.745,660.724,2524.274,657.939C2523.807,655.116,2522.246,653.329,2519.502,652.465ZZ"
                          style="fill:#f9ebb2"></path>
                </g>
              </g>
                            <g id="shape-dcb3643a-5925-8019-8005-f7e566608850" style="opacity:0.2">
                <defs></defs>
                                <g class="fills" id="fills-dcb3643a-5925-8019-8005-f7e566608850">
                  <path d="M2496.480,686.790L2466.387,677.125L2466.387,586.844L2496.480,596.875Z"
                        style="fill:#231f20"></path>
                </g>
              </g>
            </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <!-- frame: Board -->
    <div class="frame board-f7e5882c779b">
        <!-- text: "The world has tied beauty to virtue so tightly that an 'ugly' face is mistaken for failure before it even speaks." -->
        <div class="shape text the-world-f7e5665fd1b5">
            <div class="text-node-html" id="html-text-node-dcb3643a-5925-8019-8005-f7e5665fd1b5" data-x="1993"
                 data-y="781.0000885875584">
                <div class="root rich-text root-0" style="display:flex;white-space:break-spaces;align-items:flex-start"
                     xmlns="http://www.w3.org/1999/xhtml">
                    <div class="paragraph-set root-0-paragraph-set-0">
                        <p class="paragraph root-0-paragraph-set-0-paragraph-0" dir="ltr"><span
                                class="text-node root-0-paragraph-set-0-paragraph-0-text-0"
                                style="color:rgba(255, 255, 255, 1);text-transform:none;line-break:auto;overflow-wrap:initial;white-space:break-spaces;font-size:36px;text-rendering:geometricPrecision;caret-color:rgba(255, 255, 255, 1);text-decoration:none;--font-id:gfont-jetbrains-mono;--fills:[[&quot;^ &quot;,&quot;~:fill-color&quot;,&quot;#ffffff&quot;,&quot;~:fill-opacity&quot;,1]];letter-spacing:0px;font-family:&quot;JetBrains Mono&quot;;font-style:normal;font-weight:400">&quot;The world has tied beauty to virtue so tightly that an &#x27;ugly&#x27; face is mistaken for failure before it even speaks.&quot;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

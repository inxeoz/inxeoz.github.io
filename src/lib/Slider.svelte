<script lang="ts">
    import { StartChnageMusicTimingFromSlider } from "./store";

    export let value: number = 0.5;
    export let width: number = 400;
    export let knobSize: number = 40;
    export let barHeight: number = 8;
    export let leftColor: string = '#77dd77';
    export let rightColor: string = '#ff6961';
    export let knobColor: string = '#4f8cff';
    export let onChange: (value: number) => void = () => {};

    let dragging = false;
    let sliderEl: HTMLDivElement;

    // Cache reused values
    $: trackWidth = width - knobSize;
    $: x = value * trackWidth;
    $: leftWidth = x + knobSize * 0.5;

    function setValueFromX(newX: number) {
        const clampedX = Math.max(0, Math.min(trackWidth, newX));
        value = clampedX / trackWidth;
        onChange(value);
    }

    function startDrag(clientX: number) {
        dragging = true;
        const offsetX = clientX - x;

        const move = (clientX: number) => {
            const newX = clientX - offsetX;
            setValueFromX(newX);
        };

        const onMouseMove = (e: MouseEvent) => move(e.clientX);
        const onTouchMove = (e: TouchEvent) => move(e.touches[0].clientX);

        const stopDrag = () => {
            dragging = false;
            sliderEl.removeEventListener('mousemove', onMouseMove);
            sliderEl.removeEventListener('mouseup', stopDrag);
            sliderEl.removeEventListener('touchmove', onTouchMove);
            sliderEl.removeEventListener('touchend', stopDrag);
            StartChnageMusicTimingFromSlider.set(false);
        };

        sliderEl.addEventListener('mousemove', onMouseMove);
        sliderEl.addEventListener('mouseup', stopDrag);
        sliderEl.addEventListener('touchmove', onTouchMove);
        sliderEl.addEventListener('touchend', stopDrag);
    }

    function handleMouseDown(event: MouseEvent) {
        StartChnageMusicTimingFromSlider.set(true);
        startDrag(event.clientX);
    }

    function handleTouchStart(event: TouchEvent) {
        StartChnageMusicTimingFromSlider.set(true);
        startDrag(event.touches[0].clientX);
    }
</script>


<style>
    .slider-container {
        position: relative;
        user-select: none;
        touch-action: none;
    }

    .bar {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 4px;
        z-index: 1;
        height: 8px;
        transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .knob {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        cursor: grab;
        z-index: 2;
        transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s;
        touch-action: none;
    }

    .knob.dragging {
        transition: none;
        cursor: grabbing;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    }
</style>

<div
        bind:this={sliderEl}
        class="slider-container"
        style="width: {width}px; height: {Math.max(knobSize, 2 * barHeight)}px;"
>
    <div
            class="bar left"
            style="
            width: {leftWidth}px;
            left: 0;
            background: {leftColor};
            height: {barHeight}px;
        "
    ></div>

    <div
            class="knob"
            class:dragging={dragging}
            style="
            left: {x}px;
            width: {knobSize}px;
            height: {knobSize}px;
            background: {knobColor};
        "
            on:mousedown={handleMouseDown}
            on:touchstart={handleTouchStart}
    ></div>


</div>

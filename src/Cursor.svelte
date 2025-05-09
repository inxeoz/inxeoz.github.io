<script>
    import { onMount, onDestroy } from 'svelte';
    import Device from "svelte-device-info";

    let cursorRounded;
    let cursorPointed;

    let mouseX = 0, mouseY = 0;
    let roundedX = 0, roundedY = 0;

    let animationFrameId;

    // Throttle mousemove using requestAnimationFrame
    let ticking = false;
    function handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
    }

    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }

    function animate() {
        roundedX = lerp(roundedX, mouseX, 0.15);
        roundedY = lerp(roundedY, mouseY, 0.15);

        if (cursorRounded) cursorRounded.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
        if (cursorPointed) cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        animationFrameId = requestAnimationFrame(animate);
    }

    onMount(() => {
        // Only enable on precise, hover-capable devices
        if (Device.PointingAccuracy !== 'coarse' && Device.canHover) {
            window.addEventListener('mousemove', handleMouseMove);
            animate();
        }

        // Clean up on destroy
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    });
</script>


<style>
    :global(body) {
        background: radial-gradient(circle at center, #0f0f0f 0%, #050505 100%);
        cursor: none;
        height: 150vh;
        margin: 0;
        overflow-x: hidden;
        font-family: 'Fira Code', monospace;
    }

    .cursor {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        will-change: transform;
    }

    .rounded {
        width: 40px;
        height: 40px;
        border: 2px solid rgba(0, 255, 170, 0.75);
        border-radius: 50%;
        backdrop-filter: blur(3px);
        box-shadow: 0 0 12px rgba(0, 255, 170, 0.7), 0 0 30px rgba(0, 255, 170, 0.4);
        transform: translate3d(-100px, -100px, 0);
        transition: border-color 0.3s ease;
    }

    .pointed {
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, #0ff, #0fa);
        border-radius: 50%;
        box-shadow: 0 0 8px #0ff, 0 0 20px #0fa;
        transform: translate3d(-100px, -100px, 0);
    }

    .cursor:hover .rounded {
        border-color: rgba(255, 255, 255, 0.9);
    }
</style>


{#if Device.PointingAccuracy !== 'coarse' && Device.canHover}
    <div class="cursor rounded" bind:this={cursorRounded} aria-hidden="true"></div>
    <div class="cursor pointed" bind:this={cursorPointed} aria-hidden="true"></div>
{/if}

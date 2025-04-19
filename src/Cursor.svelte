<script>
    import { onMount } from 'svelte';

    let cursorRounded;
    let cursorPointed;

    let mouseX = 0;
    let mouseY = 0;
    let roundedX = 0;
    let roundedY = 0;

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const animate = () => {
        roundedX = lerp(roundedX, mouseX, 0.15);
        roundedY = lerp(roundedY, mouseY, 0.15);

        cursorRounded.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        requestAnimationFrame(animate);
    };

    onMount(() => {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        animate();
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

<div class="cursor rounded" bind:this={cursorRounded}></div>
<div class="cursor pointed" bind:this={cursorPointed}></div>

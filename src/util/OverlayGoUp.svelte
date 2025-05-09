<script>
    import { fly } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';

    export let button_color = '#58FF98'
    export let text_color = '#000'

    let show = false;

    function scrollToTop() {
        show = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleScroll() {
        show = window.scrollY > 0;
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        // Check initial scroll position
        handleScroll();
    });

    onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

{#if show}
    <button class="go-up-button" on:click={scrollToTop} in:fly={{ y: 20, duration: 300 }} style="--button-color: {button_color};
--text-color: {text_color}
">
        ↑ Top
    </button>
{/if}

<style>
    .go-up-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--button-color);
        color: var(--text-color);
        border: none;
        padding: 0.75rem 1.25rem;
        border-radius: 999px;
        cursor: pointer;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 9999;
        transition: background-color 0.2s ease-in-out;
    }
</style>

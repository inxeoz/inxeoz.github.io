<script>
    import { showGoUpButton } from "./store.js";
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';


    function scrollToTop() {
        showGoUpButton.set(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });

    }

    // Show button when scrolled past 200px
    const handleScroll = () => {
        showGoUpButton.set(window.scrollY > 0);
    };

    onMount(() => {
        console.log('mounted');
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

</script>
{#if $showGoUpButton}
    <!-- Overlay-style floating button -->
    <button class="go-up-button" on:click={scrollToTop} in:fly={{ y: 20, duration: 300 }}>
        ↑ Top
    </button>
{/if}

<style>
    .go-up-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: #1a1a1a;
        color: white;
        border: none;
        padding: 0.75rem 1.25rem;
        border-radius: 999px;
        cursor: pointer;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
        font-size: 1rem;
        z-index: 9999;
        transition: background-color 0.2s ease-in-out;
    }

    .go-up-button:hover {
        background-color: #333;
    }
</style>

<script>
    // You can optionally add props or logic here if needed
</script>

<style>
    .container {
        background-color: #1a1a1a;
        color: #00ff66;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        font-family: 'Courier New', monospace;
    }

    .main-text {
        font-size: 4rem;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .footer-text {
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        opacity: 0.8;
        margin-top: auto;
        margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
        .main-text {
            font-size: 2.5rem;
        }

        .footer-text {
            font-size: 0.9rem;
        }
    }
</style>

<div class="container">
    <div class="main-text">
        Start<br />
        Practice
    </div>

    <div class="footer-text">
        An idiot who practices can beat a genius who doesn’t.
    </div>
</div>

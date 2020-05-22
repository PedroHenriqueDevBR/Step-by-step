<template>
    <footer class="footer">
        <span class="copyright"> Desenvolvido por <a href="https://pedrohenriquedevbr.github.io/" target="_blank">PedroHenriqueDevBR</a> </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

    .footer {
        grid-area: footer;
        background-color: #000d;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;

        color: #ECEFF1;
        font-size: 0.9rem;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 500;
    }

</style>
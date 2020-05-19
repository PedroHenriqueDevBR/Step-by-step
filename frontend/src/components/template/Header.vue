<template>
    <header class="header">
        <a href="#" class="toggle" @click="toggleMenu()" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? 'fa fa-angle-left' : 'fa fa-angle-right'
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: #000d;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 200;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #fff;
        text-decoration: none;
    }

    header.header a.toggle {
        width: 60px;
        height: 100%;
        color: #ccc;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        transition: 200ms;
    }

    header.header a.toggle:hover {
        color: #fff;
        font-size: 1.5rem;
    }
</style>
<template>
    <header class="header">
        <a href="#" class="toggle" @click="toggleMenu()" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">{{ title }}</h1>
        <UserDropdown v-if="!hideUserDropdowns" />
    </header>
</template>

<script>

import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? 'fa fa-times' : 'fa fa-bars'
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
        font-size: 1.1rem;
    }
</style>
<template>
    <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: #000b;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
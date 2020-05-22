<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-none d-sm-block">{{ user.name }}</span>
            <div class="user-dropdown-img">
                <h1>P</h1>
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'UserDropdown',
    computed: mapState(['user'])
}
</script>

<style>

.user-dropdown {
    height: 100px;
    color: ivory;
}

.user-button {
    height: 100%;
    display: flex;
    align-items: center;
}

</style>
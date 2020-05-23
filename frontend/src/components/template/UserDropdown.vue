<template>
    <div class="user-dropdown">
        <div class="user-button" @click="hideMenuContent = !hideMenuContent">
            <span class="d-none d-sm-block">{{ user.name }}</span>
            <div class="user-dropdown-img">
                <Gravatar :email="user.email" alt="user" />
            </div>
        </div>
        <div class="user-dropdown-content" :class="{none: hideMenuContent}">
            <router-link to="/" style="text-decoration:none">
                <i class="fa fa-home"></i> Home
            </router-link>
            <router-link to="/admin" style="text-decoration:none">
                <i class="fa fa-cogs"></i> Configurações
            </router-link>
            <router-link to="/" style="text-decoration:none">
                <i class="fa fa-sign-out"></i> Sair
            </router-link>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar';

export default {
    name: 'UserDropdown',
    components: { Gravatar },
    computed: mapState(['user']),
    data: function() {
        return {
            hideMenuContent: true
        }
    }
}
</script>

<style>

.user-dropdown {
    position: relative;
    height: 100%;
    font-size: 0.8rem;
    cursor: pointer;
}

.user-dropdown * {
    outline: none;
}

.user-button {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 100;
    height: 100%;
    padding: 0px 20px;
    font-size: 0.8rem;
}

.user-dropdown:hover {
    background: rgba(0, 0, 0, 0.2);
}

.user-dropdown-img {
    margin: 0px 10px;
}

.user-dropdown-img > img {
    height: 30px;
    border-radius: 5px;
}

.user-dropdown-content {
    position: absolute;
    right: 0;
    background: #000d;
    color: #fff;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;
}

.user-dropdown-content a {
    width: 100%;
    color: #ddd;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #37474F;
}

.user-dropdown-content a:hover {
    background: #0004;
    color: #fff;
}

.none {
    opacity: 0;
    display: none;
}

</style>
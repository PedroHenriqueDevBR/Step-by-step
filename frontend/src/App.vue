<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}">
		<Header title="Step by Step" :hideToggle="false" />
		<Menu />
		<Content />
	</div>
</template>

<script>

import { mapState } from 'vuex'
import Header from './components/template/Header'
import Menu from './components/template/Menu'
import Content from './components/template/Content'
import Footer from './components/template/Footer'

export default {
	name: "App",
	components: { Header, Menu, Content, Footer },
	data: function() {
		return {
			aplicationName: 'Step by Step'
		}
	},
	computed: mapState(['isMenuVisible'])
}
</script>

<style>

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		--webkit-font-smoothing: antialiased;
		--moz-osx-font-smoothing: grayscale;
		outline: none;
	}

	body {
		width: 100%;
		height: 100%;
		background: url('./assets/bg.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
	}

	#app {
		height: 100vh;
		display: grid;

		grid-template-rows: 5% 1fr;
		grid-template-columns: 20% 1fr;
		grid-template-areas: 
			"header header"
			"menu content";
	}
	
	#app.hide-menu {
		grid-template-areas: 
			"header header"
			"content content";
	}


</style>
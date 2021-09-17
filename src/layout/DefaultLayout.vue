<template>
	<div class="main">
		<Navbar />
		<div class="main__template">
			<Profile />
			<Navigation />
		</div>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue"
	import Profile from "../components/Profile.vue"
	import Navigation from "../components/Navigation.vue"

	export default {
		name: "DefaultLayout",
		components: {
			Navbar,
			Profile,
			Navigation
		}
	}
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	@media screen and (min-width: 1024px) {
		.main__template {
			display: grid;
			grid-template-columns: 20% 80%;
			column-gap: 20px;
		}
	}
</style>

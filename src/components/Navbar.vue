<template>
	<div class="navbar">
		<div class="navbar__items">
			<img src="@/assets/img/icon-github-2.png" alt="GitHub logo" />
			<h1>GitHub</h1>
			<h2>profiles</h2>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Navbar"
	}
</script>
<style lang="scss">
	.navbar {
		height: 60px;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: $slate-grey;

		.navbar__items {
			padding-left: 25px;
			display: flex;
			align-items: center;
		}

		.navbar__items h1 {
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			font-size: 22px;
			color: $white-two;
			margin-right: 6px;
		}

		.navbar__items h2 {
			font-family: "Open Sans", sans-serif;
			font-weight: 400;
			font-size: 22px;
			color: $pale-grey;
		}

		.navbar__items img {
			margin-right: 11px;
			width: 30px;
			height: 30px;
		}
	}
</style>

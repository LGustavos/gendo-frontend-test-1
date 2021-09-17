<template>
	<div class="profile">
		<div class="profile__items">
			<img :src="profileData.avatar_url" alt="" />
			<div class="profile__items--description">
				<h1 class="profile__name">{{ profileData.name }}</h1>
				<h2 class="profile__bio">{{ profileData.bio }}</h2>
			</div>
		</div>
	</div>
</template>
<script>
	import ProfileService from ".././services/ProfileService"
	export default {
		name: "Profile",
		data() {
			return {
				profileData: "",
				profileService: new ProfileService(),
			}
		},
		methods: {
			getProfile() {
				this.profileService.show("biancassilva").then((response) => {
					this.profileData = response
				})
			}
		},
		mounted() {
			this.getProfile()
		}
	}
</script>
<style lang="scss">
	.profile {
		width: 100%;
		height: auto;

		.profile__items {
			display: flex;
			align-items: center;
			flex-direction: column;
			padding-left: 25px;
			padding-right: 25px;
			margin-top: 35px;
		}

		.profile__items img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}

		.profile__items--description {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 15px;

			.profile__name {
				font-family: "Open Sans", sans-serif;
				font-weight: 700;
				font-size: 20px;
			}

			.profile__bio {
				font-family: "Open Sans", sans-serif;
				font-weight: 700;
				font-size: 14px;
				color: $warm-grey;
				margin-top: 3px;
			}
		}
	}

	@media screen and (max-width: 1024px) and (min-width: 640px) {
		.profile {
			.profile__items {
				display: grid;
				grid-template-columns: 15% 85%;
				column-gap: 12px;
				align-items: center;
				margin-bottom: 30px;
			}

			.profile__items--description {
				align-items: self-start;
				margin-top: 0;
			}
		}
	}

	@media screen and (max-width: 640px) {
		.profile {
			.profile__items {
				display: grid;
				grid-template-columns: 20% 80%;
				align-items: center;
				margin-bottom: 30px;
				margin-top: 25px;
			}

			.profile__items img {
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}

			.profile__items--description {
				align-items: flex-start;
				margin-top: 0;
				padding-left: 40px;
			}
		}
	}
</style>

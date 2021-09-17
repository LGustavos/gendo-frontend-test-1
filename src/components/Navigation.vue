<template>
	<div class="navigation">
		<ul class="navigation__items">
			<li>
				<router-link to="/" class="navigation__link" exact
					>Repos
					<span class="navigation__items__count">{{ repositoriesData.length }}</span>
				</router-link>
			</li>
			<li>
				<router-link to="/favorites" class="navigation__link"
					>Starred
					<span class="navigation__items__count">{{ favoritesData.length }}</span>
				</router-link>
			</li>
		</ul>
		<router-view />
	</div>
</template>
<script>
	import RepositoriesService from "../services/RepositoriesService"
	import FavoritesService from ".././services/FavoritesService"
	export default {
		name: "Navigation",
		data() {
			return {
				favoritesData: "",
				favoritesService: new FavoritesService(),
				repositoriesData: "",
				repositoriesService: new RepositoriesService()
			}
		},
		methods: {
			getRepos() {
				this.repositoriesService.list().then((response) => {
					this.repositoriesData = response
				})
			},

			getFavorites() {
				this.favoritesService.list().then((response) => {
					this.favoritesData = response
				})
			}
		},

		mounted() {
			this.getRepos(), this.getFavorites()
		}
	}
</script>
<style lang="scss">
	.navigation {
		.navigation__items {
			display: flex;
			width: 100%;
			margin-top: 90px;
			border-bottom: 2px solid $pale-grey;

			> li {
				display: flex;
				width: 20%;
				list-style: none;
				justify-content: center;

				> .navigation__link {
					display: flex;
					justify-content: center;
					text-decoration: none;
					font-family: "Open Sans", sans-serif;
					font-weight: 400;
					font-size: 20px;
					color: #666666;
					width: 100%;
					padding-bottom: 15px;
					align-items: center;

					> .navigation__items__count {
						display: flex;
						background-color: gainsboro;
						font-size: 15px;
						border-radius: 13px;
						margin-left: 10px;
						width: 25px;
						align-items: center;
						justify-content: center;
					}

					&:hover {
						font-weight: 700;
						border-bottom: 6px solid $rusty-orange;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1024px) and (min-width: 640px) {
		.navigation {
			.navigation__items {
				margin-top: 40px;

				> li {
					width: 25%;

					> .navigation__link {
						&:active {
							font-weight: 700;
							border-bottom: 6px solid $rusty-orange;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 640px) {
		.navigation {
			.navigation__items {
				display: grid;
				grid-template-columns: 1fr 1fr;
				justify-items: center;
				margin-top: 0;

				> li {
					width: 100%;
				}
			}
		}
	}
</style>

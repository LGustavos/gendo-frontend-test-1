<template>
	<Search @onInput="filterResults" />
	<div class="starred" v-for="(item, idx) in filteredResults" :key="idx">
		<div class="starred__body">
			<div class="starred__title">{{ item.full_name }}</div>
			<div class="starred__description">{{ item.description }}</div>
			<div class="starred__infos">
				<i class="fas fa-star icon"></i>
				<div class="starred__infos__count">{{ item.watchers }}</div>
				<i class="fas fa-code-branch icon"></i>
				<div class="starred__infos__branchs">{{ item.forks_count }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import FavoritesService from ".././services/FavoritesService"
	import Search from "../components/Search.vue"
	export default {
		name: "Home",
		components: {
			Search
		},
		data() {
			return {
				favoritesData: "",
				favoritesService: new FavoritesService(),
				filter: ""
			}
		},
		computed: {
			filteredResults() {
				if (this.filter && this.filter.length > 3) {
					return this.favoritesData.filter((e) => {
						if (e.name.indexOf(this.filter) !== -1) {
							return e
						}
					})
				} else {
					return this.favoritesData
				}
			}
		},
		methods: {
			getFavorites() {
				this.favoritesService.list().then((response) => {
					this.favoritesData = response
				})
			},
			filterResults(filter) {
				this.filter = filter
			}
		},
		mounted() {
			this.getFavorites()
		}
	}
</script>
<style lang="scss">
	.starred {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		.starred__body {
			border-bottom: 2px solid $pale-grey;
		}

		.starred__title {
			color: $title-repos;
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			font-size: 23px;
			margin-bottom: 10px;
		}

		.starred__description {
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			font-size: 13px;
			color: $warm-grey;
			margin-bottom: 15px;
		}

		.starred__infos {
			display: flex;
			align-items: center;
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			font-size: 13px;
			color: $warm-grey;
			padding-bottom: 20px;

			> .icon {
				width: 18px;
				height: 18px;
			}

			.starred__infos__count {
				margin-right: 30px;
				margin-left: 5px;
			}

			.starred__infos__branchs {
				margin-left: 5px;
			}
		}
	}

	@media screen and (max-width: 1024px) and (min-width: 640px) {
		.starred {
			.starred__body {
				padding-left: 30px;
				padding-right: 30px;
				overflow-wrap: break-word;
			}
		}
	}

	@media screen and (max-width: 640px) {
		.starred {
			.starred__body {
				padding-left: 30px;
				padding-right: 30px;
				overflow-wrap: break-word;
			}
		}
	}
</style>

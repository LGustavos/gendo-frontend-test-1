<template>
	<Search @onInput="filterResults" />
	<div class="repos" v-for="(item, idx) in filteredResults" :key="idx">
		<div class="repos__body">
			<div class="repos__title">{{ item.name }}</div>
			<div class="repos__description">{{ item.description }}</div>
			<div class="repos__infos">
				<i class="fas fa-code icon" v-if="!!item.language"></i>
				<div class="repos__infos__language" v-if="!!item.language">{{
					item.language
				}}</div>
				<i class="fas fa-code-branch icon"></i>
				<div class="repos__infos__branchs">{{ item.forks_count }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import RepositoriesService from "../services/RepositoriesService"
	import Search from "../components/Search.vue"
	export default {
		name: "Home",
		components: {
			Search
		},
		data() {
			return {
				repositoriesData: "",
				repositoriesService: new RepositoriesService(),
				filter: ""
			}
		},
		computed: {
			filteredResults() {
				if (this.filter && this.filter.length > 3) {
					return this.repositoriesData.filter((e) => {
						if (e.name.indexOf(this.filter) !== -1) {
							return e
						}
					})
				} else {
					return this.repositoriesData
				}
			}
		},
		methods: {
			getRepos() {
				this.repositoriesService.list().then((response) => {
					this.repositoriesData = response
				})
			},
			filterResults(filter) {
				this.filter = filter
			}
		},
		mounted() {
			this.getRepos()
		}
	}
</script>
<style lang="scss">
	.repos {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		.repos__body {
			padding-left: 0;
			padding-right: 0;
			border-bottom: 2px solid $pale-grey;
		}

		.repos__title {
			color: $title-repos;
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			font-size: 20px;
			margin-bottom: 10px;
		}

		.repos__description {
			font-family: "Open Sans", sans-serif;
			font-weight: 700;
			font-size: 13px;
			color: $warm-grey;
			margin-bottom: 15px;
		}

		.repos__infos {
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

			.repos__infos__language {
				margin-right: 30px;
				margin-left: 5px;
			}

			.repos__infos__branchs {
				margin-left: 5px;
			}
		}
	}

	@media screen and (max-width: 1024px) and (min-width: 640px) {
		.repos {
			.repos__body {
				padding-left: 30px;
				padding-right: 30px;
			}
		}
	}

	@media screen and (max-width: 640px) {
		.repos {
			.repos__body {
				padding-left: 30px;
				padding-right: 30px;
			}
		}
	}
</style>

<template>
	<div class="search">
		<img src="@/assets/img/icon-search.png" alt="Search icon" />
		<input
			type="text"
			name="search"
			v-model="filter"
			@input="emitFilterValue"
			placeholder="Filter by name"
			class="search__input"
		/>
	</div>
</template>
<script>
	export default {
		name: "Search",
		data() {
			return {
				filter: ""
			}
		},
		methods: {
			emitFilterValue() {
				this.$emit("onInput", this.filter ? this.filter : null)
			}
		}
	}
</script>
<style lang="scss">
	.search {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: -18px;
		margin-top: 40px;

		> img {
			left: 32px;
			position: relative;
			width: 18px;
			height: 18px;
		}

		.search__input {
			font-family: "Open Sans", sans-serif;
			font-weight: 400;
			font-size: 16px;
			width: 35%;
			height: 45px;
			border: 2px solid $pale-grey;
			box-sizing: border-box;
			border-radius: 3px;
			padding-left: 38px;

			&:focus {
				outline: none;
			}
		}
	}

	@media screen and (max-width: 1024px) and (min-width: 640px) {
		.search {
			padding-left: 30px;

			> img {
				left: 32px;
			}

			.search__input {
				width: 48%;

				&:focus {
					outline: none;
				}
			}
		}
	}

	@media screen and (max-width: 640px) {
		.search {
			justify-content: center;

			> img {
				left: 32px;
				width: 20px;
				height: 20px;
			}

			.search__input {
				width: 85%;

				&:focus {
					outline: none;
				}
			}
		}
	}
</style>

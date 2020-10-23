<template>
	<div id="app">
		<HelloWorld msg="CNBETA新闻资讯" :articles="items" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
	data() {
		return {
			items: [],
		};
	},
	methods: {
		async fetchArticles() {
			console.log(1);
			const result = await this.$http
				.get("/items")
				.then((res) => {
					console.log(res.data);
					this.items = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
			console.log(result);
		},
	},
	created() {
		this.fetchArticles();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

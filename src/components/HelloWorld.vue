<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul>
			<li v-for="(article, index) in articles" :key="index">
				<a :href="article.link">{{
					index + 1 + ". " + article.title
				}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String,
		articles: { type: Array },
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	margin: 0 auto;
}
h3 {
	margin: 40px 0 0;
}
li {
	margin: 10px 10px;
}
a {
	color: #42b983;
}
</style>

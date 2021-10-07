<template>
	<div id="titre_principal">
		<div id="logo">
			<img src="../assets/images/zozor_logo.png" alt="logo de LeDoux" />
			<h1>LeDoux</h1>
		</div>
		<h2>Carnets de voyage</h2>
	</div>
</template>

<script>
export default {
	name: "FirstTitle",
};
</script>

<style scoped>
#titre_principal {
	display: flex;
	flex-direction: column;
}
#logo {
	display: flex;
	flex-direction: row;
	align-items: baseline;
}
#logo img {
	width: 35%;
	height: 45%;
}
</style>

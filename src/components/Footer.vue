<template>
<div id="footer">
   <div id="tweet">
				<h1>Mon dernier tweet</h1>
				<p>Hii haaaaaan !</p>
				<p>Le 12 mai à 23h12</p>
			</div>
			<div id="mes_photos">
				<h1>Mes photos</h1>
				<p> <img src="../assets/images/photo1.jpg" alt="photographie1"/> <img src="../assets/images/photo2.jpg" alt="photographie2"/>
					<img src="../assets/images/photo3.jpg" alt="photographie3"/> <img src="../assets/images/photo4.jpg" alt="photographie4"/></p>
			</div>
			<div id="mes_amis">
				<h1>Mes amis</h1>
				<div id="listes_amis">
					<ul>
						<li><a href="#">Pupi le lapin</a></li>
						<li><a href="#">Mr Baobab</a></li>
						<li><a href="#">Kaiwaii</a></li>
						<li><a href="#">Perceval.eu</a></li>
					</ul>
					<ul>
						<li><a href="#">Belette</a></li>
						<li><a href="#">Le concombre masqué</a></li>
						<li><a href="#">Petit prince</a></li>
						<li><a href="#">Mr Fan</a></li>
					</ul>
				</div>
			</div>

</div>
</template>

<script>
export default {
    name: '#Footer',
}
</script>

<style scoped>

/*#footer*/

#footer
{
	display: flex;
	background: url('../assets/images/ico_top.png') no-repeat top center, url('../assets/images/separateur.png') repeat-x top,url('../assets/images/ombre.png') repeat-x top;
padding: 25px;
}
#footer p, #footer ul
{
	font-size: 0.8em;
}
#footer h1
{
	font-size: 1.1em;
}
#tweet
{
	width: 28%;
}
#mes_photos
{
	width: 35%;
}
#mes_amis
{
	width: 31%;
}
#mes_photos img
{
	border: 1px solid #181818;
	margin-right: 2px;
}
#listes_amis
{
	display: flex;
	justify-content: space-between;
	margin-top: 0;
}
#mes_amis ul
{
	list-style-image: url('../assets/images/ico_liensexterne.png');
	padding-left: 2px;
}
#mes_amis a
{
	text-decoration: none;
	color: #760001;
}
#mes_amis a:hover
{
	text-decoration: underline;
	color: blue;
	font-size: large;
}

</style>

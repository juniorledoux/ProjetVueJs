<template>
<div id="banner">
    <div id="banniere_description">
        Retour sur mes vacances aux Etats-unis...
        <a href="#" class="bouton_rouge">Voir l'article <img src="../assets/../assets/images/flecheblanchedroite.png" alt="" /></a>
    </div>

</div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style scoped>

/*banniere*/
#banner
{
	background: url('../assets/images/sanfrancisco.jpg') no-repeat;
	margin-top: 15px;
	height: 219px;
	border-radius: 5px;
	position: relative;
	box-shadow: 0px 4px 4px #1c1a19;
	margin-bottom: 25px;
}

@media all and (max-width: 1024px)
{
    #banner
    {
        display: none;
    }
}
#banniere_description
{
	position: absolute;
	bottom: 0;
	border-radius: 0px 0px 5px 5px;
	width: 99%;
	height: 33px;
	padding-top: 15px;
	padding-left: 10px;
	background-color: rgba(24,24,24,0.7);
	color: white;
	font-size: 0.8em;
}
.bouton_rouge
{
	height: 25px;
	position: absolute;
	right: 10px;
	bottom: 5px;
	background: url('../assets/images/fond_degraderouge.png') repeat-x;
	border: 1px solid #760001;
	border-radius: 5px;
	font-size: 1.2em;
	text-align: center;
	padding: 3px 8px 0px 8px;
	color: white;
	text-decoration: none;
}
.bouton_rouge img
{
	border: 0;
}
.bouton_rouge:hover
{
	color: aqua;
	border-bottom: 3px solid black;
}

</style>

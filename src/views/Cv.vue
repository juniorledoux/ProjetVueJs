<template>
	<div class="Cv">
		<Banner />
		<div class="hello">
			<HelloWorld msg="Welcome to my CV page" />
		</div>
		<section>
			<article>
				<h1 class="CV">
					<img
						src="images/ico_epingle.png"
						alt="categorie voyage"
						class="ico_categorie"
					/>
					Curriculum Vitae
				</h1>
				<div id="elements">
					<div class="element1">
						<h1>MON EXPERIENCE:</h1>
						<ul>
							<li>Electricite</li>
							<li>Plomberie</li>
							<li>Maconnerie</li>
							<li>Informatique</li>
						</ul>
					</div>
					<div class="element2">
						<h1>MES COMPETENSES:</h1>
						<ul>
							<li>Biotechnologie</li>
							<li>Biochimie</li>
							<li>Programmation</li>
							<li>Algorithmique</li>
						</ul>
					</div>
					<div class="element3">
						<h1>MA FORMATION:</h1>
						<ul>
							<li>Maintenance Informatique 1 et 2</li>
							<li>Infographie</li>
						</ul>
					</div>
				</div>
			</article>
			<AboutAuthor
				description="En effet je suis un jeune etudiant en genie logiciel niveau 1, dont le parcours fut tres ouvert et parsemé d'experiences et de formations dont je vous les presentes ici."
				:photo="require('../assets/images/juni.jpg')"
				name="WATAT"
				fisrtname="Junior Ledoux"
				birthday="né le: 17 avril 2001"
				birthday_city="A: Ngaoundere."
			/>
		</section>
	</div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import AboutAuthor from "@/components/AboutAuthor.vue";
export default {
	name: "Cv",
	components: {
		Banner,
		HelloWorld,
		AboutAuthor,
	},
	beforeCreate() {
		console.log("je ne suis pas encore crée");
	},
	created() {
		console.log("je suis crée");
	},
	beforeMount() {
		console.log("pas encore monté");
	},
	mounted() {
		console.log("je suis monté");
	},
	beforeUnmount() {
		console.log("pas encore detruit");
	},
	unmounted() {
		console.log("je suis detruis");
	},
};
</script>

<style>
.hello {
	text-align: center;
	font-family: "BallparkWeiner";
	color: rgba(255, 0, 0, 0.61);
}

/*la secton*/
section {
	display: flex;
	margin-bottom: 20px;
}

article,
aside {
	text-align: justify;
}

article {
	flex: 3;
	background-color: rgba(24, 24, 24, 0.3);
	padding-top: 5%;
	margin: 3.4% 4% 0% 0%;
	border-radius: 5px;
	border: 1px solid rgba(24, 24, 24, 0.3);
	box-shadow: 6px 6px 5px #1c1a19;
}

.CV {
	font-family: "BallparkWeiner", serif;
	font-size: 3em;
	margin-top: 0;
}

#elements {
	display: flex;
	flex-wrap: wrap;
	color: white;
}

.element1 {
	margin-left: 5%;
	background-color: rgba(0, 255, 0, 0.2);
	margin-top: 0%;
	width: 35%;
	border-radius: 5px;
	border: 1px solid rgba(0, 255, 0, 0.2);
	box-shadow: 6px 6px 5px #1c1a19;
}

.element2 {
	background-color: rgba(255, 255, 0, 0.2);
	margin-top: 0;
	margin-left: 20%;
	width: 35%;
	border-radius: 5px;
	border: 1px solid rgba(255, 255, 0, 0.2);
	box-shadow: 6px 6px 5px #1c1a19;
}

.element3 {
	background-color: rgba(255, 0, 0, 0.2);
	margin-left: 26%;
	width: 50%;
	border-radius: 5px;
	border: 1px solid rgba(255, 0, 0, 0.2);
	box-shadow: 6px 6px 5px #1c1a19;
}

@media all and (max-width: 1024px) {
	#elements {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		color: white;
	}

	.element1 {
		background-color: rgba(0, 255, 0, 0.2);
		border-radius: 5px;
		border: 1px solid rgba(0, 255, 0, 0.2);
		box-shadow: 6px 6px 5px #1c1a19;
		word-wrap: break-word;
	}

	.element2 {
		background-color: rgba(255, 255, 0, 0.2);
		border-radius: 5px;
		border: 1px solid rgba(255, 255, 0, 0.2);
		box-shadow: 6px 6px 5px #1c1a19;
		word-wrap: break-word;
	}

	.element3 {
		background-color: rgba(255, 0, 0, 0.2);
		border-radius: 5px;
		border: 1px solid rgba(255, 0, 0, 0.2);
		word-wrap: break-word;
		box-shadow: 6px 6px 5px #1c1a19;
	}
}

.ico_categorie {
	vertical-align: middle;
	margin-right: 8px;
}

article h1 {
	font-size: 1.5em;
	font-family: Dayrom, serif;
	color: black;
	text-decoration: underline;
	text-align: center;
}

#elements ul {
	list-style-type: none;
	list-style-image: url("../assets/images/ico_liensexterne.png");
}
</style>

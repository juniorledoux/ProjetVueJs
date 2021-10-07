<template>
<div class="home">
    <Banner />
    <div class="hello">
        <HelloWorld msg="Welcome to my CV page" />
    </div>
    <section>
        <article>
            <h1><img src="../assets/images/ico_epingle.png" alt="categorie voyage" class="ico_categorie" /> Je suis un grand voyageur</h1>
            <p>En tant que leader de l'industrie des services de musique numérique, Pandora compte 250 millions d'utilisateurs et 1 million de chansons dans la collection Pandora. Les utilisateurs ont la possibilité d'utiliser Pandora gratuitement avec des X limités ou de payer une prime pour aucun X. En utilisant les services de SoundExchange, Pandora paie des redevances pour le streaming d'enregistrements sonores. Les redevances sont calculées en utilisant un taux de performance et sont sujettes à un changement chaque année. Les redevances sont des paiements effectués au propriétaire légal d'une œuvre protégée par le droit d'auteur. Avec des licences entre ASCAP, BMI et SESAC, Pandora couvre les redevances pour les titulaires de droits d'auteur d'œuvres musicales, généralement des auteurs-compositeurs. Les redevances représentent la plus grande dépense soumise à Pandora et aux entreprises opérant dans l'espace musical numérique. On estime qu'en 2014, 46,5% du chiffre d'affaires de Pandora a été payé en royalties, une nette diminution par rapport à 2013.Pandora et Spotify différencient les services entre les abonnements gratuits et les abonnements premium. Pandora se vantait 652 $. 8 millions de chiffre d'affaires sur les neuf premiers mois de 2014 provenant des abonnements premium et des s Embedded. Quelle que soit l'importance des sources de revenus, une majorité des recettes doit être payée en redevances aux artistes et aux maisons de disques, respectivement.</p>
            <p>L’objectif initial était de permettre aux musiciens de partager leurs enregistrements, le site a rapidement fait ses valises pour Berlin, qui reste aujourd’hui encore son quartier général, aux côtés de New York et Los Angeles. L’une des stratégies adoptées consiste à mettre en valeur des artistes émergents qui choisissent le service pour leurs débuts et de devenir une plateforme ou commence une carrière. Aujourd'hui, la rémunération des artistes sur les plateformes de streaming fonctionne sur un modèle simple : votre abonnement (de 9,99 € ou davantage) va aux artistes les plus diffusés par l'ensemble des abonnés. Le PDG de Sound cloud veut changer de paradigme : Michael Weismann a annoncé début mars la mise en place d'un système basé sur l'utilisateur et non plus le "marché" (écoutes globales). Concrètement, le modèle de rémunération va s'appuyer sur les écoutes individuelles des abonnés (sur la durée d'écoute), ce qui devrait favoriser les artistes indépendants. Selon des calculs effectués par Sound cloud et publiés par l'AFP, la rémunération "user centric" profiterait aux artistes locaux (francophones notamment), qui verraient leur rémunération augmenter de 25 %.</p>
            <p>Les radios payent une redevance annuelle (licence légale) à la SACEM qui collecte les droits d’auteur et éditeurs de musique. La redevance varie suivant l’importance de la radio en terme de chiffre d’affaire et si c’est une radio privée ou publique ainsi que de sa localisation. Les webradios, bien que payant un forfait annuel, déclarent rarement leur programme ce qui complique les répartitions. Ces chiffres sont issus des barèmes SACEM : ils sont donnés à titre indicatif pouvant évoluer dans le temps. Il faudra prendre en compte également les règles de répartition de votre musique entre les auteurs, compositeurs et éditeurs. Les radios envoient la liste des diffusions et horaires de passage à la SACEM qui va redistribuer les revenus à ses membres (suivant la clé de répartition des droits d’exécution publique, les DEP : ⅓ pour l’auteur, ⅓ pour le compositeur, et ⅓ pour l’éditeur). Les radios et télévisions payent des redevances pour les DEP et les DR, car ils utilisent un support (physique ou numérique) sur lequel se trouve la musique, et le diffuse au public. </p>
        </article>
        <AboutAuthor description="Bien maigre, n'est-ce pas ? c'est pourquoi, aujourd'hui, j'ai decidé d'ecrire ma biographie afin que vous sachiez qui suis-je reellement." :photo="require('../assets/images/zozor_classe.png')" name="Laisse-moi le temps de me presenter: je m'appelle LeDoux, je suis né un 17 avril 2001." fisrtname="" birthday="" birthday_city="" />
    </section>
</div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import AboutAuthor from '@/components/AboutAuthor.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        AboutAuthor,
        HelloWorld,
    }
}
</script>

<style scoped>
.hello {
    text-align: center;
    font-family: "BallparkWeiner";
    color: rgba(255, 0, 0, 0.61);
}

section h1 {
    font-family: Dayrom, serif;
    font-weight: normal;
    text-transform: uppercase;
}

section {
    display: flex;
    margin-bottom: 20px;
}

article {
    text-align: justify;
}

article {
    margin-right: 20px;
    flex: 3;
}

.ico_categorie {
    vertical-align: middle;
    margin-right: 8px;
}

article p {
    font-size: 0.8em;
}
</style>

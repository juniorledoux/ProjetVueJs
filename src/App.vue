<template>
  <div id="bloc_page">
    <div>
      <Header/>
    </div>
  <router-view/>
  </div>
      <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',
    components: {
        Header,
		Footer,
    }
}
</script>

<style>
/* definition de mes polices*/

@font-face
{
	font-family: 'BallparkWeiner';
	src: url('./assets/polices/ballpark.eot');
	src: url('./assets/polices/ballpark.eot?#iefix') format('embedded-opentype'), url('./assets/polices/ballpark.woff') format('woff'), 
	url('./assets/polices/ballpark.ttf') format('truetype'), url('./assets/polices/ballpark.svg#BallparkWeiner') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face
{
	font-family: 'Dayrom';
	src: url('./assets/polices/dayrom.eot');
	src: url('./assets/polices/dayrom.eot?#iefix') format('embedded-opentype'), url('./assets/polices/dayrom.woff') format('woff'), 
	url('./assets/polices/dayrom.ttf') format('truetype'), url('./assets/polices/dayrom.svg#Dayrom') format('svg');
	font-weight: normal;
	font-style: normal;
}

#app {
  background: url('./assets/images/fond_jaune.png');
  font-family: 'Trebuchet MS', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818; 
}

#bloc_page
{
	width: 90%;
	margin: auto; 
}
@media all and (max-width: 1024px)
{
	#bloc_page
	{
		width: auto;
	}
}

</style>

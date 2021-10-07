<template>
<div id="nav">
    <ul>
       <li> <router-link to="/">Accueil</router-link> </li>
       <li> <router-link to="/cv">CV</router-link> </li>
       <li> <router-link to="/about">About</router-link> </li>
       <li> <router-link to="/contact">Contact</router-link> </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
#nav a
{
	font-family: Dayrom, serif;
	font-weight: normal;
	text-transform: uppercase;
    font-size: 1.3em;
	color: #181818;
	padding-bottom: 3%;
	text-decoration: none;
}
#nav ul
{
	list-style-type: none;
	display: flex;
	justify-content: flex-end;
}
#nav li
{
	margin-right: 4%;
}

#nav a:hover, #nav a:focus
{
	color: #760001;
	border-bottom: 3px solid #760001;
}
@media all and (max-width: 1024px)
{
    #nav
    {
        width: auto;
        text-align: left;
    }
    
    #nav ul
    {
        flex-direction: column;
    }

    #nav li
    {
        padding-left: 4px;
    }
    
    #nav a
    {
        font-size: 1.1em;
    }
    
    #nav a:hover
    {
        border-bottom: 0;
    }
}
</style>

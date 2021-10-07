<template>
<div id="header">
    <FirstTitle />
    <NavBar />

</div>
</template>

<script>
import FirstTitle from '@/components/FirstTitle.vue'
import NavBar from '@/components/NavBar.vue'
export default {
    name: 'Header',
    components: {
        FirstTitle,
        NavBar,
    }
}
</script>

<style>
#header {
    background: url('../assets/images/separateur.png') repeat-x bottom;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

#header h1 {
    font-family: 'BallparkWeiner', serif;
    font-size: 2.5em;
    font-weight: normal;
    margin: 0 0 0 5%;
}

#header h2 {
    font-family: Dayrom, serif;
    font-size: 1.1em;
    margin-top: 0%;
    margin-left: 5%;
    font-weight: normal;
}
</style>

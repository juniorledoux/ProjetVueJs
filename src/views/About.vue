<template>
<div class="about">
    <Banner />
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to my about page" />
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'
export default {
    name: 'About',
    components: {
        HelloWorld,
        Banner,
    }
}
</script>

<style lang="scss">
.about {
    color: red;
    text-align: center;
}
</style>

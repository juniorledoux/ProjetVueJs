<template>
<div class="about">
    <Banner />
    <h1>This is an about page</h1>
    <!-- passage de donnees avec le slot -->
    <HelloWorld>
        <template v-slot:msg>
            <h2>apres passage du prop au slot</h2>
        </template>
    </HelloWorld>
    <div style="text-align:center;color:red">{{formatedDate}}</div>
    <div>
        <p>{{ count }}</p>
        <button @click="updateCount(1)" class="mb-2">cliquer</button>
        <p><input type="text" v-model="nom"></p> <p> votre nom est: <span>{{nom}}</span></p>
    </div>
    <div class="container"></div>
    <!-- passage de donnees avec le prop -->
    <!-- <HelloWorld msg="Welcome to my about page" /> -->
</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'
import {
  mapActions,
    mapGetters, mapState
} from 'vuex'
export default {
    data() {
        return {
            nom:'juni'
        }
    },
    name: 'About',
    components: {
        HelloWorld,
        Banner,
    },
    computed: {
        ...mapGetters(['formatedDate']),
        ...mapState(['count']),
    },
    methods: {
        ...mapActions(['updateCount']),
    },
}

</script>

<style>
.about {
    color: red;
    text-align: center;
}
</style>

<template>
<div id="contact">
    <Banner />
    <div class="container">
        <h1 class="text-center">{{ libelle }}</h1>
        <div class="md-6 text-center">
            <p><span>Temps</span>: {{days}} jours {{hours}} heures {{minutes}} mins {{seconds}} sécondes </p>
        </div>
        <div class="col-10 m-auto mb-2 p-4" style="background-color:#F99">
            <h1>Taches a faire:</h1>
            <div class="d-flex justify-content-between">
                <div class="p-2 col-6">
                    <form class="col-8 g-3">
                        <div class="col-auto">
                            <input type="password" class="form-control" id="inputPassword2" placeholder="ajouter une tache a faire">
                        </div>
                        <div class="col-auto mt-2 text-center">
                            <button type="submit" class="btn btn-primary mb-3">Ajouter</button>
                        </div>
                    </form>
                </div>

                <div class="p-2 col-6">
                    <div class="form-check m-2 pt-2 pb-2" style="background-color:red" v-for="tache in taches" :key="tache">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
    name: 'Contact',
    data() {
        return {
            libelle: 'Durée restante avant la fin d\'année',
            now: 0,
            counter: 0,
            date: "December 31, 2021",
            taches: [{
                    id: 1,
                    title: 'maitriser php',
                    done: false,
                },
                {
                    id: 2,
                    title: 'Apprendre symfoni',
                    done: false,
                },
                {
                    id: 2,
                    title: 'maitriser Appliquer Vuetify',
                    done: false,
                }
            ]
        }
    },
    components: {
        Banner,
    },
    methods: {
        timer_loop() {
            this.counter++
            this.now = Math.trunc(new Date().getTime() / 1000)
            this.counter < 200 && setTimeout(this.timer_loop, 1000)
        },
    },
    mounted() {
        this.timer_loop()
    },
    computed: {

        seconds() {
            return (this.modifedDate - this.now) % 60
        },
        minutes() {
            return Math.trunc((this.modifedDate - this.now) / 60) % 60
        },
        hours() {
            return Math.trunc((this.modifedDate - this.now) / 60 / 60) % 24
        },
        days() {
            return Math.trunc((this.modifedDate - this.now) / 60 / 60 / 24)
        },
        modifedDate: function () {
            return Math.trunc(Date.parse(this.date) / 1000)
        },

    },
}
</script>

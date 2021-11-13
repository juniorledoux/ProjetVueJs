<template>
<div id="contact">
    <Banner />
    <div class="container">
        <h1 class="text-center">{{ libelle }}</h1>
        <div class="md-6 text-center">
            <p>
                <span>Temps</span>: {{ days }} jours {{ hours }} heures
                {{ minutes }} mins {{ seconds }} <span v-if="seconds>1"> sécondes</span> <span v-else>seconde</span>
            </p>
        </div>
        <div class="col-10 m-auto mb-2 p-4" style="background-color:#F99">
            <h1>Taches a faire:</h1>
            <div class="d-flex justify-content-between">
                <div class="p-2 col-6">
                    <div class="col-8 g-3">
                        <div class="col-auto">
                            <input type="text" class="form-control" id="inputPassword2" placeholder="ajouter une tache a faire" v-model="newTitleTache" @keyup.enter="addTache()" />
                        </div>
                        <div class="col-auto mt-2 text-center">
                            <button type="button" class="btn btn-primary mb-3" @click="addTache()">
                                Ajouter
                            </button>
                        </div>
                    </div>
                </div>

                <div class="p-2 col-6">
                    <div class="col-6 text-center m-auto text-danger" v-if="taches.length == 0">
                        <p>Aucune tache enrégistrées</p>
                    </div>
                    <div class="form-check m-2 pt-2 pb-2 d-flex" style="background-color: #9AA;" v-for="tache in taches" :key="tache.id" @click="checkTache(tache.id)">
                        <div class="col-7" :class="{

'borderBR-green': tache.done,

'borderB-red': !tache.done,

}">
                            <input class="form-check-input" type="checkbox" :checked="tache.done" :id="tache.id" />
                            <label class="form-check-label" :for="tache.id" @click="checkTache(tache.id)">
                                {{ tache.title }}
                            </label>
                        </div>
                        <div class="d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-outline-primary">
                                Check
                            </button>
                            <button type="button" class="btn btn-outline-danger" @click.stop="deleteTache(tache.id)">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Banner from "@/components/Banner.vue";
export default {
    name: "Contact",
    data() {
        return {
            libelle: "Durée restante avant la fin d'année",
            now: 0,
            counter: 0,
            date: "December 31, 2021",
            newTitleTache: "",
            taches: [{
                    id: 1,
                    title: "maitriser php",
                    done: false,
                },
                {
                    id: 2,
                    title: "Apprendre symfoni",
                    done: false,
                },
                {
                    id: 3,
                    title: "maitriser Appliquer Vuetify",
                    done: false,
                },
            ],
        };
    },
    components: {
        Banner,
    },
    methods: {
        addTache() {
            let newTache = {
                id: Date.now(),
                title: this.newTitleTache,
                done: false,
            }
            this.taches.push(newTache)
            this.newTitleTache = ''
        },
        timer_loop() {
            this.counter++;
            this.now = Math.trunc(new Date().getTime() / 1000);
            this.counter < 200 && setTimeout(this.timer_loop, 1000);
        },
        checkTache(id) {
            let tache = this.taches.filter((tache) => tache.id === id)[0];
            tache.done = !tache.done;
        },
        deleteTache(id) {
            this.taches = this.taches.filter((tache) => tache.id !== id);
        },
    },
    mounted() {
        this.timer_loop();
    },
    computed: {
        seconds() {
            return (this.modifedDate - this.now) % 60;
        },
        minutes() {
            return Math.trunc((this.modifedDate - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.modifedDate - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.modifedDate - this.now) / 60 / 60 / 24);
        },
        modifedDate: function () {
            return Math.trunc(Date.parse(this.date) / 1000);
        },
    },
};
</script>

<style scoped>
.borderBR-green {
    border-bottom: 2px solid green;
    border-right: 2px solid green;
    text-decoration: dashed;
    transition-duration: 0.7s;
}

.borderB-red {
    border-bottom: 2px solid red;
    transition-duration: 0.7s;
}
</style>

<template>
<div id="aside">
    <h1>A propos de l'auteur</h1>
    <img src="../assets/images/bulle.png" alt="" id="fleche_bulle" />
    <p id="photo_zorzor"> <a href="#" @click="emettreEvent"> <img :src="photo" alt="photo de LeDoux" class="ma_photo" /> </a> </p>
    <p v-if="name==='hey ! cool nah ^_^'"> <span style="color:red">{{ name }}</span> </p>
    <p v-else>{{ name }} </p>
    <p>{{ fisrtname }}</p>
    <p>{{ birthday }}</p>
    <p>{{ birthday_city }}</p>
    <p>{{ description }}</p>
    <p> <img src="../assets/images/facebook.png" alt="Facebook" /> <img src="../assets/images/twitter.png" alt="Twitter" /> <img src="../assets/images/vimeo.png" alt="Vimeo" /> <img src="../assets/images/flickr.png" alt="Flickr" /> <img src="../assets/images/rss.png" alt="RSS" /></p>
</div>
</template>

<script>
export default {
    name: 'AboutAuthor',
    props: {
        photo: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        fisrtname: {
            type: String,
            required: true,
        },
        birthday: {
            type: Date,
            required: true,
        },
        birthday_city: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },

    },
    // props: ['photo', 'name', 'fisrtname', 'birthday', 'birthday_city', 'description'],
    methods: {
        emettreEvent() {
            this.$emit('first-event-created', {
                message: 'hey ! cool nah ^_^'
            })
        }
    },
}
</script>

<style scoped>
#aside {
    flex: 1;
    height: 80%;
    position: relative;
    background-color: #706b64;
    box-shadow: 0px 2px 5px #1c1a19;
    border-radius: 5px;
    padding: 20px;
    color: white;
    font-size: 0.9em;
    margin-top: 40px;
}

#fleche_bulle {
    position: absolute;
    top: 100px;
    left: -12px;
}

#photo_zorzor {
    text-align: center;
}

#photo_zorzor img {
    border: 1px solid #181818;
}

#aside img {
    margin-right: 11px;
}

.ma_photo {
    height: 50%;
    width: 50%;
}
</style>

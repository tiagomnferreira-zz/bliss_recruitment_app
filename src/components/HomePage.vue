<template>
    <div>
        <img class="logo" :src="image"/>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Body from './Body.vue';
import image from '../assets/avatar.svg'

export default {
    name: "HomePage",
    data() {
        return {
            image: image
        }
    }
}
    
</script>

<style>
    .logo {
        display: block;
        margin-left: 70%;
        margin-right: 30%;
        width: 40%;
    }
</style>
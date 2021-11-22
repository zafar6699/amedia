<template>
    <div>
        <Slider />
        <Animes />
        <Trailer />

        <News />
    </div>
</template>

<script>
import News from '../components/home/News.vue'
import Animes from '../components/home/Animes.vue'
import Slider from '../components/home/Slider12.vue'
import Trailer from '../components/home/Trailer1.vue'

export default {
    layout: 'home',
    components: {
        Trailer,
        Animes,
        News,
        Slider,
    },
}
</script>

<style lang="scss"></style>

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
import Slider from '../components/home/Slider.vue'
import Trailer from '../components/home/Trailer.vue'

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

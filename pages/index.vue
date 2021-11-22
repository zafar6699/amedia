<template>
    <div>
        <Slider12 />
        <Animes />
        <News />
    </div>
</template>

<script>
import News from '../components/home/News.vue'
import Animes from '../components/home/Animes.vue'
import Slider12 from '../components/home/Slider12.vue'

export default {
    layout: 'home',
    components: {
        Animes,
        News,
        Slider12,
    },
}
</script>

<style lang="scss"></style>

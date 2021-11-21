<template>
    <div>
        <Animes />
        <News />
    </div>
</template>

<script>
import News from '../components/home/News.vue'
import Animes from '../components/home/Animes.vue'

export default {
    layout: 'home',
    components: {
        Animes,
        News,
    },
}
</script>

<style lang="scss"></style>

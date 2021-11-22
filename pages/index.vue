<template>
    <div>
        <Slider12 />
        <Trailer />
        <!-- <Banner /> -->
        <!-- <TrendingCourses /> -->
        <Information />
        <FindCourse />
        <RecomendedCourse />
    </div>
</template>

<script>
import Banner from '../components/home/Banner.vue'
import Trailer from '../components/home/Trailer.vue'
import Slider12 from '../components/home/Slider12.vue'
import TrendingCourses from '../components/home/TrendingCourses.vue'

export default {
    layout: 'home',
    components: {
        Banner,
        Trailer,
        Slider12,
        TrendingCourses,
    },
}
</script>

<style lang="scss"></style>

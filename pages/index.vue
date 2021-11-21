<template>
    <div>
        <Banner />
        <TrendingCourses />
        <Information />
        <FindCourse />
        <RecomendedCourse />
    </div>
</template>

<script>
import Banner from '../components/home/Banner.vue'
import TrendingCourses from '../components/home/TrendingCourses.vue'

export default {
    layout: 'home',
    components: {
        Banner,
        TrendingCourses,
    },
}
</script>

<style lang="scss"></style>

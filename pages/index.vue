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
import FindCourse from '../components/home/FindCourse.vue'
import RecomendedCourse from '../components/home/RecomendedCourse.vue'
import Information from '../components/home/Information.vue'
export default {
    components: {
        Banner,
        TrendingCourses,
        FindCourse,
        RecomendedCourse,
        Information,
    },
}
</script>

<style lang="scss"></style>

<template>
    <div>
        <div class="trending-courses">
            <div class="site-container">
                <h1 class="title-content">Eng ommabop kurslar</h1>

                <div class="category-box">
                    <button class="btn-simple btn-simple-active">
                        Barcha kurslar
                    </button>
                    <button class="btn-simple">Python</button>
                    <button class="btn-simple">Java Script</button>
                    <button class="btn-simple">Vuejs</button>
                </div>

                <div class="courses-carousel">
                    <Carousel v-bind="settings">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            settings: {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
        }
    },
}
</script>

<style lang="scss">
div.trending-courses {
    margin-bottom: 80px;
    div.category-box {
        margin-bottom: 30px;
    }
    .courses-carousel {
        // margin: 0px -15px;
    }
    .slick-dots li.slick-active button:before {
        color: $gc;
        opacity: 1;
    }
}
</style>

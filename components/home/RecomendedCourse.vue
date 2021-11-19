<template>
    <div>
        <div class="trending-courses">
            <div class="site-container">
                <h1 class="title-content">Tavsiya etamiz</h1>

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
                rows: 2,
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

    .slick-dots li.slick-active button:before {
        color: $gc;
        opacity: 1;
    }
}
</style>

<template>
    <div>
        <div class="slider">
            <Vue-slick-carousel v-bind="settings12">
                <div class="carousel-item">
                    <img class="back" src="@/assets/img/3.jpg" alt />
                    <div class="opacity-banner"></div>
                    <div class="text">
                        <div class="container">
                            <div class="">
                                <div class="categories">
                                    <nuxt-link to="/">Ongoing</nuxt-link>
                                </div>
                                <div class="link">
                                    <nuxt-link to="/"
                                        >Goblinlar qotili. Tez orada yangi
                                        qismlar yuklanadi</nuxt-link
                                    >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum adipisci
                                        repellat error sapiente ex iusto dolore
                                        eaque fugiat aspernatur impedit veniam,
                                        eius illum!
                                    </p>
                                </div>
                                <div class="video-info">
                                    <b>2020</b>
                                    <h3>720P <span>HD</span></h3>
                                    <button class="play">
                                        <span><fa icon="play" /></span> Play
                                        Trailer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        class="back"
                        src="http://cdn.amediatv.uz/public/uploads/cinema/org/9359fbaba3d664a2173f7b640eadab05.jpg"
                        alt
                    />
                    <div class="opacity-banner"></div>
                    <div class="text">
                        <div class="container">
                            <div class="">
                                <div class="categories">
                                    <nuxt-link to="/">Ongoing</nuxt-link>
                                </div>
                                <div class="link">
                                    <nuxt-link to="/"
                                        >Lorem ipsum dolor sit amet consectetur
                                        adipisicing</nuxt-link
                                    >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum adipisci
                                        repellat error sapiente ex iusto dolore
                                        eaque fugiat aspernatur impedit veniam,
                                        eius illum!
                                    </p>
                                </div>
                                <div class="video-info">
                                    <b>2020</b>
                                    <h3>720P <span>HD</span></h3>
                                    <button class="play">
                                        <span><fa icon="play" /></span> Play
                                        Trailer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="back" src="@/assets/img/3.jpg" alt />
                    <div class="opacity-banner"></div>
                    <div class="text">
                        <div class="container">
                            <div class="">
                                <div class="categories">
                                    <nuxt-link to="/">Ongoing</nuxt-link>
                                </div>
                                <div class="link">
                                    <nuxt-link to="/"
                                        >Goblinlar qotili. Tez orada yangi
                                        qismlar yuklanadi</nuxt-link
                                    >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum adipisci
                                        repellat error sapiente ex iusto dolore
                                        eaque fugiat aspernatur impedit veniam,
                                        eius illum!
                                    </p>
                                </div>
                                <div class="video-info">
                                    <b>2020</b>
                                    <h3>720P <span>HD</span></h3>
                                    <button class="play">
                                        <span><fa icon="play" /></span> Play
                                        Trailer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="back" src="@/assets/img/3.jpg" alt />
                    <div class="opacity-banner"></div>
                    <div class="text">
                        <div class="container">
                            <div class="">
                                <div class="categories">
                                    <nuxt-link to="/">Ongoing</nuxt-link>
                                </div>
                                <div class="link">
                                    <nuxt-link to="/"
                                        >Lorem ipsum dolor sit amet consectetur
                                        adipisicing</nuxt-link
                                    >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptatum adipisci
                                        repellat error sapiente ex iusto dolore
                                        eaque fugiat aspernatur impedit veniam,
                                        eius illum!
                                    </p>
                                </div>
                                <div class="video-info">
                                    <b>2020</b>
                                    <h3>720P <span>HD</span></h3>
                                    <button class="play">
                                        <span><fa icon="play" /></span> Play
                                        Trailer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Vue-slick-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            settings12: {
                accessibility: false,
                dotsClass: 'slick-dots custom-dot-class',
                dots: true,
                infinite: true,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
            },
        }
    },
    mounted() {},
}
</script>

<style lang="scss">
.slider {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
}
.slick-dots {
    font-size: 20px;
    bottom: 60px !important;
    li {
        button::before {
            font-size: 14px;
            color: #fff !important;
        }
    }
    li.slick-active {
        button::before {
            color: $gc !important;
        }
    }
}
.slick-dots li button:before {
    color: #fff !important;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slider {
    margin-bottom: 50px;
    z-index: 2;
    .carousel-item {
        box-shadow: inset 0px 0px 200px 150px rgba(0, 0, 0, 0.9);
        // padding: 30px 0;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        position: relative;
        img.back {
            top: 0;
            left: 0;
            pointer-events: none;
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .opacity-banner {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000;
            // box-shadow: inset 0px 0px 200px 300px;
            // background-image: linear-gradient(
            //     to top,
            //     rgb(0, 0, 0) 0%,
            //     rgba(0, 0, 0, 0) 100%
            // );
            opacity: 0.8;
        }
        .text {
            top: 50%;
            transform: translate(0%, -50%);
            position: absolute;
            z-index: 2;
            width: 100%;
            .categories {
                margin-bottom: 10px;
                a {
                    color: $gc;
                    margin-right: 20px;
                    img {
                        margin-top: 150px;
                        height: 450px;
                        pointer-events: none;
                        width: 100%;
                    }
                }
            }
            .video-info {
                display: flex;
                align-items: center;
                margin-top: 25px;
                b {
                    color: $gc;
                }
                h3 {
                    font-weight: normal;
                    margin: 0 20px;
                    border: 1px solid #fff;
                    font-size: 16px;
                    color: #fff;
                    padding-left: 5px;
                    span {
                        margin-left: 3px;
                        background: #fff;
                        color: #000;
                        padding: 0 5px;
                        font-weight: 700;
                    }
                }
            }
            button.play {
                font-size: 13px;
                font-weight: normal;
                position: relative;
                overflow: hidden;
                width: auto;
                padding: 12px 24px;
                letter-spacing: 4px;
                text-transform: uppercase;
                color: #fff;
                border-width: 2px;
                border-radius: 30px;
                background: $gc;
            }
            .link {
                max-width: 700px;
                a {
                    display: block;
                    font-size: 50px;
                    line-height: 50px;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 30px;
                    &:hover {
                        color: $gc;
                    }
                }
            }
            p {
                font-size: 20px;
                color: #fff;
            }
        }
    }
}
</style>

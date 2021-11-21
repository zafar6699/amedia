<template>
    <div>
        <nuxt-link to="/">
            <div class="course-card">
                <span class="level beginner"> Elementary </span>

                <div class="img">
                    <nuxt-img
                        src="https://themefie.com/html/edufie/assets/img/course/2.png"
                    />
                </div>

                <div class="card-text">
                    <h2>Frontendning boshlang'ich bilimlari</h2>

                    <div class="teacher-info">
                        <div class="teacher">
                            <div class="teacher-img">
                                <nuxt-img
                                    src="https://themefie.com/html/edufie/assets/img/author/1.png"
                                />
                            </div>
                            <h3>Qalandarov Zafarbek</h3>
                        </div>

                        <div class="rating">
                            <svg
                                class="star"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fa"
                                data-icon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                            </svg>
                            <span class="rating-num">4.9</span>
                            <span>(78)</span>
                        </div>
                    </div>
                    <div class="price-info">
                        <h4>HTML</h4>
                        <h5>350 000 so'm</h5>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.beginner {
    background-color: green;
}
div.course-card {
    border-radius: 8px;
    overflow: hidden;
    // padding: 0px 10px;
    position: relative;

    &:hover {
        div.img {
            img {
                transform: scale(1.05);
            }
        }
    }
    span.level {
        font-weight: 500;
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        border-radius: 3px;
        color: #fff;
        position: absolute;
        z-index: 1;
        display: inline-block;
        padding: 0 10px;
        top: 10px;
        left: 10px;
    }
    div.img {
        height: 175px;
        overflow: hidden;
        width: 100%;
        img {
            transition: 0.4s;
            height: 100%;
            width: 100%;
            object-fit: cover;
            pointer-events: none;
        }
    }
    div.card-text {
        padding: 15px 20px;
        border: 1px solid #f2f2f2;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        h2 {
            font-size: 18px;
            color: $tc;
            margin-bottom: 15px;
            font-weight: 600;
        }

        div.teacher-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 15px;
            border-bottom: 1px solid #f2f2f2;
            div.teacher {
                display: flex;
                align-items: center;
            }
            div.teacher-img {
                width: 25px;
                height: 25px;
                border-radius: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            h3 {
                font-size: 14px;
                color: $pc;
                font-weight: 500;
                margin-left: 8px;
            }

            div.rating {
                .star {
                    width: 16px;
                    color: #f2994a;
                }

                span {
                    color: $pc;
                    font-size: 14px;
                }
                span.rating-num {
                    color: #f2994a;
                }
            }
        }

        div.price-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 10px;

            h4 {
                font-size: 14px;
                color: $pc;
            }
            h5 {
                font-size: 16px;
                color: $gc;
            }
        }
    }
}
</style>

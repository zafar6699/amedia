<template>
    <div>
        <nuxt-link to="/">
            <div class="course-card">
                <span class="level beginner"> 2019 </span>

                <div class="img">
                    <nuxt-img
                        src="http://cdn.amediatv.uz/public/uploads/cinema/org/3defbd62c77a7c5265c72741a009a632.jpg"
                    />
                </div>

                <div class="card-text">
                    <h2>
                        Omadsizninig qayta tug'ilishi: O'zga olamdagi
                        sarguzashtlar TV-2 [18+]
                    </h2>
                    <div class="seria">
                        <h4>{ 34-50 }</h4>
                    </div>
                    <!-- <div class="teacher-info">
                        <div class="teacher">
                            <div class="teacher-img">
                                <nuxt-img
                                    src="http://cdn.amediatv.uz/public/uploads/cinema/org/3defbd62c77a7c5265c72741a009a632.jpg"
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
                    </div> -->
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
    background-color: $gc;
}
div.course-card {
    border-radius: 8px;
    overflow: hidden;
    // padding: 0px 10px;
    position: relative;
    margin-bottom: 30px;
    &:hover {
        div.img {
            img {
                transform: scale(1.05);
            }
        }
        box-shadow: 0px 0px 15px #814d09;
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
        z-index: 4;
    }
    div.img {
        height: 175px;
        overflow: hidden;
        width: 100%;
        position: relative;
        img {
            transition: 0.4s;
            height: 100%;
            width: 100%;
            z-index: 1;
            position: relative;
            object-fit: cover;
            pointer-events: none;
        }
    }

    div.img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    div.card-text {
        padding: 15px 20px;
        border-right: 1px solid #8a5816;
        border-bottom: 1px solid #8a5816;
        border-left: 1px solid #8a5816;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        h2 {
            font-size: 16px;
            color: #fff;
            margin-bottom: 15px;
            font-weight: 500;
            height: 40px;
            line-height: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        div.seria {
            h4 {
                font-size: 13px;
                color: $gc;
                text-align: center;
            }
        }
        div.teacher-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            border-top: 1px solid $gc;
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
                font-size: 13px;
                color: $gc;
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
    }
}
</style>

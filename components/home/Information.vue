<template>
    <div>
        <div class="home-information">
            <div class="site-container">
                <div class="info-all">
                    <div class="information-top">
                        <div class="card-row">
                            <div class="item-7">
                                <div class="video-box">
                                    <video
                                        controls
                                        width="100%"
                                        src="../../video/video.mp4"
                                    ></video>
                                </div>
                            </div>
                            <div class="item-5">
                                <div class="video-box-right">
                                    <div>
                                        <h2>
                                            Eng yaxshi video va online kurslar
                                        </h2>
                                        <h1>
                                            Qabul <span>2021-yil</span> uchun
                                            ochiq! Va ko'nikmalaringizni
                                            rivojlantiring
                                        </h1>
                                        <p>
                                            Edulife bilan uydan chiqmasdan
                                            ta'lim oling yoki o'z
                                            bilimlaringizni boshqalarga ulashing
                                        </p>

                                        <nuxt-link class="free-link" to="/">
                                            <fa icon="video" /> Bepul
                                            videodarslar</nuxt-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="information-bottom">
                        <div class="card-row">
                            <div class="item-3">
                                <div class="stat">
                                    <h5>2,258</h5>
                                    <h6>Yakunlangan kurslar</h6>
                                </div>
                            </div>
                            <div class="item-3">
                                <div class="stat">
                                    <h5>300 +</h5>
                                    <h6>Mutaxassis murabbiylar</h6>
                                </div>
                            </div>
                            <div class="item-3">
                                <div class="stat">
                                    <h5>5,058 +</h5>
                                    <h6>O'quvchilar</h6>
                                </div>
                            </div>
                            <div class="item-3">
                                <div class="stat">
                                    <h5>100%</h5>
                                    <h6>Qoniqish darajasi</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
div.home-information {
    margin-bottom: 120px;
    div.info-all {
        box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 8%);
        border-radius: 5px;
        overflow: hidden;
    }
    div.information-top {
        margin-bottom: 15px;
        div.video-box-right {
            display: flex;
            align-items: center;
            height: 100%;
            h2 {
                font-size: 22px;
                color: $gc;
                margin-bottom: 10px;
            }
            h1 {
                font-size: 32px;
                color: $tc;
                margin-bottom: 20px;
                line-height: 46px;
                span {
                    color: $gc;
                }
            }
            p {
                font-size: 18x;
                line-height: 30px;
                color: $pc;
                margin-bottom: 15px;
            }
            .free-link {
                color: #fff;
                background-color: $gc;
                border-radius: 8px;
                font-size: 18px;
                padding: 15px 30px;
                display: inline-block;
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
    div.information-bottom {
        background-color: $gc;
        div.stat {
            padding: 25px 10px;
            h5 {
                font-size: 45px;
                text-align: center;
                color: #fff;
                font-weight: 500;
            }
            h6 {
                font-size: 16px;
                text-align: center;
                font-weight: 500;
                color: #fff;
            }
        }
    }
}
</style>

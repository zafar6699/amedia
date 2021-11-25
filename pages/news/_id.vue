<template>
    <div>
        <div class="id-news">
            <div class="container">
                <div class="card-row">
                    <div class="item-8 item-md-6">
                        <div class="content">
                            <div class="title">
                                <h1>
                                    Tez kunlarda Dota haqida anime o'zbek tilida
                                </h1>
                                <div class="date">
                                    <span>13.11.2021</span>
                                </div>
                            </div>
                            <div class="img">
                                <img src="@/assets/img/2.jpg" alt="" />
                            </div>
                            <div class="text">
                                <p>
                                    E'lon bilan bir qatorda ijodkorlar shouning
                                    sakkiz qismdan iborat debyut treylerini ham
                                    taqdim etdilar. Anime "Ajdaho qoni"
                                    subtitrini oldi. Qisqacha tavsifga ko'ra,
                                    anime o'z hikoyasini aytib beradi va
                                    syujetda ajdarholarga qarshi kurashadigan
                                    Davion ismli ritsar tasvirlangan. Janubiy
                                    Koreyaning MIR (Korra afsonasi) studiyasi
                                    moslashishga javobgardir. Eshli Miller
                                    ("Thor" va "X-Men: Birinchi sinf" filmlari)
                                    ssenariy muallifi, shou muallifi va
                                    loyihaning ijrochi prodyuseri bo'lib, uni Ki
                                    Xyon Ryu (Voltron: Legendary Defender)
                                    birgalikda ishlab chiqqan. DOTA
                                    moslashuvidan tashqari, League of Legends
                                    koinotiga asoslangan Arcane animatsion
                                    seriali ham mavjud. Dastlab uni 2020 yilda
                                    chiqarish rejalashtirilgan edi, ammo
                                    Kovid-19 pandemiyasi tufayli ozod qilish
                                    2021 yilga qoldirildi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item-4 item-md-6">
                        <div class="all-news">
                            <div class="title">
                                <h3>Boshqa yangiliklar</h3>
                            </div>
                            <nuxt-link to="/" class="card-news">
                                <div class="left">
                                    <img src="@/assets/img/avatar.jpg" alt="" />
                                </div>
                                <div class="right">
                                    <div class="name">
                                        <p>
                                            Tez kunlarda Dota haqida anime
                                            o'zbek tilida
                                        </p>
                                    </div>
                                    <div class="data">
                                        <span> 13.12.2021 </span>
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/" class="card-news">
                                <div class="left">
                                    <img src="@/assets/img/avatar.jpg" alt="" />
                                </div>
                                <div class="right">
                                    <div class="name">
                                        <p>
                                            Tez kunlarda Dota haqida anime
                                            o'zbek tilida
                                        </p>
                                    </div>
                                    <div class="data">
                                        <span> 13.12.2021 </span>
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/" class="card-news">
                                <div class="left">
                                    <img src="@/assets/img/avatar.jpg" alt="" />
                                </div>
                                <div class="right">
                                    <div class="name">
                                        <p>
                                            Tez kunlarda Dota haqida anime
                                            o'zbek tilida
                                        </p>
                                    </div>
                                    <div class="data">
                                        <span> 13.12.2021 </span>
                                    </div>
                                </div>
                            </nuxt-link>
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

<style lang="scss" scoped>
.id-news {
    margin: 60px 0;
    .all-news {
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        .title {
            margin-bottom: 20px;
        }
    }
    .card-news {
        width: 100%;
        display: flex;
        margin-bottom: 15px;
        &:hover {
            .left {
                img {
                }
            }
            .right {
                .name {
                    p {
                        color: $gc;
                        // text-decoration: underline;
                    }
                }
            }
        }

        .left {
            border-radius: 10px;
            width: 50%;
            margin-right: 10px;
            overflow: hidden;

            img {
                transition: 0.2s;
                border-radius: 10px;
                height: 90px;
                object-fit: cover;
                width: 130px;
            }
        }
        .right {
            .name {
                p {
                    height: 60px;
                    line-height: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    color: #333;
                    text-overflow: ellipsis;
                    margin-bottom: 10px;
                }
            }
            .data {
                span {
                    color: #999;
                }
            }
        }
    }
    .content {
        width: 100%;

        .title {
            margin-bottom: 20px;
            h1 {
                margin-bottom: 20px;
                // max-width: 80%;
                font-size: 26px;
            }
        }
        .text {
            p {
                font-size: 16px;
                line-height: 30px;
            }
        }
        .img {
            width: 100%;
            margin-bottom: 20px;
            img {
                border-radius: 10px;
                height: 400px;
                object-fit: cover;
                width: 100%;
            }
        }
    }
}
@media (max-width: 576px) {
    .id-news {
        .content {
            margin-bottom: 30px;
        }
    }
}
</style>

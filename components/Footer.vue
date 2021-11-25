<template>
    <div>
        <footer>
            <div class="container">
                <div class="footer-top">AMEDIATV</div>
                <div class="card-row">
                    <div class="item-3 item-md-3">
                        <h3>Manzil</h3>
                        <div class="adres">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae explicabo voluptatum in?
                            </p>
                        </div>
                    </div>
                    <div class="item-3 item-md-3">
                        <h3>Kontaktlar</h3>
                        <div class="tel">
                            <b>+998 (90) 959 66 08</b>
                        </div>
                    </div>
                    <div class="item-3 item-md-3">
                        <h3>Kategoriyalar</h3>
                        <div class="janr">
                            <ul>
                                <li
                                    v-for="(item, index) in category"
                                    :key="index"
                                >
                                    <nuxt-link
                                        :to="{
                                            name: 'filter___' + $i18n.locale,
                                            query: { text: item._id },
                                        }"
                                    >
                                        {{
                                            item[`name${$i18n.locale}`]
                                        }}</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-3 item-md-3">
                        <h3>Ijtimoiy tarmoqlar</h3>
                        <div class="social-links">
                            <ul>
                                <li>
                                    <a href="#"><fa icon="star" /> </a>
                                </li>
                                <li>
                                    <a href="#"><fa icon="star" /> </a>
                                </li>
                                <li>
                                    <a href="#"><fa icon="star" /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>Barcha huquqlar himoyalangan</p>
                    <p>UMD Soft</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        category() {
            return this.$store.state.category
        },
    },
}
</script>

<style lang="scss" scoped>
footer {
    padding: 50px 0;
    background-color: #1a1919 !important;
    position: relative;
    z-index: 0;

    div.footer-top {
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        position: absolute;
        font-size: 170px;
        opacity: 0.3;
        z-index: -1;
        color: #222;
        font-weight: 600;
        pointer-events: none;
    }
    .card-row {
        .item-3 {
            h3 {
                font-weight: 500;
                z-index: 33;
                color: $gc;
                margin-bottom: 20px;
                z-index: 12;
            }
            div {
                display: flex;
                z-index: 12;
            }
            .adres {
                p {
                    color: #fff;
                    z-index: 12;
                }
            }
            .tel {
                b {
                    color: #fff;
                    font-weight: 500;
                    z-index: 12;
                }
            }
            div.social-links {
                z-index: 12;
                ul {
                    z-index: 12;
                    display: flex;
                    list-style: none;
                }
                a {
                    margin-right: 15px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    background-color: $gh;
                    border-radius: 5px;
                    transition: 0.2s;
                    &:hover {
                        background-color: $gc;
                        svg {
                            path {
                                fill: #fff;
                            }
                        }
                    }
                    svg {
                        path {
                            transition: 0.2s;

                            fill: $gc;
                        }
                    }
                }
            }
            .janr {
                ul {
                    z-index: 12;

                    list-style: none;

                    li {
                        margin-bottom: 10px;
                        z-index: 12;

                        a {
                            z-index: 12;

                            color: #fff;
                            padding: 10px 20px;
                            padding-left: 0;
                            transition: 0.3s;
                            &:hover {
                                color: $gc;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer-bottom {
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid rgb(37, 37, 37);
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            font-size: 14px;
            color: #fff;
        }
    }
}
@media (max-width: 576px) {
    footer {
        .footer-top {
            display: none;
        }
        .item-md-3 {
            margin-bottom: 15px;
        }
    }
}
</style>

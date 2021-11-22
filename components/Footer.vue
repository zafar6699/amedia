<template>
    <div>
        <footer>
            <div class="container">
                <div class="footer-top">AMEDIATV</div>
                <div class="card-row">
                    <div class="item-3">
                        <h3>Manzil</h3>
                        <div class="adres">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae explicabo voluptatum in?
                            </p>
                        </div>
                    </div>
                    <div class="item-3">
                        <h3>Kontaktlar</h3>
                        <div class="tel">
                            <b>+998 (90) 959 66 08</b>
                        </div>
                    </div>
                    <div class="item-3">
                        <h3>Janrlar</h3>
                        <div class="janr">
                            <ul>
                                <li><nuxt-link to="/">Ongoing</nuxt-link></li>
                                <li><nuxt-link to="/">Ongoing</nuxt-link></li>
                                <li><nuxt-link to="/">Ongoing</nuxt-link></li>
                                <li><nuxt-link to="/">Ongoing</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-3">
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
export default {}
</script>

<style lang="scss" scoped>
footer {
    padding: 50px 0;
    background-color: #1a1919 !important;
    position: relative;

    div.footer-top {
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        position: absolute;
        font-size: 170px;
        opacity: 0.3;
        z-index: 0;
        color: #222;
        font-weight: 600;
        pointer-events: none;
    }
    .card-row {
        .item-3 {
            h3 {
                text-align: center;
                font-weight: 500;
                z-index: 33;
                color: $gc;
                margin-bottom: 20px;
                z-index: 12;
            }
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 12;
            }
            .adres {
                p {
                    color: #fff;
                    text-align: center;
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
</style>

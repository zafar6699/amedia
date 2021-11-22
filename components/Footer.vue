<template>
    <div>
        <footer>
            <div class="container">
                <div class="footer-top">AMEDIATV</div>
                <div class="card-row">
                    <div class="item-4"><h3>Manzil</h3></div>
                    <div class="item-4"><h3>Ijtimoiy tarmoqlar</h3></div>
                    <div class="item-4"><h3>Kontaktlar</h3></div>
                </div>
                <div class="footer-body">
                    <h2>Ijtimoiy tarmoqlar</h2>
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
                <!-- <div class="category">
                    <ul>
                        <li><nuxt-link to="/"> Ongoing </nuxt-link></li>
                        <li><nuxt-link to="/"> Ongoing </nuxt-link></li>
                        <li><nuxt-link to="/"> Ongoing </nuxt-link></li>
                    </ul>
                </div> -->
                <!-- <div class="footer-bottom">

                </div> -->
            </div>
        </footer>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
    padding: 100px 0;
    background-color: #1a1919 !important;
    position: relative;
    h3 {
        text-align: center;
    }
    div.footer-top {
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        position: absolute;
        font-size: 170px;
        opacity: 0.5;
        z-index: 0;
        color: #222;
        font-weight: 600;
        pointer-events: none;
    }
    .footer-body {
        z-index: 12;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        h2 {
            z-index: 12;
            color: #e1e1e1;
            font-size: 1.75em;
            font-weight: 500;
        }
    }
    .category {
        margin: 40px 0;
        padding: 20px 0;
        border: 1px solid #161515;
        border-left: 0px solid #000;
        border-right: 0px solid #000;
        display: flex;
        justify-content: center;
        ul {
            list-style: none;
            display: flex;
            justify-content: center;

            align-items: center;
            li {
                a {
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

    h3.footer-title {
        font-size: 18px;
        color: $tc;
        margin-bottom: 20px;
    }
    a.footer-link {
        z-index: 12;
        color: #7c7d94;
        display: inline-block;
        font-size: 14px;
        position: relative;
        margin-bottom: 8px;
        font-weight: 500;
        &:hover {
            color: $gc;
        }
    }

    div.social-links {
        z-index: 12;
        margin-top: 60px;
        ul {
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
}
</style>

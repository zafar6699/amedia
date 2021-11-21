<template>
    <div>
        <footer>
            <div class="site-container">
                <div class="footer-top">
                    <div class="card-row">
                        <div class="item-8">
                            <h3 class="footer-title">Kategoriyalar</h3>
                            <div class="card-row">
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                                <div class="item-4">
                                    <nuxt-link class="footer-link" to="/"
                                        >Development</nuxt-link
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="item-2">
                            <h3 class="footer-title">Havolalar</h3>
                            <nuxt-link class="footer-link" to="/"
                                >O'qituvchilar</nuxt-link
                            >
                            <nuxt-link class="footer-link" to="/"
                                >Bloglar</nuxt-link
                            >
                        </div>
                        <!-- <div class="item-2">
                            <h3 class="footer-title">Aloqa</h3>
                            <nuxt-link class="footer-link" to="/"
                                >O'qituvchilar</nuxt-link
                            >
                            <nuxt-link class="footer-link" to="/"
                                >Bloglar</nuxt-link
                            >
                        </div> -->
                        <div class="item-2">
                            <h3 class="footer-title">Ijtimoiy tarmoqlar</h3>

                            <div class="social-links">
                                <a href="#">
                                    <svg
                                        data-v-2e32ab3b=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="20"
                                        viewBox="0 0 25 20"
                                        fill="none"
                                    >
                                        <path
                                            data-v-2e32ab3b=""
                                            d="M22.6681 0.131505L1.40874 8.27737C-0.0421283 8.85641 -0.0337346 9.66062 1.14255 10.0192L6.60068 11.7111L19.2292 3.79398C19.8263 3.43298 20.3719 3.62718 19.9235 4.02274L9.69186 13.198H9.68947L9.69186 13.1992L9.31536 18.7894C9.86693 18.7894 10.1103 18.538 10.4197 18.2414L13.0708 15.6798L18.5853 19.7271C19.6021 20.2835 20.3323 19.9975 20.5854 18.7918L24.2053 1.84003C24.5758 0.363835 23.6382 -0.304562 22.6681 0.131505Z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg
                                        data-v-2e32ab3b=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11"
                                        height="20"
                                        viewBox="0 0 11 20"
                                        fill="none"
                                    >
                                        <path
                                            data-v-2e32ab3b=""
                                            d="M9.63282 11.2494L10.1515 7.63H6.90905V5.28125C6.90905 4.29125 7.36184 3.32562 8.81417 3.32562H10.2881V0.244375C10.2881 0.244375 8.95071 0 7.67168 0C5.00159 0 3.25634 1.73375 3.25634 4.87187V7.63062H0.288086V11.25H3.25634V20H6.90905V11.25L9.63282 11.2494Z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

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
    background-color: #2e3035;
    padding-top: 80px;
    div.footer-top {
        padding-bottom: 50px;
        border-bottom: 1px solid #e5f1fb;
    }
    h3.footer-title {
        font-size: 18px;
        color: $tc;
        margin-bottom: 20px;
    }
    a.footer-link {
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

<template>
    <div>
        <div class="find-course">
            <div class="site-container">
                <div class="find-course-inner">
                    <div class="card-row">
                        <div class="item-4">
                            <h1>O'zingizga mos kursni toping</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Pellentesque in eget phasellus
                                dui tincidunt nascetur nisl nunc consequat. Arcu
                                ultricies pulvinar enim vulputate.
                            </p>
                        </div>
                        <div class="item-8">
                            <div class="link-row">
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
                                </div>
                                <div class="link-3">
                                    <nuxt-link class="link-item" to="/">
                                        <h4>Web Development</h4>
                                        <h6>235 ta kurs</h6>
                                    </nuxt-link>
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

<style lang="scss" scoped>
div.find-course {
    margin-bottom: 80px;
    h1 {
        font-size: 38px;
        margin-bottom: 20px;
    }
    p {
        font-size: 16px;
        color: $pc;
        font-weight: 400;
    }

    div.link-row {
        display: flex;
        margin: 0px -10px;
        flex-wrap: wrap;
        .link-3 {
            width: 25%;
            padding: 0px 10px;
        }
        .link-item {
            display: block;
            border: 2px solid #e5f1fb;
            border-radius: 12px;
            transition: all 0.2s ease-in;
            width: 25%;
            width: 100%;
            padding: 15px 20px;
            margin-bottom: 20px;

            &:hover {
                background-color: $gh;
                h4,
                h6 {
                    color: $gc;
                }
            }
            h4 {
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 4px;
                transition: all 0.2s ease-in;
                color: $tc;
                text-align: center;
            }
            h6 {
                font-weight: 500;
                font-size: 12px;
                margin-bottom: 0;
                transition: all 0.2s ease-in;
                color: $pc;
                text-align: center;
            }
        }
    }
}
</style>

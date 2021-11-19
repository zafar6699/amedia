<template>
    <div>
        <div class="filter-page">
            <div class="filter-title">
                <div class="site-container">
                    <h2>Dasturlash</h2>
                </div>
            </div>

            <div class="filter-content">
                <div class="site-container">
                    <div class="card-row">
                        <div class="item-3">
                            <h3 class="cat-title">Bo'limlar</h3>

                            <div class="check-box check-custom">
                                <label class="cont">
                                    Vuejs
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    Vuejs
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    Vuejs
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    Vuejs
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <h3 class="cat-title">Daraja</h3>

                            <div class="check-box check-custom">
                                <label class="cont">
                                    Boshlang'ich
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    O'rta
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    Yuqori
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    Pro
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <h3 class="cat-title">To'lov</h3>

                            <div class="check-box check-custom">
                                <label class="cont">
                                    Tekin
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="cont">
                                    Pullik
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="item-9">
                            <div class="filter-courses">
                                <div class="card-row">
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <CourseCard />
                                    </div>
                                </div>

                                <div class="pagination">
                                    <pagination
                                        :total-items="length"
                                        :max-visible-pages="8"
                                        :items-per-page="limit"
                                        :page="page"
                                        @page-change="pageChange"
                                    >
                                    </pagination>
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
export default {
    data() {
        return {
            length: 55,
            limit: 12,
            page: 0,
        }
    },
    methods: {
        pageChange(page) {
            this.page = page
        },
    },
}
</script>

<style lang="scss" scoped>
div.filter-page {
    margin-bottom: 50px;
    div.filter-title {
        background-color: #f9fafd;
        padding: 45px 0px;
        h2 {
            font-size: 34px;
            color: $tc;
        }
    }

    div.filter-content {
        padding: 40px 0px;
    }

    h3.cat-title {
        font-size: 24px;
        color: $tc;
        margin-bottom: 15px;
        font-weight: 500;
    }
    div.check-box {
        margin-bottom: 30px;
    }
}
</style>

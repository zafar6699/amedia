<template>
    <div>
        <div class="filter-page">
            <div class="filter-title">
                <div class="container">
                    <h2>Anime filmlar</h2>
                </div>
            </div>
            <div class="filter-content">
                <div class="container">
                    <div class="card-row">
                        <div class="item-3">
                            <h3 class="cat-title">Kategoriyalar</h3>

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
                            <h3 class="cat-title">Janrlar</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in janr"
                                    :key="index"
                                >
                                    {{ item[`name${$i18n.locale}`] }}
                                    <input type="checkbox" value="1" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <h3 class="cat-title">Yillar</h3>

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
                                        <AnimeCard />
                                    </div>
                                    <div class="item-4 mb-30">
                                        <AnimeCard />
                                    </div>
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
</template>

<script>
export default {
    data() {
        return {
            length: 55,
            limit: 12,
            page: 0,
            filter: {
                category: [],
                janr: [],
                year: [],
            },
        }
    },
    computed: {
        janr() {
            return this.$store.state.janr
        },
    },
    methods: {
        pageChange(page) {
            this.page = page
        },
    },
}
</script>

<style lang="scss">
div.filter-page {
    margin-bottom: 50px;
    div.filter-title {
        background-color: $gh;
        padding: 45px 0px;
        h2 {
            font-size: 34px;
            color: $gc;
            font-weight: 500;
        }
    }

    div.filter-content {
        padding: 40px 0px;
    }

    h3.cat-title {
        font-size: 24px;
        color: $gc;
        margin-bottom: 15px;
        font-weight: 500;
    }
    div.check-box {
        margin-bottom: 30px;
    }
}
</style>

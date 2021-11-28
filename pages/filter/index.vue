<template>
    <div>
        <div class="filter-page">
            <div class="filter-title">
                <div class="container">
                    <h2>{{ $t('anime') }}</h2>
                </div>
            </div>
            <div class="filter-content">
                <div class="container">
                    <div class="card-row">
                        <div class="item-3">
                            <h3 class="cat-title">{{ $t('category') }}</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in category"
                                    :key="index"
                                >
                                    {{ item[`name${$i18n.locale}`] }}
                                    <input
                                        v-model="filter.category"
                                        type="checkbox"
                                        :value="item._id"
                                        @change="changeCheck"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <h3 class="cat-title">{{ $t('janr') }}</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in janr"
                                    :key="index"
                                >
                                    {{ item[`name${$i18n.locale}`] }}
                                    <input
                                        v-model="filter.janr"
                                        type="checkbox"
                                        :value="item._id"
                                        @change="changeCheck"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>

                            <h3 class="cat-title">{{ $t('years') }}</h3>

                            <div class="check-box check-custom">
                                <label
                                    class="cont"
                                    v-for="(item, index) in year"
                                    :key="index"
                                >
                                    {{ item }}
                                    <input
                                        v-model="filter.year"
                                        type="checkbox"
                                        :value="item"
                                        @change="changeCheck"
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="item-9" v-if="season != null">
                            <div
                                class="filter-courses"
                                v-if="season.length > 0"
                            >
                                <div class="card-row">
                                    <div
                                        class="item-4 mb-30"
                                        v-for="(item, index) in season"
                                        :key="index"
                                    >
                                        <AnimeCard :anime="item" />
                                    </div>
                                </div>
                            </div>

                            <div v-else>
                                <h1 class="not-found">
                                    {{ $t('notfound') }}
                                </h1>
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
            year: [],
            season: null,
        }
    },
    computed: {
        janr() {
            return this.$store.state.janr
        },
        category() {
            return this.$store.state.category
        },
    },
    async mounted() {
        for (let i = parseInt(new Date().getFullYear()); i >= 1991; i--) {
            this.year.push(i)
        }

        if (this.$route.query.janr) {
            this.filter.janr.push(this.$route.query.janr)
        }
        if (this.$route.query.category) {
            this.filter.janr.push(this.$route.query.category)
        }
        if (this.$route.query.year) {
            this.filter.janr.push(this.$route.query.year)
        }

        await this.getData()
    },
    methods: {
        pageChange(page) {
            this.page = page
            this.getData()

            window.scrollTo(0, 0)
        },
        async getData() {
            let season = await this.$axios.$post(
                `season/filter?page=${this.page + 1}&limit=${this.limit}`,
                this.filter
            )
            this.season = season.data
            this.length = season.count
        },
        changeCheck() {
            this.getData()
            window.scrollTo(0, 0)
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

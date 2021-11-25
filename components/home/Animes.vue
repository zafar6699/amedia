<template>
    <div>
        <div class="trending-courses">
            <div class="container">
                <div class="category-box">
                    <div class="anime-cat">
                        <button
                            :class="
                                activeTab == index
                                    ? 'btn-simple btn-simple-active'
                                    : 'btn-simple'
                            "
                            v-for="(item, index) in category"
                            :key="index"
                        >
                            {{ item[`name${$i18n.locale}`] }}
                        </button>
                    </div>

                    <nuxt-link
                        :to="{
                            name: `filter___${$i18n.locale}`,
                        }"
                        class="btn-simple"
                        >Barchasi <fa icon="angle-right" />
                    </nuxt-link>
                </div>

                <div class="anime-row">
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                    <div class="anime-item item-md-3">
                        <AnimeCard />
                    </div>
                </div>

                <div class="animes-add">
                    <button class="btn-simple btn-simple-active">
                        Ko'proq ko'rsatish
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
        }
    },
    computed: {
        category() {
            return this.$store.state.category
        },
    },
}
</script>

<style lang="scss">
div.trending-courses {
    margin-bottom: 80px;
    margin-top: 100vh;
    .animes-add {
        display: flex;
        justify-content: center;
    }
    div.category-box {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .anime-cat {
            button {
                margin-right: 8px;
            }
        }
    }
    .courses-carousel {
        // margin: 0px -15px;
    }
    .slick-dots li.slick-active button:before {
        color: $gc;
        opacity: 1;
    }
}
@media (max-width: 576px) {
    .category-box {
        margin-bottom: 20px !important;
        align-items: flex-end !important;
        .btn-simple {
            margin-bottom: 10px !important;
        }
        .anime-cat {
            max-width: 77%;
        }
    }
}
</style>

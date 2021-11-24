<template>
    <div>
        <div class="trending-courses">
            <div class="container">
                <div class="category-box">
                    <div class="anime-cat">
                        <button class="btn-simple btn-simple-active">
                            Barcha animelar
                        </button>
                        <button class="btn-simple">Anime filmlar</button>
                        <button class="btn-simple">Ongoing</button>
                        <button class="btn-simple">Yakunlangan animelar</button>
                    </div>

                    <nuxt-link class="btn-simple" to="/filter"
                        >Barchasi <fa icon="angle-right" />
                    </nuxt-link>
                </div>

                <div class="anime-row">
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
                        <AnimeCard />
                    </div>
                    <div class="anime-item">
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
        return {}
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
</style>

<template>
    <div>
        <div class="home-news">
            <div class="container">
                <div class="home-title">
                    <h4>Yangiliklar</h4>

                    <nuxt-link class="btn-simple" to="/news"
                        >Barchasi</nuxt-link
                    >
                </div>

                <div class="card-row">
                    <div class="item-4">
                        <NewsCard />
                    </div>
                    <div class="item-4">
                        <NewsCard />
                    </div>
                    <div class="item-4">
                        <NewsCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style></style>

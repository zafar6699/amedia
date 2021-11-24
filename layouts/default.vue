<template>
    <div v-if="loading">
        <Header />
        <div class="header-back"></div>
        <div class="layout-home">
            <Nuxt :key="$route.fullPath" />
        </div>
        <Loading />
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
        }
    },
    async mounted() {
        // if (this.$auth.loggedIn) {
        //     this.$auth.fetchUser()
        // }

        await this.$store.dispatch('getJanr')
        this.loading = true
    },
}
</script>

<style lang="scss"></style>

<template>
    <div>
        <Header />

        <div class="layout-home">
            <Nuxt :key="$route.fullPath" />
        </div>
        <Loading />
        <Footer />
    </div>
</template>

<script>
export default {
    async mounted() {
        // if (this.$auth.loggedIn) {
        //     this.$auth.fetchUser()
        // }
    },
}
</script>

<style lang="scss"></style>

<template>
    <div>
        <Header />

        <div class="layout-content">
            <Nuxt :key="$route.fullPath" />
        </div>
        <Footer />
        <Loading />
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

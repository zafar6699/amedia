<template>
    <div>
        <Header />
        <div class="header-back"></div>
        <div class="layout-content">
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

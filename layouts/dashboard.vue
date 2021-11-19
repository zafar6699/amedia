<template>
    <div>
        <Header />
        <div class="layout-content">
            <div class="dashboard-content">
                <div class="site-container">
                    <div class="card-row">
                        <div class="item-2"><Navbar /></div>
                        <div class="item-10">
                            <Nuxt :key="$route.fullPath" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loading />
        <Footer />
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    async mounted() {
        // if (this.$auth.loggedIn) {
        //     this.$auth.fetchUser()
        // }
    },
}
</script>

<style></style>

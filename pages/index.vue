<template>
    <div>
        <Slider />

        <Animes />
        <div>
            <button @click="singGoogle">OK</button>
        </div>
        <Trailer />
        <News />
    </div>
</template>

<script>
import News from '@/components/home/News.vue'
import Animes from '@/components/home/Animes.vue'
import Slider from '@/components/home/Slider12.vue'
import Trailer from '@/components/home/Trailer1.vue'

export default {
    components: {
        Trailer,
        Animes,
        News,
        Slider,
    },

    head() {
        return {
            title: this.$t('tithome'),
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: this.$t('titmeta'),
                    name: 'description',
                    content: this.$t('titmeta'),
                },
            ],
        }
    },

    mounted() {},
    methods: {
        async singGoogle() {
            await this.$auth.loginWith('google')
        },
    },
}
</script>

<style lang="scss" scoped></style>

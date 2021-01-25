<template>
    <div class="app">
        <Layout/>
    </div>
</template>

<script>
    import Layout from '@/components/layout/Layout'

    export default {
        name: 'app',
        components: { Layout },
        data() {
            return {
                infoData: {},
            }
        },
        mounted() {
            this.getloginInfo()
        },
        methods: {
            getloginInfo() {
            },
        },
    }
</script>

<style>
    .app{
        width:100%;
        height:100%;
    }
</style>

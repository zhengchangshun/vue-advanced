<template>
    <el-menu
        ref="menu"
        router
        :default-active="active"
    >
        <template v-for="item in menuList">
            <menu-item :menu="item"/>
        </template>
    </el-menu>
</template>

<script>
    import { mapState } from "vuex"
    import { getHashPath } from '@/lib/util'
    import MenuItem from "./menuItem"

    export default {
        name: 'MenuBar',
        components: { MenuItem },
        data() {
            return {
                active: '/',
                openNames: [],
            }
        },
        computed: {
            ...mapState(['menuList']),
        },
        watch: {
            openNames() {
                // this.$nextTick(() => {
                //     this.$refs.menu.updateOpened()
                //     this.$refs.menu.updateActiveName()
                // })
            },
        },

        mounted() {

            this.active =  getHashPath()
        },
        methods: {
        },
    }
</script>

<style lang="less">
</style>

<template>
    <div>
        <el-menu
            ref="menu"
            :active-name="activeName"
            theme="light"
            width="auto"
            :open-names="openNames"
        >
            <template v-for="item in menus">
                <menu-item :menu="item"/>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import MenuItem from "./menuItem"

    export default {
        name: 'MenuBar',
        components: { MenuItem },
        data() {
            return {
                activeName: ``,
                openNames: [],
            }
        },
        computed: {
            ...mapGetters({
                menus: 'menus',
            }),
        },
        watch: {
            openNames() {
                this.$nextTick(() => {
                    this.$refs.menu.updateOpened()
                    this.$refs.menu.updateActiveName()
                })
            },
        },

        mounted() {
            this.getCurrentMenu(this.menus)
        },
        methods: {
            getPath() {
                let path = location.href.split('#')[1]
                path = path.split('?')[0]
                path = path.split(':')[0]
                console.log(path);
                return path
            },

            getCurrentMenu(menus, parent) {
                let path = this.getPath()
                for (var i = 0; i < menus.length; i++) {
                    let menu = menus[i]
                    if (menu.path === path) {
                        this.activeName = menu.name
                        if (parent) {
                            this.openNames.push(parent.name)
                        }
                        break
                    }
                    if (menu.children) {
                        this.getCurrentMenu(menu.children, menu)
                    }
                }
            },
        },
    }
</script>

<style scoped>
</style>

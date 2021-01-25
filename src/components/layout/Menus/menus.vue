<template>
    <div>
        <Menu
            ref="menu"
            :active-name="activeName"
            theme="light"
            width="auto"
            :open-names="openNames"
        >
            <template v-for="item in menus">
                <DeepItem :menu="item"/>
            </template>
        </Menu>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    import DeepItem from "./menu"

    export default {
        name: `MenuBar`,
        components: { DeepItem },
        data() {
            return {
                activeName: ``,
                openNames: [],
            }
        },
        computed: {
            ...mapGetters({
                menus: `menus`,
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
                let path = location.href.split(`#`)[1]
                path = path.split(`?`)[0]
                path = path.split(`:`)[0]
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
    .ivu-menu-vertical.ivu-menu-light:after{
        background:none;
    }
</style>

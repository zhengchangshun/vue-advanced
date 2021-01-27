<template>
    <div v-if="!menu.hidden">
        <template v-if="menu.children">
            <el-submenu :index="menu.name">
                <template slot="title">
                    <span @click="goUrl(menu.path)">
                        <Icon
                            v-if="menu.meta && menu.meta.icon"
                            :type="menu.meta.icon"
                            class="menu-icon"
                        />
                    {{ menu.meta.title }}
                    </span>
                </template>
                <template v-for="itemMenu in menu.children">
                    <menu-item :menu="itemMenu"/>
                </template>
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="menu.name">
                <template slot="title">
                    <span @click="goUrl(menu.path)">
                         <Icon
                             v-if="menu.meta && menu.meta.icon"
                             :type="menu.meta.icon"
                             class="menu-icon"
                         />
                        {{ menu.meta.title }}
                    </span>
                </template>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'menuItem',
        props: ['menu'],
        methods: {
            goUrl(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="less">
    .el-menu {
        .el-menu-item,.el-submenu__title {
            text-align: left;
            padding-left:30px !important;
        }
    }

</style>

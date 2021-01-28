<template>
    <div>
        <template v-if="menu.children">
            <el-submenu :index="menu.path">
                <template slot="title">
                    <div class="menu-item-wrap">
                        <Icon :type="menu.meta && menu.meta.icon" class="menu-icon"/>
                        <span>{{ menu.meta.title }}</span>
                    </div>
                </template>
                <template v-for="itemMenu in menu.children">
                    <menu-item :menu="itemMenu"/>
                </template>
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="menu.path">
                <div class="menu-item-wrap">
                    <Icon :type="menu.meta && menu.meta.icon" class="menu-icon"/>
                    <span>{{ menu.meta.title }}</span>
                </div>
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
        text-align: left;
        height: 100%;

        .menu-item-wrap {
            display: flex;
            align-items: center;

            .menu-icon {
                font-size: 16px;
                margin-right: 6px;
            }
        }
    }
</style>

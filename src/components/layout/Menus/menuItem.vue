<template>
    <div class="menu-item-wrap">
        <template v-if="menu.children">
            <el-submenu :index="menu.path" class="sub-menu-wrap">
                <template slot="title">
                    <span>
                        <Icon
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
            <el-menu-item :index="menu.path">
                <span>
                     <Icon
                         :type="menu.meta.icon"
                         class="menu-icon"
                     />
                    {{ menu.meta.title }}
                </span>
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
    .menu-item-wrap {
        &:hover {
            background: red;
        }

        .menu-icon {
            font-size: 16px;
            margin-right: 6px;
            color: #ffffff;
        }

        .el-menu-item, .el-submenu__title {
            text-align: left;
            font-weight: normal;

        }

        .is-active {
            font-weight: 500;
            background: rgb(0 196 192);
        }
    }
</style>

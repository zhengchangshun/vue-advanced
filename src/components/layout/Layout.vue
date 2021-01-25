<template>
    <el-container class="top-wrap">
        <HeaderBar class="header"></HeaderBar>
        <el-container class="content">
            <el-aside class="sider" width="200px">
                <MenuBar/>
            </el-aside>
            <el-main class="main">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import MenuBar from "./Menus/menus"
    import HeaderBar from "./Header"

    export default {
        components: {
            HeaderBar,
            MenuBar,
        },
    }
</script>
<style lang="less" scoped>
    .top-wrap {
        display: flex;
        flex-direction:column;
        width: 100%;
        height: 100%;

        .header {
            background-color: #B3C0D1;
            color: #333;
            text-align: center;
            line-height: 60px;
            height: 60px;
        }

        .content {
            flex: auto;

            .sider {
                background-color: #D3DCE6;
                color: #333;
                text-align: center;
            }

            .main {
                background-color: #ffffff;
                color: #333;
                text-align: center;
                line-height: 160px;
            }
        }


    }

</style>

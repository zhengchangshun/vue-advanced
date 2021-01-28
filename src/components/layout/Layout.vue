<template>
    <el-container class="top-wrap">
        <HeaderBar class="header"></HeaderBar>
        <el-container class="content">
            <el-aside class="sider" width="200px">
                <MenuBar/>
            </el-aside>
            <el-main class="main">
                <div class="main-content">
                    <router-view/>
                </div>
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
        flex-direction: column;
        width: 100%;
        height: 100%;

        .header {
            background-color: #2A9532;
            color: #ffffff;
            padding: 0;
        }

        .content {
            flex: auto;

            .main {
                background-color: #f2f2f2;
                padding: 10px;
                display: flex;
                flex-direction: column;

                .main-content {
                    flex: 1;
                    padding: 10px 20px;
                    background-color: #ffffff;
                }
            }
        }
    }

</style>

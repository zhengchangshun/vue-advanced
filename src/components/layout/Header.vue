<template>
    <el-header class="header-wrap">
        <div class="layout-logo">
            <div class="logo-text">成本中心</div>
            <div class="logo-es">Cost Center</div>
        </div>
        <div class="layout-nav">
            <el-dropdown @command="dropdownClick" class="drop-menu">
                <span>
                    <Icon type="el-icon-s-custom" class="user-icon"/>
                    <span class="user-info">您好，{{ userInfo.userName }}</span>
                    <Icon type="el-icon-arrow-down"/>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script>
    import { mapState } from "vuex"

    export default {
        name: `HeaderBar`,
        computed: {
            ...mapState(['userInfo']),
        },
        methods: {
            dropdownClick(v) {
                if (v === `logout`) {
                    this.$ajax.get(`/logout`)
                }
            },
        },
    }
</script>

<style lang="less" scoped>
    .header-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .layout-logo {
        width: 180px;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .logo-text{
            font-size:22px;
            margin-bottom:6px;
            font-family: "华文行楷","Microsoft YaHei", "黑体";
        }
        .logo-es{
            font-size:12px;
        }
    }

    .layout-nav {
        margin-right: 20px;

        .drop-menu {
            color: #fff;
        }

        .user-icon {
            font-size: 20px;
        }

        .user-info {
            margin: 0 10px;
        }
    }
</style>

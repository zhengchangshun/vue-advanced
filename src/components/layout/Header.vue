<template>
    <el-header>
        <div class="layout-logo">
            cost-center
        </div>
        <div class="layout-nav">
            <el-dropdown @command="dropdownClick">
                <span>
                    <Icon type="el-icon-s-custom" class="user-icon"/>
                <span>您好，{{ userInfo.userName }}</span>
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
    import { mapState } from "vuex";

    export default {
        name: `HeaderBar`,
        computed:{
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
    .layout-logo {
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        text-align: center;
        background: #5b6270;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        position: absolute;
        right: 20px;

        .user-icon {
            font-size: 20px;
            margin: 0 10px;
            color: #fff;
        }
    }
</style>

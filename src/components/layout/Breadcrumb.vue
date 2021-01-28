<template>
    <el-breadcrumb separator="/" class="breadcrumb-wrap">
        <el-breadcrumb-item
            v-for="(item,index) in breadList"
            :key="index"
            :to="{ path: item.path }"
        >
            {{item.meta ? item.meta.title : null}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrumb",
        data() {
            return {
                breadList: []
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched;
                this.breadList = matched;
            }
        },
    }
</script>

<style lang="less">
    .breadcrumb-wrap {
        padding:10px;
    }

</style>

<template>
    <div class="Page404">
        <el-card :bordered="false">
            <p slot="title">
                404
            </p>
            <p>page not found</p>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: `Page404`,
    }
</script>

<style lang="less" scoped>
    .Page404 {
        background: #eee;
        padding: 20px;
        text-align: center;
    }
</style>

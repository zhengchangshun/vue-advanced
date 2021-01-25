<template>
    <div>
        <Breadcrumb :style="{ margin: '24px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>about</BreadcrumbItem>
        </Breadcrumb>
        <Content>
            about
            <GlobalFirst/>
            <GlobalSecond/>
            <div v-color:red>
                hello vue
            </div>
        </Content>
    </div>
</template>

<script>
    export default {
        components: {},
    }
</script>

<style></style>

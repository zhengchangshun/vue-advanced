<template>
    <div v-if="!menu.hidden">
        <template v-if="menu.children">
            <el-submenu :name="menu.name">
                <template slot="title">
                    <Icon
                        v-if="menu.icon"
                        :type="menu.icon"
                    />
                    {{ menu.meta.title }}
                </template>
                <template v-for="itemMenu in menu.children">
                    <Item :menu="itemMenu"/>
                </template>
            </el-submenu>
        </template>
        <template v-else-if="menu.group">
            <MenuGroup
                v-for="groupItem in menu.group"
                :title="groupItem.title"
                :key="groupItem.title"
            >
                <template v-for="itemMenu in groupItem.children">
                    <Item :menu="itemMenu"/>
                </template>
            </MenuGroup>
        </template>
        <template v-else>
            <MenuItem
                :name="menu.name"
                :to="menu.path"
            >
                <Icon
                    v-if="menu.icon"
                    :type="menu.icon"
                />
                {{ menu.meta.title }}
            </MenuItem>
        </template>
    </div>
</template>

<script>
    export default {
        name: `Item`,
        props: [`menu`],
    }
</script>

<style scoped></style>

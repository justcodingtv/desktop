<template>
    <div class="ui menu">
        <div class="header item" @click="openMenu()">
            <i class="sidebar icon"></i>
            {{ $t('navigation.menu') }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'layout-navigation',
        methods: {
            openMenu () {
                $("#main-sidebar").sidebar('toggle')
            }
        }
    }
</script>

<style scoped lang="scss">
    .ui.menu {
        margin-top: 0;

        .item {
            cursor: pointer;
        }
    }
</style>


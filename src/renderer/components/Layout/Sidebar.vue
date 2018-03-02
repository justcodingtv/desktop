<template>
    <div class="ui left vertical menu sidebar" id="main-sidebar">
        <router-link :to="{ name: 'home' }" v-t="{ path: 'navigation.home' }" class="item" />
    </div>
</template>

<script>
    export default {
        name: 'layout-sidebar'
    }
</script>

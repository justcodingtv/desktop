<template>
    <div class="ui left vertical menu sidebar" id="main-sidebar">
        <router-link :to="{ name: 'home' }" v-t="{ path: 'navigation.home' }" class="item" />
        <router-link :to="{ name: 'auth.login' }" v-t="{ path: 'navigation.login' }" class="item"
                        v-if="!$helpers.isAuthenticated" />
        <router-link :to="{ name: 'auth.register' }" v-t="{ path: 'navigation.register' }" class="item"
                        v-if="!$helpers.isAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'layout-sidebar'
    }
</script>

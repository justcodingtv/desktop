<template>
    <div class="ui middle aligned wide column">
        <div class="ui segments">
            <div class="ui segment">
                <h3 v-t="{ path: 'navigation.login' }"></h3>    
            </div>
            <div class="ui segment">
                <div :class="{ 'ui form':true, 'error': errors.any() }">
                    <div :class="{ 'field': true, 'error': errors.has('email') }">
                        <label for="email" v-t="{ path: 'auth.email' }" />
                        <input type="email" name="email" id="auth-login" v-validate="'required|email'" v-model="email">
                    </div>
                    <div :class="{ 'field': true, 'error': errors.has('password') }">
                        <label for="password" v-t="{ path: 'auth.password' }" />
                        <input type="password" name="password" id="auth-password" v-validate="'required'" v-model="password">
                    </div>
                    <div class="ui error message" v-if="errors.any()">
                        <ul>
                            <li v-for="error in errors.all()" :key="error">
                                {{ error }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ui right aligned segment">
                <button class="ui primary button" v-t="{ path: 'navigation.login' }"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth-login',
        data () {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login () {

            }
        },
        mounted () {
            this.$validator.validateAll()
        }
    }
</script>


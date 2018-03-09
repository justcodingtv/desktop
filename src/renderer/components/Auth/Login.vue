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
                <button class="ui primary button" v-t="{ path: 'navigation.login' }" @click.prevent="login()" />
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
                this.$validator.validateAll().then((isValidated) => {
                    if (isValidated) {
                        this.$http.post('/auth/login', {
                            email: this.email,
                            password: this.password
                        }).then((response) => {
                            const data = response.data

                            /**
                             * Set the access token in the settings file
                             */
                            this.$settings.set('auth.accessToken', data.access_token)
                            this.$settings.set('auth.tokenType', data.token_type)

                            /**
                             * Update the user information in Vuex
                             */
                            this.$store.commit('userData', data.user)

                            /**
                             * Add the access token to axios 
                             */
                            this.$helpers.addAccessTokenToAxios()
                        }).catch((response) => {

                        })
                    }
                })
            }
        },
        mounted () {
            this.$validator.validateAll()
        }
    }
</script>


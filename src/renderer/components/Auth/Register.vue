<template>
    <div class="ui middle aligned wide column">
        <div class="ui segments">
            <div class="ui segment">
                <h3 v-t="{ path: 'navigation.login' }"></h3>    
            </div>
            <div class="ui segment">
                <div :class="{ 'ui form':true, 'error': errors.any() }">
                    <div :class="{ 'field': true, 'error': errors.has('firstName') }">
                        <label for="register-firstName" v-t="{ path: 'auth.firstName' }" />
                        <input type="text" name="firstName" id="register-firstName" v-validate="'required'"
                                v-model="user.firstName">
                    </div>
                    <div :class="{ 'field': true, 'error': errors.has('lastName') }">
                        <label for="register-lastName" v-t="{ path: 'auth.lastName' }" />
                        <input type="text" name="lastName" id="register-lastName" v-validate="'required'"
                                v-model="user.lastName">
                    </div>
                    <div :class="{ 'field': true, 'error': errors.has('email') }">
                        <label for="register-email" v-t="{ path: 'auth.email' }" />
                        <input type="email" name="email" id="register-login" v-validate="'required|email'" v-model="user.email">
                    </div>
                    <div :class="{ 'field': true, 'error': errors.has('password') }">
                        <label for="register-password" v-t="{ path: 'auth.password' }" />
                        <input type="password" name="password" id="register-password"
                                v-validate="'required|min:6|confirmed:passwordConfirmation'" v-model="user.password">
                    </div>
                    <div :class="{ 'field': true, 'error': errors.has('password') }">
                        <label for="register-password-confirmation" v-t="{ path: 'auth.password' }" />
                        <input type="password" name="passwordConfirmation" id="register-password-confirmation"
                                v-validate="'required'" v-model="user.passwordConfirmation">
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
                <button class="ui primary button" v-t="{ path: 'navigation.register' }" @click.prevent="register()" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth-login',
        data () {
            return {
                user: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                },
            }
        },
        methods: {
            login () {
                this.$validator.validateAll().then((isValidated) => {
                    if (isValidated) {
                        this.$http.post('/auth/register', {
                            first_name: this.user.first_name,
                            last_name: this.user.last_name,
                            email: this.user.email,
                            password: this.user.password,
                            password_confirmation: this.user.passwordConfirmation
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
                            // TODO: add error handeling
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

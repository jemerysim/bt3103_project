<template>
    <div class="container">
        <form action="#" @submit.prevent="submit">
            <label for="Username"> Name: </label>
            <input type="text" id="username" v-model="form.name">
            <label for="Email"> Email: </label>
            <input type="text" id="email" v-model="form.email">
            *minimum 8 characters
             <div class="form-group" :class="{ 'form-group--error': $v.form.password.$error }">
            <label for ="Password"> Password: </label>
            <input type="text" id="password" v-model="form.password">
            </div>
            <div class="error" v-if="!$v.form.password.required">Field is required</div>
            <div class="error" v-if="!$v.form.password.minLength">Password must have at least {{$v.form.password.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.form.passwordConfirm.$error }">
            <label for ="Confirm Password"> Confirm Password: </label>
            <input type="text" id="password2" v-model="form.passwordConfirm">
            </div>
            <div class="error" v-if="!$v.form.passwordConfirm.sameAsPassword">Passwords must be identical.</div>
            <label type="text" id="phoneNumber"> Phone Number: </label>
            <input type="text" id="phoneNumebr" v-model="form.phoneNumber">
            <button type="submit" :disabled="submitStatus === 'PENDING'"> Regiser </button>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for signing up!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>    
    </div>
</template>

<script>
import firebase from "firebase";
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                passwordConfirm: "",
                phoneNumber: "",
                submitStatus: null
            },
            error: null,
        }
    },
    validations: {
        form: {
            password: {
            required,
            minLength: minLength(8)
            },
            passwordConfirm: {
                sameAsPassword: sameAs('password')

            }
        }
    },
    methods: {
        submit: function() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
            this.submitStatus = 'PENDING'
            firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(data => {
                data.user.updateProfile({
                    displayName: this.form.name,
                    phoneNumber: this.form.phoneNumber
                })
            .then(() => {});
            })
            .catch(err => {
                this.error = err.message;
            });
            setTimeout(() => {
                this.submitStatus = 'OK'
                }, 500)
            }
        }
    }
}
</script>

<style scoped>
input {
    display: block;
    width: 50%;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
    text-align: left;
    padding: 10px 10px;
    margin: 10px auto;
    border: 1px solid #76C056;;
    outline: none;
}
button {
  display: block;
  width: 30%;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  color: black;
  background: #76C056;;
  padding: 1rem 10px;
  margin-top: 40px;
  margin-bottom:40px;
  margin-left: 800px;
  border: 0;
  outline: none;
  cursor: pointer;
}
.invalid.untouched ~ .error {
    display: none;
}
</style>
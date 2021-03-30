<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger"> {{error}}</div>
        <form action="#" @submit.prevent="submit">
            <label for="Email"> Email: </label>
            <input type="text" id="email" v-model="form.email">
            <label for ="Passowrd"> Password: </label>
            <input type="text" id="password" v-model="form.password">
            <button type="submit"> Log In </button>
            <button type="button"> Forgot Password </button>
                <Modal v-show="modalVisible" @close="closeModal">
                <template v-slot:header>
                    Type in your email below and a link to reset your password will be sent.
                </template>
                <template v-slot:body>
                    <label for="emailForget"> Email: </label>
                    <input type="text" id="emailForget" v-model="forgetEmail">
                    <button v-on:click="sendPasswordConfirm()"> Confirm </button>
                </template>
                </Modal>
        </form>  
        <div class="space">
            Not a member yet? Click below to Signup for exclusive perks!
            <button type="button" v-on:click="route()"> Signup </button>
        </div>
    </div>

</template>
<script>
import { auth}  from "../firebase.js";
import Modal from "./Modal.vue";

export default {
    name: 'Login',
    components: {
        Modal,
    },
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: null,
            modalVisible: false,
            forgetEmail: "",
            emailSending : false,
        };
    },
    methods: {
        submit: function() {
            auth.signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(() => {
                this.$router.replace({ name: 'Dashboard'})
                })
            .catch(err => {
                this.error = err.message;
            });
        },
        route: function() {
            this.$router.push({ name: 'Register' })
        },
        showModal: function() {
            this.modalVisible = true;
        },
        hideModal: function() {
            this.modalVisible = false;
        },
        sendPassordConfirm: function() {
            if (!this.forgetEmail) {
                this.error = "Please type in a valid email address.";
                return;
            }
            auth.sendPasswordResetEmail(this.forgetEmail).then(() => {
                this.emailSending = true;
            })
            .catch(error => {
                this.emailSending = false;
                this.error = error.message;
            });
        },
    },
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
  padding: 10px 10px;
  margin: 30px auto;
  border: 0;
  outline: none;
  cursor: pointer;
}
</style>
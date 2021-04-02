<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger"> {{error}}</div>
        <form action="#" @submit.prevent="submit">
            <label for="Email"> Email: </label>
            <input type="text" id="email" v-model="form.email">
            <label for ="Passowrd"> Password: </label>
            <input type="text" id="password" v-model="form.password">
            <button type="submit"> Log In </button>
            <button class='forgot-pw' type="button"> Forgot Password? </button>
        </form>  
        <div class="space">
            Not a member yet? Click below to Sign up for exclusive perks!
            <button type="button" v-on:click="route()"> Sign Up </button>
        </div>
    </div>

</template>
<script>
import { auth}  from "../firebase.js";

export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: null,
        };
    },
    methods: {
        submit: function() {
            auth.signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(() => {
                this.$router.replace({ name: 'Dashboard' })
                })
            .catch(err => {
                this.error = err.message;
            });
        },
        route: function() {
            this.$router.push({ name: 'Register' })
        }
    },
}
</script>
<style scoped>
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
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
.space {
    text-align: center;
}
.forgot-pw {
    font-size: 0.8rem;
}
button {
  border-radius: 5px;
  display: block;
  width: 30%;
  font-size: 1.1rem;
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
button:hover {
  background-color: #76c05662;
}
</style>
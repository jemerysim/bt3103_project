<template>
    <div class="container">
        <form action="#" @submit.prevent="submit">
            <label for="Username"> Name: </label>
            <input type="text" id="username" v-model="form.name">
            <label for="Email"> Email: </label>
            <input type="text" id="email" v-model="form.email">
            <label for ="Passowrd"> Password: </label>
            <input type="text" id="password" v-model="form.password">
            <button type="submit"> Regiser </button>
        </form>    
    </div>

</template>

<script>
import firebase from "firebase";

export default {
    name: 'Register',
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: ""
            },
            error: null
        }
    },
    methods: {
        submit: function() {
            firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(data => {
                data.user.updateProfile({
                    displayName: this.form.name
                })
            .then(() => {});
            })
            .catch(err => {
                this.error = err.message;
            });
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
</style>
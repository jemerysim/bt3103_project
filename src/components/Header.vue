<template>
  <div class="header">
    <nav class="flexWrap">
      <div class="flexCol">
        <img id="logo" src="../assets/logo.png">
      </div>
      <div class="flexCol">
        <a id="home"> <router-link to="/" exact>Home</router-link></a>
        <a id="home"> <router-link to="/benefits" exact>Benefits</router-link></a>
        <a id="home"> <router-link to="/charging" exact>Charging</router-link></a>
        <a id="home"> <router-link to="/ownership" exact>Ownership</router-link></a>
        <a id="home"> <router-link to="/community" exact>Community</router-link></a>
      </div>
        <router-link id='button1' tag="button" to="/login" v-if="!user" exact>Login</router-link>
        <router-link id='button2' tag="button" to="/register" v-if="!user" exact>Sign Up</router-link>
        <router-link to="/dashboard" v-if="user"> Dashboard </router-link>
        <button @click="signOut" v-if="user"> Sign-out </button>
    </nav>
    
  </div>
</template>

<script>
import { auth } from "../firebase.js";

  export default {
    components: {
    },
    computed: {
      user() {
        return this.$store.getters.getUser;
      }
    },
    methods: {
      signOut: function() {
        auth.signOut().then(() => {
          this.$router.replace({ name: 'Home'});
        });
      },
    },
  }

</script>

<style scoped>
.flexWrap {
  display: flex;
  overflow: hidden; 
  margin: 30px;
  border-bottom: 1px solid #000;
  /* background-color: #76C056; */
}
.flexCol {
  box-sizing: border-box;
  padding: 10px;
  width: 33.3%;
}


#logo {
  line-height: 10px;
  width: 180px;
  float: left;
}

#side {
  text-align: right;
}

.header a {
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 40px;
}
a.router-link-active{
  text-decoration: underline;
  text-decoration-color:black;
  text-decoration-thickness: 2px;
} 

button {
  margin: 8px;
  background-color: white;
  border-radius: 11px;
  border-style: solid;
  border-color: black;
  padding: 4px 18px;
  font-size: 15px;
}
#button1 {
  background-color: black;
  border-color: black;
  color: white; 
}
#button2 {
  background-color: black;
  border-color: black;
  color: white; 
}




</style>
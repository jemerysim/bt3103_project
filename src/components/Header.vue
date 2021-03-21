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
      <div id='side' class="flexCol">
        <router-link id='button1' tag="button" to="/" exact>Login</router-link>
        <router-link id='button2' tag="button" to="/" exact>Sign Up</router-link>
      </div>
    </nav>
    
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {  
      }
    },
    methods: {
    }
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
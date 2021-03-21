<template>
  <div class="footer">
    <footer>
      <div class="subscribe">
      <form id="form">
        <label for="email">Receive monthly newsletters and exclusive promotions:</label><br>
        <input type="textArea" id="email"/><br>
        <input type="submit" value="Subscribe" id="submitBtn">
      </form><br>
      </div>
      <p id="AboutUs">About us    </p>
      <p id="Partnership">Partnership    </p>
      <p id="Terms">Terms of use    </p>
    </footer>
  </div>
</template>

<script>
  export default {
    methods: {
      displayMsg:function () {
        alert("You are subscribed to our website!");
      }
    }
  }
</script>

<style scoped>
  footer {
    background-color:#76C056;
    /*background-opacity:0.6;*/
    padding:5px;
    height: 200px;
    color: #000000;
    font-size: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    
  }
  #email, #submitBtn {
    display: inline-flex;
  }
  
  #submitBtn {
    background-color:grey;
    font-size: 20px;
    border-radius: 8px;
    padding: 7px 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #403939;
    border: none;
  }
  p {
    font-size: 10px;
    color: #000000;
    display: inline;
    margin: 50px;
  }
  #AboutUs {
    /* font-family:; */
    color: #000000;
  }
  #Partnership{
    /* font-family: ; */
    color: #000000;
  }
  #Terms {
    /* font-family: ; */
    color: #000000;
  }
</style>


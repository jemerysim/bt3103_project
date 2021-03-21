<template>
<!-- <div class="vue-logo-back">
        <img src="./assets/logo.png" width="100px" height="100px">
        <h1>EVINFO</h1>
    </div> -->
   <div class="float-container">

  <div class="float-child">
    <div class="green">Float Column 1</div>
  </div>
  
  <div class="float-child">
    <div class="blue">Float Column 2</div>
  </div>
  
</div>

</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style>
.float-container {
    border: 3px solid #fff;
    padding: 20px;
    background-color: #76C056;
}

.float-child {
    width: 50%;
    float: left;
    padding: 20px;
    border: 2px solid red;
}  
 </style>
<template>
  <div class="col-full">
    <h1 class="heading-title"> {{forums.Subject}}
    </h1>
  
      <a class="heading-user">Created by {{forums.User}}, on {{returnDate(forums.Timestamp)}} </a>

      <ul id="list-replies">   
        <li class='reply-li'>
          <a class="user">{{forums.User}}:</a>
          <a class="reply">{{forums.Message}}</a>
          <a class="reply-time">{{returnDate(forums.Timestamp)}}</a>
        </li>
        <li v-for="reply in forums.replies" v-bind:key='reply' class='reply-li'>
          <a class="user">{{reply.User}}:</a>
          <a class="reply">{{reply.Message}}</a>
          <a class="reply-time">{{returnDate(reply.Timestamp)}}</a> 
        </li>
      </ul>

      <form  class='reply-form'>
        <label>Got something to say? Write a reply: </label>
        <textarea rows="5" class="msg" placeholder="What do you want to say?"/>
        <br><br>
        <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import moment from 'moment'
  export default {
    components: {
    },
    methods: {
      returnDate: function(timestamp) {     
        let myDate = new Date(timestamp.seconds * 1000) // date object
        return moment(String(myDate)).format('llll')
      }
    },
    props: {
      forums: {
        required: true,
        type: Object
        },
      category: {
        required: true,
        type: String
      }
    },
    data(){
      return{
      }
    },
    
    }
</script>

<style scoped>
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 150px;
  background-color: darkcyan;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #45a049;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.heading-title {
  border-bottom-left-radius: 20px;
  color: #263959;
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}
.heading-user {
  border-bottom-left-radius: 20px;
  color: #263959;
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}
.reply-li {
  border-bottom-left-radius: 0px;
  font-weight: 100;
  display: flex;
  width: 100%;
  /* justify-content: flex-start; */
  position: relative;
  padding: 5px;
  border-bottom: 3px solid darkcyan;
  margin: 0;
}
.user {
  background-color: rgba(32, 178, 171, 0.185);
  padding: 10px 20px;
  margin-bottom: 50px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  color: rgb(36, 58, 41);
  font-weight: 100;
}
.reply {
  font-weight: 100;
  width: 100%;
  padding: 10px 20px;
  margin: 0;
}
.reply-form {
  font-weight: 100;
  width: 100%;
  padding: 50px 20px;
  margin: 0;
}
/* .reply-time { 
  padding: 10px 50px;
  margin: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
} */
</style>
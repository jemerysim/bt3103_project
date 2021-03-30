<template>
  <div class="col-full">
    <h1 class="heading-title"> {{forums.Subject}}
    </h1>
    
    
      <a class="heading-user">By {{forums.User}}, x years ago</a>
    
    

      <ul id="list-replies">   
        <li class='reply-li'>
          <a class="user">{{forums.User}}:</a>
          <a class="reply">{{forums.Message}}</a>
          <a class="reply-time">{{forums.Timestamp}}</a>
        </li>
        <li v-for="reply in forums.replies" v-bind:key='reply' class='reply-li'>
          <a class="user">{{reply.User}}:</a>
          <a class="reply">{{reply.Message}}</a>
          <a class="reply-time">{{forums.Timestamp}}</a> 
          <!-- edit the timestamp!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        </li>
      </ul>

      <!-- add in reply to forum text box -->
  </div>
</template>

<script>


  export default {
    components: {
      // ForumList
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

.reply-time { 
  margin: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
}

</style>

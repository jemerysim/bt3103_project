<template>
  <div class="col-full">
    <h1 class="heading-title"> {{forums.Subject}}
    </h1>
    
    
      <a>By {{forums.User}}, x years ago</a>
    
    

      <ul id="list-replies">   
    <!-- <li>
        {{  forums   }}
     </li> -->
     <li class='reply-li'>
        <a class="user">{{forums.User}}:</a>
        <a class="reply">{{forums.Message}}</a>
        <a class="reply-time">{{forums.Timestamp}}</a>
     </li>

     <li v-for="reply in forums.replies" v-bind:key='reply' class='reply-li'>
    
        <a class="user">{{reply.user}}:</a>
        <a class="reply">{{reply.text}}</a>
        <a class="reply-time">{{forums.Timestamp}}</a> 
        <!-- edit the timestamp!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
     </li>

      </ul>

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
.reply-li {
  border-bottom-left-radius: 20px;
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 50px;
  border-bottom: 5px solid darkcyan;
  margin: 0;
}

.user {
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 50px;
  box-shadow: 2px 2px 1px rgba(136, 136, 136, 0.09);
  display: flex;
  color: rgb(96, 168, 111);
  font-weight: 100;
}

.reply-time { 
  margin: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-end;
  /* display: inline-block; */
}

</style>

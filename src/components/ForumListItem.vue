<template>
  <div class="forum-listing">

    <div class="forum-details">
      <router-link
        class="text-xlarge"
        :to="{name:'Forum', params: {id: forum['.name']}}"
      >
        {{forum.name}}
      </router-link>

      <p>{{forum.description}}</p>
    </div>



  </div>
</template>

<script>
//   import {countObjectProperties} from '@/utils'

  export default {
    props: {
      forum: {
        required: true,
        type: Object
      }
    },
    computed: {
    //   threadsCound () {
    //     return countObjectProperties(this.forum.threads)
    //   }
    }
  }
</script>

<style scoped>

</style>

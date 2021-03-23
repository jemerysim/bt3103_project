<template>
  <div>
    <ForumListItem
      v-for="forum in forums"
      :forum="forum"
      :key="forum['.name']"
    />
  </div>
</template>

<script>
  import ForumListItem from '@/components/ForumListItem'

  export default {
    components: {
      ForumListItem
    },
    data() {
        return {
            forums: [
                {name: "Announcements", description: "Important announcements about the website."},
                {name: "Questions & Feedback", description: "Ask your questions and drop your feedback here"},
                {name: "asd", description: "asd"}
            ]
        };
    },
    // props: {
    //   forums: {
    //     required: true,
    //     type: Array
    //   }
    // }
  }
</script>

<style scoped>

</style>

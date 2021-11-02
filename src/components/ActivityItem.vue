<template>
  <div>
    <ActivityItemUpdate
      v-if="isUpdateActive"
      :activity="activity"
      :categories="categories"
      @toggleUpdate="changeUpdateState"
    />
    <ActivityItemDetail
      v-else
      :activity="activity"
      :categories="categories"
      @toggleUpdate="changeUpdateState"
    />
  </div>
</template>

<script>
import ActivityItemDetail from './ActivityItemDetail.vue'
import ActivityItemUpdate from './ActivityItemUpdate.vue'
export default {
  components: {
    ActivityItemDetail,
    ActivityItemUpdate
  },
  props: {
    activity: {
      required: true,
      type: Object
    },
    categories: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      isUpdateActive: false
    }
  },
  methods: {
    changeUpdateState(isUpdate) {
      this.isUpdateActive = isUpdate
    },
    handleActivityDelete(activity) {
      deleteActivityApi(activity).then(deletedActivity => {
        Vue.delete(this.activities, deletedActivity.id)
      })
    }
  }
}
</script>

<style scoped></style>

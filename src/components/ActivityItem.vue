<template>
  <article class="post">
    <h4 class="title">{{ activity.title }}</h4>
    <p>{{ textUtility_capitalize(categories[activity.category].text) }}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Cameron Moodley</a> updated
            {{ activity.updatedAt | prettyTime }} minutes ago &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>
          Progress:
          <span :class="activityProgress"> {{ activity.progress }}%</span>
        </span>
      </div>
    </div>
  </article>
</template>
<script>
import textUtility from '@/mixins/textUtility'
export default {
  mixins: [textUtility],
  props: {
    activity: {
      type: Object,
      required: true
    },
    categories: {
      type: Object,
      required: true
    }
  },
  computed: {
    activityProgress() {
      const progress = this.activity.progress
      if (progress <= 0) {
        return 'color-red'
      } else if (progress <= 50) {
        return 'color-orange'
      }
      return 'color-green'
    }
  }
}
</script>
<style lang="css">
.color-red {
  color: red;
}
.color-orange {
  color: orange;
}
.color-green {
  color: aquamarine;
}
.post .title {
  margin-bottom: 5px;
}
</style>

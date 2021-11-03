<template>
  <div v-if="isDataLoaded" id="activityApp">
    <Navbar :full-app-name="fullAppName" />
    <section class="container">
      <div class="columns">
        <!-- form goes here -->
        <ActivityCreate :categories="categories" />
        <div class="column is-9">
          <div
            class="box content"
            :class="{ fetching: isFetching, 'has-error': error }"
          >
            <div v-if="error">
              {{ error }}
            </div>

            <div v-else>
              <div v-if="isFetching">
                Loading ...
              </div>
              <ActivityItem
                v-for="activity in activities"
                :key="activity.id"
                :activity="activity"
                :categories="categories"
              />
              <div class="activity-length">
                Currently {{ activityLength }} activities
              </div>
              <div class="activity-motivation">{{ activityMotivation }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import store from './store'

import ActivityItem from '@/components/ActivityItem'
import ActivityCreate from '@/components/ActivityCreate'
import Navbar from '@/components/TheNavbar'

export default {
  name: 'App',
  components: { ActivityItem, ActivityCreate, Navbar },
  data() {
    const {
      state: { activities, categories }
    } = store
    return {
      isFormDisplayed: false,
      creator: 'Cameron Moodley',
      appName: 'Activity Planner',
      watchedAppName: 'Activity Planner by Cameron Moodley',
      isFetching: false,
      error: null,
      user: {},
      activities,
      categories
    }
  },
  computed: {
    fullAppName() {
      return `${this.appName} by ${this.creator}`
    },
    activityLength() {
      return Object.keys(this.activities).length
    },
    activityMotivation() {
      if (this.activityLength && this.activityLength < 5) {
        return 'Nice to see some activities (:'
      } else if (this.activityLength >= 5) {
        return 'So many activities'
      }
      return 'No activities so sad ):'
    },
    activitiesLenth() {
      return Object.keys(this.activities).length
    },
    categoriesLength() {
      return Object.keys(this.categories).length
    },
    isDataLoaded() {
      return this.activitiesLenth && this.categoriesLength
    }
  },
  created() {
    this.isFetching = true
    store
      .fetchActivities()
      .then(activities => {
        this.isFetching = false
      })
      .catch(error => {
        this.error = error
        this.isFetching = false
      })

    store.fetchCategories().then(categories => {})
    this.users = store.fetchUsers()
  }
}
</script>

<style>
#activityApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  font-family: 'Open Sans', serif;
  background: #f2f6fa;
}
footer {
  background-color: #f2f6fa !important;
}

.example-wrapper {
  margin-left: 30px;
}
.topNav {
  border-top: 5px solid #3498db;
}
.topNav .container {
  border-bottom: 1px solid #e6eaee;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}

.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}

.activity-length {
  float: right;
}

.activity-length {
  display: inline-block;
}

.select {
  background-color: #fff;
  border-color: #dbdbdb;
  color: #363636;
  box-shadow: inset 0 1px 2px rgb(10 10 10 10%);
  max-width: 100%;
  width: 100%;
}

.fetching {
  border: 2px solid orange;
}
.has-error {
  border: 2px solid red;
}
</style>

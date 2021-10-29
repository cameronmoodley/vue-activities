// Mixins can be helper functions
export default {
  data() {
    return {
      utilityName: 'text utility',
      creator: 'Cameron Moodley'
    }
  },
  computed: {
    fullName() {
      return `${this.creator}'s ${this.utilityName}`
    }
  },
  methods: {
    textUtility_capitalize(word) {
      if (word && typeof word === 'string') {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    }
  }
}

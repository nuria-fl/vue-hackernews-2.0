<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" v-on:click="toggle">Click event</button>
    <transition name="fade">
      <div v-if="showThis">
        Now you see me
      </div>
    </transition>
    <hr>
    <button type="button" v-on:click="increment">Increment</button>
    <p>State: {{count}}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
        msg: 'Hello world!',
        showThis: false
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    toggle () {
      return this.showThis = !this.showThis
    },
    ...mapMutations(['increment'])
  }
}
</script>

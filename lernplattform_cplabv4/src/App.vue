<template>
  <div class="container">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {Navbar}
}
</script>

<style scoped>
.container {
  margin-left: 15px;
}
</style>


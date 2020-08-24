<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <img class="apple" src="../assets/contact.png"/>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "../components/Footer"
export default {
  components: {
    foot,
  },
}
</script>

<style scoped>
.content-wrapper{
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.apple{
  width: 100%;
  height: 100%;
}
</style>
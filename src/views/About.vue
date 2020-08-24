<template>
  <div class="about">
    <div class="wrapper">
      <div class="header-wrapper">
        <div style="font-size:50px">About Us</div>
        <span style="margin:30px 0 0 0">
          Established in 2019.
          Gambol Games is a independent game studio from Istanbul. Our main goal is making high quality games.
        </span>
      </div>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from "../components/Footer";
export default {
  components: {
    foot
}
}
</script>

<style scoped>
.wrapper {
}
.header-wrapper {
  width: 100%;
  position: relative;
  height: 200px;
  background: rgb(112, 161, 192);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.middle-wrapper {
  position: relative;
}
.content {
  word-wrap: break-word;
  letter-spacing: 5px;
  font-weight: 300;
  font-size: 35px;
  text-align: start;
}
.apple {
  width: 800px;
  height: 400px;
  position: relative;
}
</style>
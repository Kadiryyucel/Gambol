<template>
  <div class="wrapper">
    <section>
    <div class="wrapper1">
      <div class="left">
        <a class="logo">
          <img class="mainİmg" src="../assets/logo.png" alt="Gambol" />
        </a>
        <div class="nav-inner">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/contact">Contact</router-link>
          <router-link class="nav-item" to="/about">About Us</router-link>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.wrapper1 {
  display: flex;
  background-color: #fff;
  padding: 30px 80px 30px 80px;
}
.mainİmg {
  width: 250px;
  height: 100px;
}
.content{
  width: 272px;
  height: 360px;
}
.nav-item {
  text-transform: uppercase;
  display: inline-block;
  margin: 0px 30px 0px 30px;
  transition: color 170ms ease-in-out, background-color 170ms ease-in-out;
  color:black;
  text-decoration: none;
}
.nav-item:hover {
  color: rgba(29, 29, 29, 0.4);
  cursor: pointer;
}
.nav-inner {
  letter-spacing: 0.23em;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.left {
  display: flex;
}
</style>
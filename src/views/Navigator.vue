<template>
  <div class="main">
    <navMenu></navMenu>
    <div class="main-box">
      <div style="flex:1;">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import navMenu from "./NavMenu.vue";
export default {
  components: {
    navMenu
  },
};
</script>
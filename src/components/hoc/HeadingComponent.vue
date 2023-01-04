<template>
  <div class="card-wrapper">
    <ImageComponent><slot name="image"></slot></ImageComponent>
    <div class="inner-wrapper">
      <div class="sub-inner-wrapper">
        <slot name="heading"></slot>
        <slot name="body"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ImageComponent from "./ImageComponent.vue";
export default {
  name: "HomeComponent",
  components: { ImageComponent },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}
.card-wapper {
  display: flex;
}
.sub-inner-wrapper {
  display: flex;
  align-items: center;
}
</style>

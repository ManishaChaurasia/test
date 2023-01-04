<template>
  <div class="main-wrapper">
    <HeadingComponent>
      <template #image><img src="../assets/head.png" alt="" /></template>
      <template #heading
        ><h1>Kenneth Allen</h1>
        <BadgeComponent>Request Accepted</BadgeComponent></template
      >

      <!-- <template #body><a href="#">Request Accepted</a></template> -->
      <DesignationComponent>
        <template #icon><img src="../assets/shape.png" /></template>
        <template #icon-location><img src="../assets/location.png" /></template>
        <template #location-name>Churchome</template>
      </DesignationComponent>
      <BadgeComponent>Programming and Software Development</BadgeComponent>
      <BadgeComponent>Business Information Management</BadgeComponent>
      <BadgeComponent>Business Finance</BadgeComponent>
    </HeadingComponent>

    <HeadingComponent>
      <template #image><img src="../assets/logo.png" alt="" /></template>
      <template #heading><h1>Kenneth Allen</h1></template>
      <template #body><a href="#">Request Accepted</a></template>
      <DesignationComponent>
        <template #icon><img src="../assets/shape.png" /></template>
        <template #icon-location><img src="../assets/location.png" /></template>
        <template #location-name>Churchome</template>
      </DesignationComponent>
      <BadgeComponent>Programming and Software Development</BadgeComponent>
      <BadgeComponent>Business Information Management</BadgeComponent>
      <BadgeComponent>Business Finance</BadgeComponent>
    </HeadingComponent>

    <HeadingComponent>
      <template #image><img src="../assets/head.png" alt="" /></template>
      <template #heading><h1>Kenneth Allen</h1></template>
      <template #body><a href="#">Request Acceptedt</a></template>
      <DesignationComponent>
        <template #icon><img src="../assets/shape.png" /></template>
        <template #icon-location><img src="../assets/location.png" /></template>
        <template #location-name>Churchome</template>
      </DesignationComponent>
      <BadgeComponent>Programming and Software Development</BadgeComponent>
      <BadgeComponent>Business Information Management</BadgeComponent>
      <BadgeComponent>Business Finance</BadgeComponent>
    </HeadingComponent>
    <UserComponent></UserComponent>
  </div>
</template>

<script>
import HeadingComponent from "./hoc/HeadingComponent.vue";
import DesignationComponent from "./hoc/DesignationComponent.vue";
import BadgeComponent from "./hoc/BadgeComponent.vue";
import UserComponent from "./hoc/UserComponent.vue";
export default {
  components: {
    HeadingComponent,
    DesignationComponent,
    BadgeComponent,
    UserComponent,
  },
};
</script>

<style scoped>
.card-wrapper {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}

.card-wrapper img {
  width: 200px;
}
.card-wrapper h1,
.card-wrapper p {
  margin-right: 30px;
  margin: 0;
}
.card-wrapper a {
  color: #027a48;
  padding: 5px;
  border-radius: 0.55rem;
  background: #ecfdf3;
  font-size: 12px;
  margin-left: 30px;
  text-decoration: none;
}

.sm-icon img {
  width: 30px;
}
.sm-icon {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.sm-icon img:last-child {
  margin-left: 30px;
}
</style>

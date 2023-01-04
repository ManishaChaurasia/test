<template>
  <h1>Get checkbox and Radio Button Value</h1>
  <h3>Technologies</h3>
  <label for="java">Java</label>
  <input type="checkbox" value="java" id="java" v-model="technology" />

  <label for="php">PHP</label>
  <input type="checkbox" value="php" id="php" v-model="technology" />

  <label for="vue">Vue</label>
  <input type="checkbox" value="vue" id="vue" v-model="technology" />
  <h4>Selected technology : {{ technology }}</h4>
  <h4>Who i am :{{ who }}</h4>

  <label for="student">Student</label>
  <input
    type="radio"
    value="student"
    name="selectanyone"
    v-model="who"
    id="student"
  />

  <label for="developer">Developer</label>
  <input
    type="radio"
    value="developer"
    name="selectanyone"
    v-model="who"
    id="developer"
  />
</template>

<script>
export default {
  data() {
    return {
      technology: [],
      who: null,
    };
  },
};
</script>

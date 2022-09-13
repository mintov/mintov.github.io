<script setup lang="ts">
  import Nav from "./components/Nav.vue";
  import Editor from "./components/Editor.vue";
</script>

<template>

    <Nav></Nav>
    <Editor></Editor>

</template>

<style scoped>
#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

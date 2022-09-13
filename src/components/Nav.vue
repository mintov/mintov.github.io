<script setup lang="ts">
import { reactive, ref } from 'vue'
const menuList = reactive([
    {
        id: 1,
        name: '设计',
    },
    {
        id: 2,
        name: '预览',
    },
    {
        id: 3,
        name: '代码',
    },
])
</script>
    
<template>
    <nav>
        <Button v-for="item in menuList" :key="item.id">{{item.name}}</Button>
    </nav>
</template>
    
<style scoped>
nav {
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
    
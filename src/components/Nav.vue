<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, useRoute, RouteRecordName } from 'vue-router';

const router = useRouter()
const route = useRoute()
const menuList = reactive([
    {
        id: 1,
        name: '设计',
        route: 'home'
    },
    {
        id: 2,
        name: '预览',
        route: 'full'
    },
    {
        id: 3,
        name: '代码',
        route: 'code'
    },
])
function goTo(r: string) {
    router.push({
        path: r,
        query: {},
    })

}
</script>
    
<template>
    <nav>
        <Button v-for="item in menuList" :key="item.id" @click="goTo(item.route)">{{item.name}}</Button>
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
    
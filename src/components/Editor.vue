<script setup lang="ts">

</script>
<template>
    <div class="containter">
        <div>组件库</div>
        <div class="canvas">画布</div>
        <div>组件属性和数据源</div>
    </div>
</template>
<style scoped>
.containter {
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.containter>div:first-child {
    width: 300px;
    border: 1px solid gray;
}

.canvas{
    flex: 1;
    border: 1px solid gray;
}

.containter>div:last-child {
    width: 300px;
    border: 1px solid gray;
}
</style>
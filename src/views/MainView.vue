<template>
    <div class="conteiner">
        <Sidebar></Sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import Sidebar from '../components/icons/Sidebar.vue'
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .content {
        flex: 1;
        padding: 20px;
    }
</style>
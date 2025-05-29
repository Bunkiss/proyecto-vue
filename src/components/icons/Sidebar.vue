<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <ul>
            <li>
                <router-link to="/contador">Contador</router-link>
            </li>
            <li>
                <router-link to="/lista-de-tareas">Lista de Tareas</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import router from '@/router';

</script>

<style>
    .sidebar {
        width: 200px;
        background-color: aquamarine;
        padding: 20px;
        color: black;
    }
</style>
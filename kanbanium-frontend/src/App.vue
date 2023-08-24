<script setup lang="ts">
import {RouterView } from 'vue-router'
import NavHeader from '../src/components/NavHeader.vue'
</script>

<template>
    <NavHeader/>
    <RouterView/>
</template>

<style>
body {
    width:fit-content;
}
</style>

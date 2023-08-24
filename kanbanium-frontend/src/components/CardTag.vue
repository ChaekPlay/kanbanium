<script setup lang="ts">
import * as contrast from "./contrast"
const props = defineProps(['name', 'color']);
const WHITE = "#FFFFFF";
const BLACK = "#000000";
let textColor = "black";
if (contrast.checkContrast(props.color, WHITE) > 5) {
    textColor = "white";
}
contrast.checkContrast(props.color, WHITE)
console.log(props);
</script>
<template>
    <p :style="{'background':color, 'color':textColor}">{{props.name}}</p>
</template>
<style scoped>
p {
    display: block;
    @apply border py-1 px-2 rounded;
}
</style>

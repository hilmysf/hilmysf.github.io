<script setup>
const props = defineProps({
    scrollProgress: {
        type: Number,
        default: 0
    }
})
</script>
<template>
    <div class="fixed top-0 left-0 h-1 bg-primary z-[9999] duration-300 delay-10"
        :style="{ width: scrollProgress + '%' }"></div>
</template>
<script setup>
const props = defineProps({
    src: String,
    title: String
})
</script>
<template>
    <div class="h-36 bg-gray-800 border-gray-500 border px-10 py-5
  rounded-xl flex justify-center flex-col items-center
  animate-scale">
        <img :src="props.src" width="64px" />
        <h1 class="text-lg mt-3">{{ props.title }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Text Button',
    },
})
const emit = defineEmits(["click"])
</script>
<template>
    <button @click="$emit('click')" class="text-primary bg-transparent animate-scale">
        {{ text }}
    </button>
</template>
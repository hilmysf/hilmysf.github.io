<script setup>
const prop = defineProps({
    text: { type: String, default: "Button" },
    href: { type: String, default: null },
    type: { type: String, default: "button" },
})
const emit = defineEmits(["click"])
</script>

<template>
    <component :type="type" :is="href ? 'a' : 'button'" :href="href || null" @click="$emit('click')" class="w-wr bg-primary text-surface px-4 py-3 rounded-full font-semibold
        animate-scale">
        {{ text }}
    </component>
</template>

<script setup>
const props = defineProps({
    text: { type: String, default: "Button" },
    href: { type: String, default: null },
})

const emit = defineEmits(["click"])
</script>

<template>
    <component :is="props.href ? 'a' : 'button'" :href="props.href || null" @click="emit('click')" class="
      border border-primary text-primary bg-transparent
      px-4 py-3 rounded-full font-semibold
      hover:shadow-lg
      animate-scale
    ">
        {{ props.text }}
    </component>
</template>

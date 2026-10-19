<script setup>
const props = defineProps({
    role: String,
    company: String,
    period: String,
    description: String,
    tech: Array
})
</script>

<template>
    <div
        class="w-full p-5 rounded-2xl bg-gray-800 border-gray-500 border shadow-sm hover:shadow-md color-border justify-start animate-scale">
        <div class="flex gap-1 justify-between items-center">
            <h3 class="font-semibold text-lg text-teal-50">{{ role }}</h3>
            <h2 class="mt-2 text-text-muted">
                {{ period }}
            </h2>
        </div>
        <h2 class="text-sm text-text text-left">{{ company }}</h2>
        <p class="mt-2 text-text-muted text-left">{{ description }}</p>
    </div>
</template>
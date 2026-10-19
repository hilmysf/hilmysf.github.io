<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'input',
    },
    placeholder: {
        type: String,
        default: 'Input',
    },
    required: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: null,
    },
    line: {
        type: Number,
        default: 1,
    },
    type: {
        type: String,
        default: 'text',
    }
})
</script>
<template>
    <label v-show="label != null" class="block text-primary font-bold text-left mb-0">{{ label }}</label>
    <textarea class="text-input" v-if="line > 1" :type="type" :rows="line" :name="name" :placeholder="placeholder"
        :required="required"></textarea>
    <input v-else="line" class="text-input" :name="name" :placeholder="placeholder" :required="required">
</template>

<style scoped>
.text-input {
    @apply w-full p-2 m-0 border border-primary bg-gray-700 rounded
}
</style>
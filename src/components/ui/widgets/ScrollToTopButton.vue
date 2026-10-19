<script setup>

import { ref, onMounted, onUnmounted, Transition } from 'vue'

const isTopButtonVisible = ref(false)

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
    isTopButtonVisible.value = window.scrollY > 300
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
    <Transition>
        <button v-show="isTopButtonVisible" @click="scrollToTop"
            class="fixed bg-primary bottom-4 right-6 border-gray-500 text-black rounded-full shadow-lg hover:scale-110 hover:text-black transition-transform transform duration-300">
            ↑
        </button>
    </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
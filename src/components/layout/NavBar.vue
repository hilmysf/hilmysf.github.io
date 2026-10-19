<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })
</script>
<template>
<header class="site-header"><div class="container nav-inner">
<router-link class="wordmark" to="/" aria-label="Hilmy home">hilmy<span>.</span></router-link>
<button class="menu-toggle" :aria-expanded="open" aria-controls="navigation" @click="open = !open">{{ open ? 'Close ×' : 'Menu ☰' }}</button>
<nav id="navigation" :class="{ open }" aria-label="Main navigation" @keydown.esc="open = false">
<router-link to="/projects">Work</router-link><router-link to="/experience">Experience</router-link><router-link to="/about">About</router-link><router-link to="/contact" class="nav-contact">Let’s talk <span>↗</span></router-link>
</nav></div></header>
</template>

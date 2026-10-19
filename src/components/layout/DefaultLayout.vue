<script setup lang="ts">
import { ref } from 'vue'
const main = ref<HTMLElement | null>(null)
function skipToContent() { main.value?.focus(); main.value?.scrollIntoView() }
import Footer from './Footer.vue'
import NavBar from './NavBar.vue'
</script>
<template><div class="site-shell"><a class="skip-link" href="#main" @click.prevent="skipToContent">Skip to content</a><NavBar /><main id="main" ref="main" tabindex="-1"><slot /></main><Footer /></div></template>

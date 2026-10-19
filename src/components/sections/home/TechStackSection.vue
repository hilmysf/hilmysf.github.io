<script setup lang="ts">
import { TECHNOLOGY_LIST } from '@/const/TechStackList'
defineProps({ showActionButton: Boolean })
</script>
<template><section class="container content-section tools-section"><div class="section-heading"><div><p class="eyebrow">03 / MY TOOLKIT</p><h2>The right tools.<br><em>A curious mindset.</em></h2></div><p class="section-intro">Native mobile at heart. Always exploring what’s next.</p></div><div class="technology-grid"><div v-for="tech in TECHNOLOGY_LIST" :key="tech.title"><img :src="tech.src" alt="" loading="lazy" /><span>{{ tech.title }}</span></div></div></section></template>

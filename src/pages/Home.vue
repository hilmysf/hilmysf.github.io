<script setup lang="ts">
import HeroSection from '@/components/sections/home/HeroSection.vue'
import ProjectsSection from '@/components/sections/home/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/home/ExperienceSection.vue'
import TechStackSection from '@/components/sections/home/TechStackSection.vue'
</script>
<template><HeroSection /><ProjectsSection show-action-button /><ExperienceSection show-action-button /><TechStackSection show-action-button /><section class="contact-banner container"><p class="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build something<br><em>worth using.</em></h2><router-link to="/contact" class="button button-dark">Start a conversation <span>↗</span></router-link></section></template>

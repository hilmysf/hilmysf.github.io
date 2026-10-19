<script setup lang="ts">
import cv from '@/assets/files/cv_hilmy.pdf'
</script>
<template><section class="container content-section"><div class="section-heading"><div><p class="eyebrow">EXPERIENCE & BACKGROUND</p><h1>My resume.</h1></div><a :href="cv" download class="button button-dark">Download PDF ↓</a></div><iframe class="resume-viewer" :src="cv" title="Hilmy Saeful Fatah resume"></iframe></section></template>

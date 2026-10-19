<script setup lang="ts">
import { EXPERIENCE_LIST } from '@/const/ExperienceList'
defineProps({ showActionButton: Boolean })
</script>
<template><section class="experience-section"><div class="container content-section"><div class="section-heading"><div><p class="eyebrow">02 / THE JOURNEY</p><h2>Learning by building.<br><em>Growing with every project.</em></h2></div><p class="section-intro">From cross-platform applications to native Android experiences. A journey of turning complex challenges into useful products.</p></div><div class="experience-row" v-for="(job, i) in EXPERIENCE_LIST" :key="job.company"><span class="experience-number">0{{ i + 1 }}</span><div><h3>{{ job.role }}</h3><p>{{ job.company }}</p></div><div class="experience-description"><p>{{ job.description }}</p><div class="tags"><span v-for="tech in job.tech" :key="tech">{{ tech }}</span></div></div><span class="experience-period">{{ job.period }}</span></div></div></section></template>

<script setup lang="ts">
import ProjectVisual from './ProjectVisual.vue'
import { PROJECT_LIST } from '@/const/ProjectList'
defineProps<{ project: (typeof PROJECT_LIST)[number] }>()
</script>
<template><router-link :to="'/project/' + project.id" class="project-card"><ProjectVisual :id="project.id" :title="project.title" /><div class="project-heading"><h3>{{ project.title }}</h3><span class="project-arrow">↗</span></div><p>{{ project.desc }}</p><div class="tags"><span v-for="tech in project.techs" :key="tech">{{ tech }}</span></div></router-link></template>

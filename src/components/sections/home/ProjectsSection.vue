<script setup lang="ts">
import { computed, ref } from 'vue'
import { PROJECT_LIST } from '../../../const/ProjectList.ts'
import ProjectCard from '../../ui/cards/ProjectCard.vue'
const props = defineProps({ showActionButton: { type: Boolean, default: false } })
const filter = ref('All projects')
const filters = ['All projects', 'Android', 'Flutter', 'Web']
const projects = computed(() => props.showActionButton ? PROJECT_LIST.slice(0, 4) : PROJECT_LIST.filter(p => filter.value === 'All projects' || p.techs.includes(filter.value === 'Web' ? 'Vue.js' : filter.value)))
</script>
<template><section class="content-section container"><div class="section-heading"><div><p class="eyebrow">01 / SELECTED WORK</p><h2>Ideas turned into<br><em>everyday impact.</em></h2></div><router-link v-if="showActionButton" to="/projects" class="text-link">All projects <span>↗</span></router-link><p v-else class="section-intro">A selection of mobile and web projects, built with care for the people who use them.</p></div><div v-if="!showActionButton" class="filter-row" aria-label="Filter projects"><button v-for="item in filters" :key="item" :class="{ active: filter === item }" :aria-pressed="filter === item" @click="filter = item">{{ item }}</button></div><div class="project-grid"><ProjectCard v-for="project in projects" :key="project.id" :project="project" /></div></section></template>

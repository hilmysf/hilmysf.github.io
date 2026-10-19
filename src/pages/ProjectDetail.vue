<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PROJECT_SCREENSHOTS } from '@/const/ProjectScreenshots'
import { PROJECT_LIST } from '@/const/ProjectList'
import ProjectVisual from '@/components/ui/cards/ProjectVisual.vue'
const route = useRoute()
const screenshot = computed(() => PROJECT_SCREENSHOTS[String(route.params.id)])
const project = computed(() => PROJECT_LIST.find(p => p.id === route.params.id))
</script>
<template><section class="container content-section detail-page"><router-link to="/projects" class="text-link">← All projects</router-link><template v-if="project"><p class="eyebrow detail-eyebrow">{{ project.type }} PROJECT</p><h1>{{ project.title }}</h1><p class="large-copy">{{ project.desc }}</p><div class="tags"><span v-for="tech in project.techs" :key="tech">{{ tech }}</span></div><ProjectVisual :id="project.id" :title="project.title" /><div v-if="screenshot" class="screenshot-note"><p class="form-note">{{ screenshot.redacted ? 'App screenshot edited to blur identifying details.' : 'Project screenshot.' }}</p><a :href="screenshot.src" target="_blank" rel="noopener noreferrer" class="text-link">View full-size screenshot ↗</a></div><p v-else class="form-note">Concept illustration; not an actual application screenshot.</p><div class="detail-information"><div><h2>About the project</h2><p>{{ project.desc }}</p><template v-if="project.features.length"><h3>Key features</h3><ul><li v-for="feature in project.features" :key="feature">{{ feature }}</li></ul></template></div><aside><h3>Project information</h3><div class="tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div><a v-if="project.sourceCode" :href="project.sourceCode" target="_blank" rel="noopener noreferrer" class="text-link">View source on GitHub ↗</a><p v-else>Source code is private.</p></aside></div></template><div v-else class="empty-state"><h1>Project not found.</h1><p>This project isn’t in the portfolio. Explore the project collection instead.</p></div></section></template>

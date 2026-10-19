<script setup lang="ts">
import { computed } from 'vue'
import { PROJECT_SCREENSHOTS } from '@/const/ProjectScreenshots'
const props = defineProps<{ id: string; title: string }>()
const screenshot = computed(() => PROJECT_SCREENSHOTS[props.id])
</script>
<template>
  <div v-if="screenshot" class="project-visual screenshot-visual" :class="['visual-' + id, { 'website-screenshot': id === 'portofolio' }]">
    <img :src="screenshot.src" :alt="screenshot.alt" loading="lazy" class="project-screenshot" />
  </div>
  <div v-else class="project-visual" :class="'visual-' + id" aria-hidden="true"><div class="visual-grid"></div><span class="visual-overline">{{ id === 'portofolio' ? 'PERSONAL WEBSITE' : 'MOBILE APPLICATION' }}</span><div v-if="id === 'portofolio'" class="browser-art"><div class="browser-bar">● ● ● <span>hilmysf / portfolio</span></div><div class="browser-body"><b>Thoughtful code.<br><em>Meaningful experiences.</em></b><span>DESIGN. DEVELOP. REFINE.</span></div></div><div v-else class="phone-art"><div class="phone-camera"></div><div class="phone-header">{{ title }} <span>◉</span></div><div class="phone-greeting">{{ id === 'ipubers-online' ? 'Melayani petani,' : id === 'rekan-kios' ? 'Usaha tumbuh,' : 'A better journey,' }}<br><b>{{ id === 'ipubers-online' ? 'membangun negeri.' : id === 'rekan-kios' ? 'bersama.' : 'starts here.' }}</b></div><div class="phone-banner"><span>✳</span><div>{{ id === 'ipubers-online' ? 'Untuk pertanian Indonesia' : id === 'rekan-kios' ? 'Kelola toko lebih mudah' : 'Move forward, together' }}</div></div><div class="phone-tiles"><span>▦<small>Explore</small></span><span>◈<small>Activity</small></span><span>▤<small>History</small></span></div><div class="phone-line"></div><div class="phone-line short"></div><div class="phone-bottom">⌂ <span>▦</span> ◯</div></div><span class="visual-caption">{{ title }} <span>↗</span></span><span class="concept-label">ILLUSTRATIVE PREVIEW</span></div></template>

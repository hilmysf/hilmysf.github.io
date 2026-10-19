<script setup>
import { ref, onMounted } from 'vue'

const fireflies = ref([]);
let isMobile = ref(window.innerWidth <= 640)

onMounted(() => {
    isMobile = window.innerWidth <= 640
    const fireflyCount = isMobile ? 10 : 30
    // Generate 30 fireflies dengan posisi & timing random
    for (let i = 0; i < fireflyCount; i++) {
        fireflies.value.push({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 4 + Math.random() * 6,
            size: 2 + Math.random() * 2
        });
    }
});
</script>
<template>
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
        <div v-for="fly in fireflies" :key="fly.id" class="firefly" :style="{
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
            animationDelay: `${fly.delay}s`,
            animationDuration: `${fly.duration}s`
        }">
        </div>
    </div>
</template>

<style scoped>
.firefly {
    position: absolute;
    background: #F8E71C;
    border-radius: 50%;
    filter: blur(1px);
    box-shadow:
        0 0 10px #F8E71C,
        0 0 20px #F8E71C;
    animation:
        fly 8s infinite ease-in-out,
        blink 3s infinite ease-in-out;
}

@keyframes fly {
    0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        transform: translate(100px, -200px) rotate(360deg);
        opacity: 0;
    }
}

@keyframes blink {

    0%,
    100% {
        opacity: 0.2;
        box-shadow:
            0 0 5px #F8E71C;
    }

    50% {
        opacity: 1;
        box-shadow:
            0 0 20px #F8E71C,
            0 0 40px #F8E71C,
            0 0 60px rgba(248, 231, 28, 0.5);
    }
}
@media (max-width: 640px) {
  .firefly {
    filter: none; /* Hapus blur */
    box-shadow: 0 0 5px #F8E71C; /* Shadow minimal */
  }
}
</style>
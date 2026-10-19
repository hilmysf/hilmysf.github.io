<script setup>
import { computed } from "vue";

const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    autoplay: { type: Boolean, default: true },
    loop: { type: Boolean, default: true },
});

const isVideo = computed(() =>
    props.src.endsWith(".mp4") ||
    props.src.endsWith(".webm") ||
    props.src.endsWith(".ogg")
);

const isImage = computed(() =>
    props.src.endsWith(".jpg") ||
    props.src.endsWith(".jpeg") ||
    props.src.endsWith(".png") ||
    props.src.endsWith(".gif") ||
    props.src.endsWith(".webp")
);
</script>

<template>
    <div class="cursor-pointer">
        <!-- Image -->
        <img v-if="isImage" :src="src" :alt="alt" class="rounded-lg object-contain w-full h-auto" />

        <!-- Video -->
        <video v-else-if="isVideo" :src="src" class="rounded-lg object-contain w-full h-auto" :autoplay="autoplay"
            :loop="loop" muted playsinline controls></video>

        <!-- Fallback -->
        <p v-else>Unsupported media format</p>
    </div>
</template>

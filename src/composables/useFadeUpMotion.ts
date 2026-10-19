import { useMotion } from '@vueuse/motion'
import {useIntersectionObserver} from '@vueuse/core'
import type { Ref } from 'vue'

export const useFadeUpMotion = (el: Ref, options = {}, contextName = 'default') => {
  const { initial, enter, duration = 500, delay = 200 } = {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0, scale: 1 },
    ...options,
  }

  // Motion hanya menampilkan sekali
  const motion = useMotion(el, {
    initial,
    visibleOnce: {
      ...enter,
      transition: { duration, delay }
    },
  })

  let hasTriggered = false

  // Trigger hanya saat muncul di viewport dan belum di-trigger
  useIntersectionObserver(el, ([entry]) => {
    if (entry.isIntersecting && !hasTriggered) {
      motion.apply('visibleOnce')
      hasTriggered = true
    }
  },
  {
    threshold: 0.1,
  }
)

  return motion
}

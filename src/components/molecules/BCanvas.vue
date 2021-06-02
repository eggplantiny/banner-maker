<template>
  <canvas
    ref="canvas"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed} from 'vue'
export default defineComponent({
  name: 'BCanvas',
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 300
    }
  },
  setup () {
    const canvas = ref<HTMLCanvasElement>(null)
    const ctx: CanvasRenderingContext2D = computed(() => canvas.value.getContext('2d'))``

    return {
      canvas,
      ctx
    }
  }
})
</script>

<style scoped>

</style>

<template>
  <div
    class="flex flex-col h-screen overflow-hidden font-sans antialiased text-white bg-indigo-800"
  >
    <section
      class="md:container"
    >
      <div class="font-bold">
        <pre>
{{ result }}
        </pre>
      </div>
      <div>
        <p>{{ hex }}</p>
        <p>
          <b-canvas />
        </p>
      </div>
      <div>
        <ele-color-picker
          v-model:color="colors"
          class="mx-auto"
        />
      </div>
      <canvas
        ref="canvas"
        class="mx-auto"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { EleColorPicker } from 'vue3-colorpicker'
import BSwitch from '@/components/atoms/BSwitch.vue'
import BCanvas from '@/components/molecules/BCanvas.vue'

export default {
  name: 'Home',
  components: {
    BCanvas,
    BSwitch,
    EleColorPicker
  },
  setup () {
    const colors = ref({
      hex: '#194d33'
    })

    // const result = computed(() => JSON.stringify(colors.value, null, 2))
    const result = computed(() => JSON.stringify(colors.value, null, 2))
    const hex = computed(() => colors.value.hex)

    return {
      colors,
      result,
      hex
    }
  }
}
</script>

<style scoped lang="scss">
</style>

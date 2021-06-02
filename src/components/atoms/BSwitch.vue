<template>
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-gray-900' : 'bg-gray-700'"
    class="relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  >
    <span class="sr-only">Enable notifications</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block w-4 h-4 transform bg-white rounded-full ring-0 transition ease-in-out duration-200"
    />
  </Switch>
</template>

<script>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

export default {
  name: 'BSwitch',
  components: { Switch },
  setup() {
    const enabled = ref(false)

    return { enabled }
  },
}
</script>

<style scoped>

</style>

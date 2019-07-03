<template>
  <div class="flex h-screen">
    <div class="w-1/5 bg-gray-400">
      sidebar
    </div>

    <div class="flex-grow">
      <div class="container mx-auto px-4">
        <Keyboard />
      </div>
    </div>
  </div>
</template>

<script>
import Keyboard from '~/components/Keyboard'

export default {
  components: {
    Keyboard
  }
}
</script>

<style lang="postcss" scoped>

</style>

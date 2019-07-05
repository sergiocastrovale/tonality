<template>
  <div class="flex h-screen">
    <div class="w-1/5 bg-gray-400">
      sidebar
    </div>

    <div class="flex-grow">
      <div class="container mx-auto px-4">
        <Keyboard @played="addPlayedKey" />

        <Score :notes="notes" />
      </div>
    </div>
  </div>
</template>

<script>
import Keyboard from '~/components/Keyboard'
import Score from '~/components/Score'

export default {
  components: {
    Keyboard,
    Score
  },
  data: () => ({
    notes: []
  }),
  methods: {
    addPlayedKey (key) {
      if (!this.notes.find(n => n.label === key.label)) {
        this.notes.push(key)
      }
    }
  }
}
</script>


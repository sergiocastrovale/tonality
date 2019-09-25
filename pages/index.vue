<template>

    <div class="container mx-auto px-4">
      <Keyboard @played="addPlayedKey" />

      <Score :notes="notes" />
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


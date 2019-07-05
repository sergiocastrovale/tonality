<template>
  <div>
    <div ref="score"></div>
  </div>
</template>

<script>
let Vex = null

if (process.client) {
  Vex = require('vexflow')
}

export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    canvasWidth: {
      type: Number,
      required: false,
      default: 500
    },
    canvasHeight: {
      type: Number,
      required: false,
      default: 150
    }
  },
  data: () => ({
    context: null
  }),
  computed: {
    mappedNotes () {
      if (Vex && this.notes && this.notes.length) {
        const { StaveNote } = Vex.Flow

        // List of StaveNote objects (independent quarter notes)
        const notes = this.notes.map(n => {
          const position = n.note.toLowerCase() + '/' + n.index
          return new StaveNote({ keys: [position], duration: 'q' })
        })

        return notes
      }

      return null
    }
  },
  watch: {
    mappedNotes: {
      handler: function(notes) {
        if (notes && notes.length) {
          this.updateCanvas()
        }
      },
      deep: true
    }
  },
  mounted () {
    this.initSVG()
  },
  methods: {
    initSVG () {
      const { Renderer } = Vex.Flow
      const renderer = new Renderer(this.$refs.score, Renderer.Backends.SVG)
      renderer.resize(this.canvasWidth, this.canvasHeight)

      this.context = renderer.getContext()
    },
    updateCanvas () {
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

      const { Formatter, Stave } = Vex.Flow
      const stave = new Stave(0, 0, this.canvasWidth)

      stave.addClef('treble').setContext(this.context).draw()

      Formatter.FormatAndDraw(
        this.context,
        stave,
        this.mappedNotes
      )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

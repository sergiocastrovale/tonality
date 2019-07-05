<template>
  <div class="keyboard-wrapper">
    <div class="keyboard">
      <div
        v-for="(key, i) in keys"
        :key="i"
        class="key"
        :class="[key.color, 'key-' + i, { 'playing' : playing === (key.note + key.index) }]"
        @click.stop="play(key)"
      >
        {{ key.label }}
      </div>
    </div>
  </div>
</template>

<script>
import Soundfont from 'soundfont-player'

export default {
  data: () => ({
    instrument: null,
    ac: null,
    keys: [
      { color: 'white', index: 4, label: 'C', note: 'C', frequency: 60 },
      { color: 'black', index: 4, label: 'D♭', note: 'Db', frequency: 61 },
      { color: 'white', index: 4, label: 'D', note: 'D', frequency: 62 },
      { color: 'black', index: 4, label: 'E♭', note: 'Eb', frequency: 63 },
      { color: 'white', index: 4, label: 'E', note: 'E', frequency: 64 },
      { color: 'white', index: 4, label: 'F', note: 'F', frequency: 65 },
      { color: 'black', index: 4, label: 'G♭', note: 'Gb', frequency: 66 },
      { color: 'white', index: 4, label: 'G', note: 'G', frequency: 67 },
      { color: 'black', index: 4, label: 'A♭', note: 'Ab', frequency: 68 },
      { color: 'white', index: 4, label: 'A', note: 'A', frequency: 69 },
      { color: 'black', index: 4, label: 'B♭', note: 'Bb', frequency: 70 },
      { color: 'white', index: 4, label: 'B', note: 'B', frequency: 71 },
      { color: 'white', index: 5, label: 'C', note: 'C', frequency: 72 },
      { color: 'black', index: 5, label: 'D♭', note: 'Db', frequency: 73 },
      { color: 'white', index: 5, label: 'D', note: 'D', frequency: 74 },
      { color: 'black', index: 5, label: 'E♭', note: 'Eb', frequency: 75 },
      { color: 'white', index: 5, label: 'E', note: 'E', frequency: 76 },
      { color: 'white', index: 5, label: 'F', note: 'F', frequency: 77 },
      { color: 'black', index: 5, label: 'G♭', note: 'Gb', frequency: 78 },
      { color: 'white', index: 5, label: 'G', note: 'G', frequency: 79 },
      { color: 'black', index: 5, label: 'A♭', note: 'Ab', frequency: 80 },
      { color: 'white', index: 5, label: 'A', note: 'A', frequency: 81 },
      { color: 'black', index: 5, label: 'B♭', note: 'Bb', frequency: 82 },
      { color: 'white', index: 5, label: 'B', note: 'B', frequency: 83 },
      { color: 'white', index: 6, label: 'C', note: 'C', frequency: 84 }
    ],
    playing: '',
    playerTimer: null,
    noteDuration: 300
  }),
  mounted () {
    this.setAudio()
    this.setInstrument()
  },
  methods: {
    play (key) {
      if (this.instrument && this.ac) {
        this.$emit('played', key)

        clearTimeout(this.playerTimer)

        this.playing = key.note + key.index
        this.instrument.play(key.frequency)

        this.playerTimer = setTimeout(() => {
          this.instrument.stop(this.ac.currentTime)
          this.playing = ''
        }, this.noteDuration)
      } else {
        console.error('No instrument available!')
      }
    },
    setAudio () {
      const AudioContext = window.AudioContext || false
      this.ac = new AudioContext
    },
    async setInstrument (instrument = 'acoustic_grand_piano') {
      this.instrument = await Soundfont.instrument(this.ac, `https://raw.githubusercontent.com/sergiocastrovale/midi-js-soundfonts/gh-pages/MusyngKite/${instrument}-mp3.js`)
    }
  }
}
</script>

<style lang="scss" scoped>
.keyboard-wrapper {
  @apply p-2 my-5 bg-gray-300 rounded;
}

.keyboard {
  height: 160px;
  @apply flex relative;
}

.key {
  @apply flex flex-grow items-end content-center text-center rounded-sm border-gray-900 cursor-pointer;
}

.white {
  @apply bg-yellow-100 border-gray-900 shadow;

  &.playing {
    @apply bg-yellow-300 bg-yellow-200;
    transform: translate(0, 2px);
  }
}

.black {
  @apply absolute w-8 z-10 bg-gray-900 text-white;
  height: 70%;
  margin-left: -1.4%;

  &.playing {
    @apply bg-gray-800;
    transform: translate(0, 2px);
  }

  &.key-1 {
    left: 6.7%;
  }

  &.key-3 {
    left: 13.3%;
  }

  &.key-6 {
    left: 26.7%;
  }

  &.key-8 {
    left: 33.4%;
  }

  &.key-10 {
    left: 40%;
  }

  &.key-13 {
    left: 53.3%;

    @media (max-width: 600px) {
      left: 11%;
    }
  }

  &.key-15 {
    left: 60%;

    @media (max-width: 600px) {
      left: 23%;
    }
  }

  &.key-18 {
    left: 73.3%;

    @media (max-width: 600px) {
      left: 48.5%;
    }
  }

  &.key-20 {
    left: 80%;

    @media (max-width: 600px) {
      left: 61%;
    }
  }

  &.key-22 {
    left: 86.7%;

    @media (max-width: 600px) {
      left: 73%;
    }
  }
}
</style>

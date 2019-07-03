<template>
  <div class="keyboard-wrapper">
    <div class="keyboard">
      <div
        v-for="(key, i) in keys"
        :key="i"
        class="key"
        :class="[key.color, 'key-' + i, { 'playing' : playing === key.note }]"
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
      { color: 'white', label: 'C', note: 'c4', frequency: 60 },
      { color: 'black', label: 'D♭', note: 'db4', frequency: 61 },
      { color: 'white', label: 'D', note: 'd4', frequency: 62 },
      { color: 'black', label: 'E♭', note: 'eb4', frequency: 63 },
      { color: 'white', label: 'E', note: 'e4', frequency: 64 },
      { color: 'white', label: 'F', note: 'f4', frequency: 65 },
      { color: 'black', label: 'G♭', note: 'gb4', frequency: 66 },
      { color: 'white', label: 'G', note: 'g4', frequency: 67 },
      { color: 'black', label: 'A♭', note: 'ab4', frequency: 68 },
      { color: 'white', label: 'A', note: 'a4', frequency: 69 },
      { color: 'black', label: 'B♭', note: 'bb4', frequency: 70 },
      { color: 'white', label: 'B', note: 'b4', frequency: 71 },
      { color: 'white', label: 'C', note: 'c5', frequency: 72 },
      { color: 'black', label: 'D♭', note: 'db5', frequency: 73 },
      { color: 'white', label: 'D', note: 'd5', frequency: 74 },
      { color: 'black', label: 'E♭', note: 'eb5', frequency: 75 },
      { color: 'white', label: 'E', note: 'e5', frequency: 76 },
      { color: 'white', label: 'F', note: 'f5', frequency: 77 },
      { color: 'black', label: 'G♭', note: 'gb5', frequency: 78 },
      { color: 'white', label: 'G', note: 'g5', frequency: 79 },
      { color: 'black', label: 'A♭', note: 'ab5', frequency: 80 },
      { color: 'white', label: 'A', note: 'a5', frequency: 81 },
      { color: 'black', label: 'B♭', note: 'bb5', frequency: 82 },
      { color: 'white', label: 'B', note: 'b5', frequency: 83 },
      { color: 'white', label: 'C', note: 'c6', frequency: 84 }
    ],
    playing: '',
    playerTimer: null,
    noteDuration: 750
  }),
  mounted () {
    this.setAudio()
    this.setInstrument()
  },
  methods: {
    play (key) {
      if (this.instrument && this.ac) {
        clearTimeout(this.playerTimer)

        this.$emit('played', key)
        this.playing = key.note
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
      const AudioContext = window.AudioContext || window.webkitAudioContext || false
      this.ac = new AudioContext || new webkitAudioContext
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

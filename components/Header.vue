<template>
  <nav class="flex lg:flex-col items-center justify-between flex-wrap bg-gray-500 p-6">
    <div class="flex items-center flex-shrink-0 text-gray-200">
      <nuxt-link 
        :to="{ name: 'index' }" 
        class="font-semibold text-2xl tracking-tight"
      >
        Tonality
      </nuxt-link>
    </div>
    <div class="block lg:hidden" @click.stop="toggleIsHidden">
      <button class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white focus:outline-none">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{ hidden: isHidden }">
      <div class="links lg:flex-grow">
        <nuxt-link 
          :to="{ name: 'index' }" 
          class="block mt-4 lg:inline-block lg:mt-3 text-gray-200 hover:text-white mr-4"
        >
          Keyboard
        </nuxt-link>
        <nuxt-link 
          :to="{ name: 'about' }" 
          class="block mt-4 lg:inline-block lg:mt-3 lg:mr-0 text-gray-200 hover:text-white mr-4"
        >
          About
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isHidden: true
  }),
    methods: {
    toggleIsHidden () {
      this.isHidden = !this.isHidden
    }
  },
}
</script>

<style lang="scss" scoped>
.links {
  .nuxt-link-exact-active {
    @apply text-white;
    @apply font-semibold;
  }
}
</style>
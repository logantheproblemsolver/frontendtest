<script setup>
import { clickedSquare } from '@/stores/square'

// access the `store` variable anywhere in the component ✨
const clickSquaresStore = clickedSquare()
</script>
<script>
export default {
  data() { 
    return {
      isActive: false,
    }
},
  props: {
    squareName: String,
    background: String,
    letter: String,
    number: Number,
  },
  methods: {
    chessSquareClick() {
      this.isActive = true
    }
  }
}
</script>
<template>
  <button @click="() => { clickSquaresStore.addClickedSquare(squareName), chessSquareClick() }" class="chessSquare" :class="[background, { active: isActive }]">
    <!-- {{ this.letter ? <span>{{ letter }</span> : null }} -->
    <span class="chessSquare-numbers">{{ number }}</span>
    <span class="chessSquare-letters">{{ letter }}</span>
  </button>
</template>
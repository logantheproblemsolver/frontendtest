
<script setup>
import ChessSquare from '@/components/ChessSquare.vue';
</script>

<script>
import chessSquareData from '../assets/data/chessSquareInformation.json'
export default {
  data() {
    return {
      chessSquareInfo: chessSquareData
    }
  }
}
</script>
<template>
  <div id="chessBoard">
    <div v-for="item in chessSquareInfo" :key="item.name" class="chessBoardSquareDiv">
      <ChessSquare :squareName="item.name" :background="item.color + '-square'" :letter="item.letter" :number="item.number" />
    </div>
  </div>
</template>
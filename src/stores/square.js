import { defineStore } from 'pinia'

export const clickedSquare = defineStore('clickedSquare', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      clickedSquares: [],
    }
  },
  actions: {
    addClickedSquare(square) {
      this.clickedSquares.push(square)
    }
  }

})

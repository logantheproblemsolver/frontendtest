<script setup>
import closeSidebarSvg from '@/assets/img/close-sidebar.svg'
import xMarkSvg from '@/assets/img/x.svg'
import { clickedSquare } from '@/stores/square'

// access the `store` variable anywhere in the component ✨
const store = clickedSquare()
</script>

<script>
export default {
  props: {
    openSidebar: Boolean,
    method: { type: Function },
  },
  methods: {
    toggleSidebarParentFunction() {
      this.$emit('onToggle')
    },
    resetActiveClasses() {
      let activeClasses = document.querySelectorAll('.active');
      for (let i = 0; i < activeClasses.length; i++) {
        activeClasses[i].classList.remove('active');
      }
    },
  }
  // created() {
  //   this.$emit('created');
  // }
}
</script>

<template>
  <div>
    <button @click="toggleSidebarParentFunction" id="closeSidebarSvgButton">
      <img :src='closeSidebarSvg' alt="arrow to close menu" id="closeSidebarSvg" width="25" height="25" />
    </button>
    
    <button @click="toggleSidebarParentFunction" id="xMarkSvgButton">
      <img :src='xMarkSvg' alt="x mark to close menu" id="xMarkSvg" width="25" height="25" />
    </button>

    Check to see which squares you've clicked!
    <button @click="() => {store.$reset(), resetActiveClasses()}">Reset The Squares</button>
    <ol>
      <li v-for="square, index in store.clickedSquares" :key="index">
        <span>{{ square }}</span>
      </li>
    </ol>
  </div>
</template>
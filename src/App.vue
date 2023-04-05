<script setup>
import { RouterLink, RouterView } from 'vue-router'
import openSidebarSvg from '@/assets/img/open-sidebar.svg'
import hamburgerMenuSvg from '@/assets/img/hamburger-menu.svg'
import Sidebar from '@/components/Sidebar.vue'
</script>

<script>
export default {
  data() {
    return {
      openSidebar: false
    }
  },

  // `mounted` is a lifecycle hook which we will explain later
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar
    }
  }
}
</script>
<template>
  <button @click="toggleSidebar" id="toggleHamburgerButton" :class="[openSidebar ? 'sidebar-buttons-active' : 'toggleHamburgerButton']">
    <img :src='hamburgerMenuSvg' id="openSidebar" height="25" width="25" />
  </button>
  <RouterView />
  <button @click="toggleSidebar" id="toggleSidebarButton" :class="[openSidebar ? 'sidebar-buttons-active' : 'toggleSidebarButton']">
    <img :src='openSidebarSvg' id="openSidebar" height="25" width="25" />
  </button>
  <Sidebar :openSidebar="openSidebar" :class="[openSidebar ? 'sidebar-window-active' : 'sidebar-window']" @onToggle="toggleSidebar" />
</template>



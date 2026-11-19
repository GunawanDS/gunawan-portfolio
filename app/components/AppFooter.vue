<script setup lang="ts">
const { setSection } = useNavigationState()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <button
        type="button"
        class="footer-brand"
        @click="setSection('home')"
      >
        GUNAWAN DZAKWAN SHOLEH
      </button>

      <p class="footer-copyright">
        © {{ new Date().getFullYear() }} Gunawan Dzakwan Sholeh
      </p>
    </div>
  </footer>
</template>

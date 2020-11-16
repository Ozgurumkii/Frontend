<template>
  <div v-if="!$route.meta.signInLayout && !$route.meta.signUpLayout" class="container">
    <Navigation />
    <router-view/>
    <!-- footer -->
  </div>
  <div v-if="$route.meta.signInLayout || $route.meta.signUpLayout">
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

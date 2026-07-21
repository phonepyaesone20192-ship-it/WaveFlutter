  <script setup>
  import Header from '@/components/header.vue'
  import Final from '@/components/final.vue'
  </script>

  <template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap" rel="stylesheet">
  <div id="app">
    <Header v-if="!$route.meta.hideLayout" />

    <router-view />

    <Final v-if="!$route.meta.hideLayout" />
  </div>
  </template>
<template>
  <div class="container encode-page">
    <h1>Massage for baby</h1>
    <Preloader v-if="loading" />
  </div>
</template>

<script>
/* eslint-disable */

import Preloader from "../components/Preloader"


export default {
  name: 'encode',
  components: { Preloader },
  metaInfo: {
    title: 'Massage',
    titleTemplate: '%s | For Baby',
  },
  data () {
    return {
      loading: false,
    }
  },
}
</script>

<style lang="scss">
  @import '../sass/main.scss';
  @import '../sass/colors';
  @import '../sass/animations';


</style>

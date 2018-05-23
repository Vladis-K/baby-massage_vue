<template>
  <div id="app">
    <div class="header-outer">
      <div class="container">
        <p>MASSAGE FOR BABY WILL APPEARS SOON</p>
        <div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import image from "./assets/logo.png"
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      Footer,
    },
    metaInfo: {
    },
    data () {
      return {
        activeIndex: '1',
        isToggled: false,
        image
      }
    },
    computed: {
      ...mapGetters('i18n', ['locale'])
    },
    watch: {
      locale () {
        this.$i18n.locale = this.locale
      }
    },
    methods: {
      ...mapActions('i18n', ['setLang']),
      toggleMenu () {
        this.isToggled = !this.isToggled
      }
    },
    created () {
      this.$i18n.locale = this.locale
    }
  }
</script>

<style lang="scss">
@import 'sass/main.scss';
@import 'sass/colors';
@import 'sass/animations';

#app {
  header {
    display: flex;
    justify-content: space-between;
    background-color: $colorGreyLight;
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > img {
        width: 100px;
      }
    }
  }
}
</style>
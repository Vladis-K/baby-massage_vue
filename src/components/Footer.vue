<template>
  <footer>
    <div class=" container footer__description">
      <div class="footer__description_rights">&copy 2018 All rights reserved.</div>
      <div class="footer__description_email"><a href="">Contact us</a></div>
      <div class="footer__description_right"><a href="">Tel.</a></div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'b-64__footer',
  }
</script>

<style lang="scss">
@import '../sass/main.scss';

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  background: rgb(104, 90, 253);
  background: linear-gradient(90deg, rgb(103, 205, 253) 0%, rgb(123, 138, 254) 100%);
  z-index: 2;

  @include nunitoRegular;
}
  .footer {
    &__description {

      color: transparentize($colorInputPrimary, .3);
      text-align: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
      a {
        color: transparentize($colorInputPrimary, .3);
        text-decoration: none;
      }
    }
  }
</style>

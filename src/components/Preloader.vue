<template>
  <div class="preloader">
    <div class="loading">Loading
      <div class="loading__dots">
        <div class="loading__dot">.</div>
        <div class="loading__dot">.</div>
        <div class="loading__dot">.</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'preloader',
  }
</script>

<style lang="scss">
  @import '../sass/_fonts.scss';
  @import '../sass/_colors.scss';

  @keyframes blink {
    0% {
      opacity: 0.2;
    }

    20% {
      opacity: 1;
    }

    100% {
      opacity: 0.2;
    }
  }

  .preloader {
    padding-top: 1em;
    z-index: 1;
  }
  .loading {
    @include nunitoBold;

    display: flex;
    justify-content: center;
    height: 20vh;
    font-size: 16px;
    line-height: 18px;
    color: $colorSecondary;

    &__dots {
      margin-left: 5px;
    }

    &__dot {
       display: inline-block;
       animation-name: blink;
       animation-duration: 1.4s;
       animation-iteration-count: infinite;
       animation-fill-mode: both;
       padding: 0 1px;

      &:nth-child(2) {
         animation-delay: 0.2s;
       }

      &:nth-child(3) {
         animation-delay: 0.4s;
       }
    }
  }
</style>

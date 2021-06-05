<template>
  <div class="text-dark not-found_root">
    <font-awesome-icon icon="angry" size="6x" transform="left-1 rotate-15"/>
    <h1>404 Not Found</h1>
  </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  }
}
</script>

<style>
.not-found_root {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 50%;
}

</style>
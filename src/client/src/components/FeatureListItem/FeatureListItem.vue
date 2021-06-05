<template>
  <li class="list-group-item" v-on:click="() => selectFeature(feature)">
    <div class="todo-indicator bg-warning"></div>
    <div class="widget-content p-0">
      <div class="widget-content-wrapper">
        <div class="widget-content-left">
          <div class="widget-heading">{{feature.flag}}</div>
          <div class="widget-subheading"><i>{{feature.type}}</i></div>
        </div>
        <div class="widget-content-right">
          <div class="widget-heading">
            <div class="badge badge-primary ml-2" v-show="feature.enabled">Enabled</div>
            <div class="badge badge-danger ml-2" v-show="!feature.enabled">Disabled</div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['feature', 'selectFeature']
  }
</script>
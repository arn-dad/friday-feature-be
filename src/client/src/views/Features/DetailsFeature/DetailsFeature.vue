<template>
  <div>
    <page-title :heading=title.heading :subheading=title.subheading :icon=title.icon>
      <slot>
        <b-form-checkbox v-model="flag.enabled" v-on:change="changeFlagStatus" name="check-button" switch>
          {{flag.enabled ? 'Disable' : 'Enable'}}
        </b-form-checkbox>
      </slot>
    </page-title>
    <div class="content">
       <div class="mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                    {{flag.label}}
                </div>
            </div>
            <div class="no-gutters row">
                <div class="col-sm-6 col-md-4 col-xl-4">
                      <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-9 bg-info"></div>
                            <i class="pe-7s-flag text-white"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Flag</div>
                            <div class="widget-numbers"><span>{{flag.flag}}</span></div>
                        </div>
                    </div>
                    <div class="divider m-0 d-md-none d-sm-block"></div>
                </div>
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div class="icon-wrapper rounded-circle">
                            <div class="icon-wrapper-bg opacity-10 bg-info"></div>
                            <i class="pe-7s-scissors text-white opacity-8"></i></div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Type</div>
                            <div class="widget-numbers">{{flag.type}}</div>
                        </div>
                    </div>
                    <div class="divider m-0 d-md-none d-sm-block"></div>
                </div>
                <div class="col-sm-12 col-md-4 col-xl-4">
                    <div class="card no-shadow rm-border bg-transparent widget-chart text-left">
                        <div class="icon-wrapper rounded-circle">
                              <div v-if="!flag.enabled" :class="'icon-wrapper-bg opacity-9 bg-danger'"></div>
                              <div v-if="flag.enabled" :class="'icon-wrapper-bg opacity-9 bg-success'"></div>
                              <i v-if="flag.enabled" class="pe-7s-check text-white"></i>
                              <i v-if="!flag.enabled" class="pe-7s-close-circle text-white"></i>
                        </div>
                        <div class="widget-chart-content">
                            <div class="widget-subheading">Status</div>
                            <div v-if="flag.enabled" class="widget-numbers"><span>ENABLED</span></div>
                            <div v-if="!flag.enabled" class="widget-numbers"><span>DISABLED</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-right d-block p-3 card-footer">
                <button class="btn-pill btn-shadow btn-wide mr-2 fsize-1 btn btn-primary btn-lg">
                  <span class="mr-2 opacity-7">
                      <i class="icon icon-anim-pulse ion-ios-analytics-outline"></i>
                  </span>
                    <span class="mr-1">Edit</span>
                </button>

                 <button v-on:click="() => { deleteFeature(flag.id) }" class="btn-pill btn-shadow btn-wide ml-2 fsize-1 btn btn-danger btn-lg">
                  <span class="mr-2 opacity-7">
                      <i class="icon icon-anim-pulse ion-ios-analytics-outline"></i>
                  </span>
                    <span class="mr-1">Delete</span>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { mapState } from 'vuex'
    import PageTitle from "@/Layout/Components/PageTitle.vue";

export default {
  components: {
          PageTitle,
          'font-awesome-icon': FontAwesomeIcon,
        },
  computed: mapState({
    flag: state => state.features.selected,
  }),
  beforeCreate() {},
  created() {},
  data: () => ({
    title: { 
      heading: 'Feature: ',
      subheading: 'Suspendisse pulvinar augue ac venenatis',
      icon: 'pe-7s-flag icon-gradient bg-tempting-azure',
     }
  }),
  methods: {
      changeFlagStatus(e) {
        const flag = {
            ...this.flag,
            enabled: e
        }
        this.$store.dispatch('updateFeature', flag)
      },
      deleteFeature(id) {
        this.$store.dispatch('deleteFeature', id)
      }
  }
}
</script>

<style scoped>
  .list-wrapper > li {
    margin-bottom: 5px;
  }
</style>
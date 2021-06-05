<template>
  <div>
    <page-title :heading=title.heading :subheading=title.subheading :icon=title.icon>
      <slot>
        <b-link :to="{ path: '/create-feature' }" class="btn-shadow d-inline-flex align-items-center btn btn-success">
          <font-awesome-icon class="mr-2" icon="plus"/>
            Create New
        </b-link>
      </slot>
    </page-title>
    <div class="content">
      <!-- Filters -->
      <b-row>
        <b-col cols="12">
          <b-card class="main-card mb-3 text-center">
            Filters
          </b-card>
        </b-col>
      </b-row>
      <!-- Features List -->
      <b-row>
        <b-col cols="12">
          <div v-if="features.loading" class="text-center">
            <b-spinner variant="primary" label="Text Centered"></b-spinner>
          </div>
          <ul v-if="features.features.length" class="list-group list-group-flush list-wrapper">
              <feature-list-item :selectFeature="handleSelectFeature" :key="item.id" v-for="item in features.features" :feature="item"></feature-list-item> 
            </ul>
         </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import { mapState } from 'vuex'
    import PageTitle from "../../Layout/Components/PageTitle.vue";
    import FeatureListItem from "../../components/FeatureListItem/FeatureListItem"


export default {
  components: {
            FeatureListItem,
            PageTitle,
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
  created() {
    this.$store.dispatch('getFeatures')
  },
  computed: mapState(['features']),
  data: () => ({
    title: { 
      heading: 'Features',
      subheading: 'Suspendisse pulvinar augue ac venenatis',
      icon: 'pe-7s-flag icon-gradient bg-tempting-azure',
     }
  }),
  methods: {
    handleSelectFeature(ft) {
      this.$store.commit('SELECT_FEATURE', ft)
      this.$router.push({name: 'feature-details', parmas: { selected: ft } })
    }
  }
}
</script>

<style scoped>
  .list-wrapper > li {
    margin-bottom: 5px;
  }
</style>
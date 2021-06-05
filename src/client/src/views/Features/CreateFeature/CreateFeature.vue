<template>
  <div>
    <page-title :heading=title.heading :subheading=title.subheading :icon=title.icon>
      <slot>
        <b-button variant="primary" :disabled="features.creating" v-on:click="createFeature">
        <b-spinner v-show="features.creating" small type="grow"></b-spinner>
          {{features.creating ? 'Loading...' : 'Create'}}
        </b-button>
      </slot>
    </page-title>
    <div class="content">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <form class="" @submit.prevent="createFeature">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="flag-input"
                      description=""
                    >
                      <b-form-input
                        id="flag-input" 
                        v-model="flagTemplate.flag" 
                        placeholder="INTEGRATION_PERM"
                        aria-describedby="flag-input-live-feedback"
                        :state="validateState('flag')"
                      >
                      </b-form-input>
                      <b-form-invalid-feedback id="flag-input-live-feedback">
                        Flag name is required and must be 5-20 characters long.
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="position-relative form-group">
                    <label for="examplePassword11" class="">Label</label>
                    <input v-model="flagTemplate.label" name="label" id="label" placeholder="For users with admin role" class="form-control">
                  </div>
                </div>
              </div>
              <div class="form-row">
               <div class="col-md-6">
                <div class="position-relative form-group">
                 <label for="exampleAddress" class="">Description</label>
                 <textarea v-model="flagTemplate.description" name="description" id="description" class="form-control"></textarea>
                </div>
              </div>
                <div class="col-md-3">
                    <b-form-group id="type-input-group-2" label="Type" label-for="type-input-group-2">
                    <b-form-select
                      id="type-input-group-2"
                      v-model="flagTemplate.type"
                      :options="types"
                      :state="validateState('type')"
                      aria-describedby="type-feedback"
                    >
                    </b-form-select>
                    <b-form-invalid-feedback id="type-feedback">Type is a required.</b-form-invalid-feedback>
                  </b-form-group>
                </div>
                 <div class="col-md-3">
                   <b-form-group id="example-input-group-2" label="Selectors (Country)" label-for="example-input-2">
                    <b-form-select
                      id="example-input-2"
                      v-model="flagTemplate.selectors.country[0]"
                      :options="country"
                      :state="validateSelectors('country')"
                      aria-describedby="selector-country-feedback"
                    >
                    </b-form-select>
                    <b-form-invalid-feedback id="selector-country-feedback">Selector is a required.</b-form-invalid-feedback>
                  </b-form-group>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-3">
                  <div class="position-relative form-group">
                    <label for="exampleCity" class="">Expiration Date</label>
                    <datepicker v-model="flagTemplate.expires" placeholder="Select Date"></datepicker>
                  </div>
                </div>
              <div class="col-md-2 item-center">
                <div class="position-relative form-check">
                  <input v-model="flagTemplate.deprecated" name="check" id="flag-deprecated" type="checkbox" class="form-check-input">
                  <label for="flag-deprecated" class="form-check-label">Deprecated</label>
                </div>
              </div>
               <div class="col-md-3 item-center">
                <div class="position-relative form-check">
                  <input v-model="flagTemplate.enabled" name="check" id="flag-enabled" type="checkbox" class="form-check-input">
                  <label for="flag-enabled" class="form-check-label">Enabled</label>
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
    import PageTitle from "@/Layout/Components/PageTitle.vue";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
    import { mapState } from 'vuex'

export default {
  components: {
            Datepicker,
            PageTitle,
            'font-awesome-icon': FontAwesomeIcon,
        },
  computed: mapState(['features']),
  data: () => ({
     country: [
        { value: "RU", text: "Russin" },
        { value: "USA", text: "USA" }
      ],
      types: [
        { value: "PERMISSION", text: "PERMISSION" },
        { value: "OPS", text: "OPS" },
        { value: "EXPEREMENT", text: "EXPEREMENT" },
        { value: "RELEASE", text: "RELEASE" }
      ],
    title: { 
      heading: 'Create New Feature',
      subheading: ' an example dashboard created using build-in elements and components.',
      icon: 'pe-7s-flag icon-gradient bg-tempting-azure',
    },
    flagTemplate: {
      label       : '', // short description
      flag        : '', // suffix on of ['PERM', 'OPS', 'EXP', 'REL']
      type        : '', // on of PERMISSION, OPS, EXPERIMENT, RELEASE
      description : '', // Description
      deprecated  : false, // is flag deprecated
      enabled     : false, // || false
      expires     : null, // || Date
      selectors   : {
        country: [] // on of ['RU', 'USA', 'IN', 'ALL'],
      }
    }
  }),
  methods: {
    createFeature: function () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$store.dispatch('createFeature', this.flagTemplate)
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.flagTemplate[name];
      return $dirty ? !$error : null;
    },
    validateSelectors(name) {
      const { $dirty, $error } = this.$v.flagTemplate.selectors[name];
      return $dirty ? !$error : null;
    }
  },
  validations: {
    flagTemplate: {
    label: {},
    flag: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20)
    },
    type: {
        required
    },
    description: {},
    selectors: {
      country: {
         required,
         $each: true
        }
      }
    }
  }
}
</script>

<style scoped>
.item-center {
  display: flex;
  align-items: center;
}
</style>
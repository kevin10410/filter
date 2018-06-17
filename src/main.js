// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import fontawesome from '@fortawesome/fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt'
import faAngleDoubleRight from '@fortawesome/fontawesome-free-solid/faAngleDoubleRight'
import faAngleDoubleLeft from '@fortawesome/fontawesome-free-solid/faAngleDoubleLeft'
fontawesome.library.add(faSearch)
fontawesome.library.add(faCheck)
fontawesome.library.add(faMinus)
fontawesome.library.add(faPlus)
fontawesome.library.add(faTimesCircle)
fontawesome.library.add(faMapMarkerAlt)
fontawesome.library.add(faCalendarAlt)
fontawesome.library.add(faAngleDoubleRight)
fontawesome.library.add(faAngleDoubleLeft)


import { store } from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store, 
  components: { App },
  template: '<App/>'
})

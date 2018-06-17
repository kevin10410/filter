<template>
  <div id="app" class="container-fluid">
    <div class="navbar row justify-content-start">
        <div class="logo col-md-4 col-sm-12">
            <h1>HaveFun</h1>
        </div>
        <div class="search col-md-4 col-sm-12">
            <span><i class="fas fa-search fa-lg"></i></span>
            <input type="text" placeholder="Explore your own activities" v-model="filter" @keypress="addRule">
        </div>
    </div>
    <div class="row main">
      <filter-bar></filter-bar>
      <transition
        mode="out-in"
        appear
        enter-class=""
        enter-active-class="animated fadeIn"
        leave-class=""
        leave-active-class="animated fadeOut">
      >
        <sites v-if="display === 'sites'" :key="'sites'"></sites>
        <detail v-else :key="'detail'"></detail>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilterBar from "./components/FilterBar.vue";
import Sites from "./components/Sites.vue";
import Detail from "./components/Detail.vue";

export default {
  name: "App",
  data() {
    return {
      sites: [],
      api: [
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97",
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&offset=100",
        "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&offset=200"
      ],
      filter: ""
    };
  },
  components: {
    FilterBar,
    Sites,
    Detail
  },
  methods: {
    async asyncFetchData() {
      let vm = this;
      let response1 = await axios({
        method: "get",
        url: vm.api[0]
      });
      this.$store.commit("fetchTourSite", response1.data.result.records);

      let response2 = await axios({
        method: "get",
        url: vm.api[1]
      });
      this.$store.commit("fetchTourSite", response2.data.result.records);

      let response3 = await axios({
        method: "get",
        url: vm.api[2]
      });
      this.$store.commit("fetchTourSite", response3.data.result.records);
    },
    fetchData() {
      let vm = this;
      axios({
        method: "get",
        url: vm.api[0]
      })
        .then(res => {
          vm.sites = vm.sites.concat(res.data.result.records);
          console.log(vm.sites);
          return axios({ method: "get", url: vm.api[1] });
        })
        .then(res => {
          vm.sites = vm.sites.concat(res.data.result.records);
          console.log(vm.sites);
          return axios({ method: "get", url: vm.api[2] });
        })
        .then(res => {
          vm.sites = vm.sites.concat(res.data.result.records);
          console.log(vm.sites);
        });
    },
    actionFetch() {
      let vm = this;
      this.$store.dispatch("fetchAPI", vm.api);
    },
    getDisplay() {
      console.log(this.$store.state.display);
    },
    addRule() {
      if (this.filter !== "") {
        this.$store.commit("addRules", this.filter)
        this.filter = "";
      }
    }
  },
  computed: {
    display() {
      return this.$store.getters.currentDisplay;
    }
  },
  mounted() {
    // this.asyncFetchData();
    this.actionFetch();
  }
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.navbar {
  background: #7828b4;
  height: 90px;

  .logo {
    h1 {
      font-family: Optima-ExtraBlack;
      font-size: 32px;
      color: #ffffff;
      text-align: center;
    }
  }

  .search {
    position: relative;
    color: #ffffff;
    display: flex;
    border-bottom: 1px solid #ffffff;

    span {
      position: absolute;
      left: 15px;
    }

    input {
      border: none;
      outline: none;
      background: rgba(0, 0, 0, 0);
      width: 100%;
      color: #ffffff;
      padding: 2px 0 2px 30px;

      ::placeholder {
        font-family: Roboto-Italic;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

.main {
  background: #f2f2f2;
}
</style>


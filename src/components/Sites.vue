<template>
    <div class="sitePage col-lg-8 col-md-8 col-sm-12">
        <div class="sites">
            <p class="amount">Showing <span>{{getFilterSites.length}}</span> results by…</p>
            <div class="option">
                <p 
                v-for="(item, index) in currentRules" 
                :key="index"
                @click="removeRule(index)"
                >{{item}} <i class="far fa-times-circle"></i></p>
            </div>
            <tour-site v-for="item in currentSites" :key="item.Id" :item="item"></tour-site>
            <div class="row justify-content-end pageSelector">
                <div class="selector col-lg-6 col-md-6 col-sm-12">
                    <div class="prev selectorBtn" @click="prevPage"><i class="fas fa-angle-double-left"></i></div>
                    <div v-if="number > currentSelector-5" v-for="number in currentSelector" 
                    class="selectorBtn"
                    :class="{'actived':number===currentPage}"
                    :key="number" @click="selectPage(number)">
                    {{number}}</div>
                    <div class="next selectorBtn" @click="nextPage"><i class="fas fa-angle-double-right"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TourSite from "./TourSite.vue";
export default {
  components: {
    TourSite
  },
  computed: {
    currentSites() {
      return this.$store.getters.currentSites;
    },
    currentPage() {
      return this.$store.getters.getCurrentPage;
    },
    currentSelector() {
      return this.$store.state.currentSelector;
    },
    getFilterSites() {
      return this.$store.getters.getFilterSites;
    },
    currentRules() {
      return this.$store.getters.currentRules;
    },
    getFilterSites() {
      return this.$store.getters.getFilterSites;
    }
  },
  methods: {
    selectPage(num) {
      this.$store.commit("changePage", num);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$store.commit("changePage", this.currentPage - 1);
        if (this.currentPage % 5 === 0) {
          this.$store.commit("changeSelector", -5);
        }
      }
    },
    nextPage() {
      if (this.getFilterSites.length === 0) {
        if (this.currentPage < 89) {
          this.$store.commit("changePage", this.currentPage + 1);
          if (this.currentPage % 5 === 1) {
            this.$store.commit("changeSelector", 5);
          }
        }
      } else {
        if (this.currentPage < this.getFilterSites.length / 3) {
          this.$store.commit("changePage", this.currentPage + 1);
          if (this.currentPage % 5 === 1) {
            this.$store.commit("changeSelector", 5);
          }
        }
      }
    },
    removeRule(index) {
        this.$store.commit("removeRules", index)
    },
  }
};
</script>

<style lang="scss" scoped>
.sitePage {
  animation-duration: 0.1s;
  .sites {
    padding: 24px 0;

    .amount {
      font-family: Roboto-Regular;
      font-size: 20px;

      span {
        color: #9013fe;
        font-family: Roboto-Bold;
        font-weight: bold;
      }
    }

    .option {
      p {
        margin-top: 8px;
        display: inline-block;
        border: 1px solid #9013fe;
        border-radius: 100px;
        font-family: Roboto-Italic;
        font-size: 16px;
        color: #9013fe;
        padding: 8px 16px;
        cursor: pointer;
        margin-right: 8px;
      }

      p:hover {
        background: #9013fe;
        color: #ffffff;
      }
    }

    .pageSelector {
      margin-top: 24px;
      .selector {
        display: flex;
        justify-content: flex-end;

        .selectorBtn {
          width: 40px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #eceeef;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .selectorBtn:hover {
          background: #9f49eaa8;
          border: 1px solid #9f49eaa8;
          color: #ffffff;
        }

        .selectorBtn.actived {
          background: #9013fe;
          border: 1px solid #9013fe;
          color: #ffffff;
        }
      }
    }
  }
}
</style>


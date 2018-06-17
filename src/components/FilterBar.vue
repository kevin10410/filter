<template>
    <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="filter">
            <div class="location box" :class="{hidden:!toggleLocation}">
                <p @click="toggleLocation = !toggleLocation">Location
                    <span v-if="toggleLocation" :key="true"><i class="fas fa-minus"></i></span>
                    <span v-else :key="false"><i class="fas fa-plus"></i></span>
                </p>
                <div class="toggleBox" v-if="toggleLocation">
                    <select>
                        <option>Taiwan</option>
                    </select>
                </div>
            </div>
            <div class="date box" :class="{hidden:!toggleDate}">
                <p @click="toggleDate = !toggleDate">Date
                    <span v-if="toggleDate" :key="true"><i class="fas fa-minus"></i></span>
                    <span v-else :key="false"><i class="fas fa-plus"></i></span>
                </p>
                <div class="toggleBox" v-if="toggleDate">
                    <div class="datePicker">
                        <label>from</label>
                        <input class="calender" type="date">
                    </div>
                    <div class="datePicker">
                        <label>to</label>
                        <input class="calender" type="date">
                    </div>
                </div>
            </div>
            <div class="category box" :class="{hidden:!toggleCategories}">
                <p @click="toggleCategories = !toggleCategories">Categories
                    <span v-if="toggleCategories" :key="true"><i class="fas fa-minus"></i></span>
                    <span v-else :key="false"><i class="fas fa-plus"></i></span>
                </p>
                <div class="toggleBox" v-if="toggleCategories">
                    <div class="categories">
                    <div class="checkbox" @click="selectCategory('All')">
                        <span v-if="category === 'All'"><i class="fas fa-check"></i></span>
                    </div>
                    <p>All</p>
                    </div>
                    <div class="categories">
                        <div class="checkbox" @click="selectCategory('Entertainment')">
                            <span v-if="category === 'Entertainment'"><i class="fas fa-check"></i></span>
                        </div>
                        <p>Entertainment</p>
                    </div>
                    <div class="categories">
                        <div class="checkbox" @click="selectCategory('Food')">
                            <span v-if="category === 'Food'"><i class="fas fa-check"></i></span>
                        </div>
                        <p>Food</p>
                    </div>
                    <div class="categories">
                        <div class="checkbox" @click="selectCategory('Learning')">
                            <span v-if="category === 'Learning'"><i class="fas fa-check"></i></span>
                        </div>
                        <p>Learning</p>
                    </div>
                    <div class="categories">
                        <div class="checkbox" @click="selectCategory('Outdoors')">
                            <span v-if="category === 'Outdoors'"><i class="fas fa-check"></i></span>
                        </div>
                        <p>Outdoors</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      toggleLocation: true,
      toggleDate: true,
      toggleCategories: true,
      isAll: true,
      rules: [],
      category: ""
    };
  },
  methods: {
    selectCategory(cat) {
      if (this.category === cat) {
        this.category = "";
      } else {
        this.category = cat;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  background: #ebebeb;

  .box {
    padding: 24px 25px;
    border-bottom: 1px solid #d7d7d7;
    width: 100%;

    p {
      font-family: Roboto-Bold;
      font-size: 20px;
      color: #000000;
      display: flex;
      justify-content: space-between;

      span {
        color: #9b9b9b;
      }
    }

    .toggleBox {
      margin-top: 24px;
    }

    select {
      outline: none;
      border: none;
      width: 100%;
      height: 40px;
      border-radius: 2px;
      background: #ffffff;
    }

    .datePicker {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;

      label {
        font-family: Roboto-Regular;

        width: 40px;
        text-align: center;
      }

      .calender {
        width: calc(100% - 40px);
        height: 40px;
        border: none;
        outline: none;
        border-radius: 2px;
        background: #ffffff;
      }
    }

    .categories {
      display: flex;
      align-items: center;

      .checkbox {
        width: 16px;
        height: 16px;
        background: #ffffff;
        display: flex;
        margin-right: 6px;

        span {
          display: flex;
          background: #9013fe;
          color: #ffffff;
        }
      }

      p {
        font-size: 16px;
        margin: 0;
      }
    }
  }

  .box.hidden {
    background: #d7d7d7;
    border-bottom: 1px solid #9b9b9b;
  }
}
</style>


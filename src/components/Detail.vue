<template>
    <div class="detail col-lg-8 col-md-8 col-sm-12">
        <p class="title"><span class="explore" @click="homePage">Explore</span><span> / {{detailItem.Name}}</span></p>
        <img :src="detailItem.Picture1">
        <div class="content">
            <p class="subtitle">{{detailItem.Name}}</p>
            <p class="tel">{{detailItem.Tel}}</p> 
            <span class="tag">Entertainment</span>
            <p class="info">
                <span class="location"><span class="icon"><i class="fas fa-map-marker-alt"></i></span>  Kaohsiung City</span>
                <span class="open"><span class="icon"><i class="far fa-calendar-alt"></i></span>  {{detailItem.Opentime}}</span>
            </p>
            <p class="des">{{detailItem.Description}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    homePage() {
      this.$store.commit("changeDisplay", "sites");
    }
  },
  computed: {
      detailItem() {
          return this.$store.getters.getDetailItem
      }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  margin: 24px 0;
  animation-duration: 0.1s;

  .title {
    padding: 13px 16px;
    background: #ebebeb;
    border-radius: 4px;
    font-family: Roboto-Regular;
    font-size: 16px;
    letter-spacing: 0;

    .explore {
      color: #9013fe;
      cursor: pointer;
    }

    span {
      color: #9b9b9b;
    }
  }

  img {
    display: block;
    margin-top: 24px;
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  .content {
    background: #ffffff;
    width: 100%;
    padding: 24px 40px;

    .subtitle {
      font-family: Roboto-Bold;
      font-size: 32px;
      color: #9013fe;
      margin-bottom: 24px;
    }

    .tel {
      display: inline-block;
      font-family: Roboto-Bold;
      font-weight: bold;
      font-size: 14px;
      color: #000000;
      margin: 0 20px 16px 0;
    }

    .tag {
      display: inline-block;
      padding: 3px 16px;
      color: #ffffff;
      font-weight: 400;
      font-style: italic;
      background: #d7d7d7;
      border-radius: 100px;
      margin: 0 0 16px 0;
    }

    .info {
      span {
        display: inline-block;
        margin-top: 16px;
        font-family: Roboto-Regular;
        font-size: 14px;
        color: #9b9b9b;
        .icon {
          margin-top: 0;
          color: #000000;
        }
      }

      .location {
        margin-right: 20px;
      }
    }

    .des {
      margin-top: 24px;
      font-family: Roboto-Regular;
      font-size: 16px;
    }
  }
}
</style>


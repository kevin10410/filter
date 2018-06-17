<template>
    <div class="row tourSite" @click="showDetail(item)">
        <div class="pic col-lg-4 col-sm-12" :style="{backgroundImage:`url(${item.Picture1})`}">
           
        </div>
        <div class="content col-lg-8 col-sm-12">
            <p class="title">{{item.Name}}</p>
            <p class="des">{{item.Description}}</p>
            <p class="tel">{{item.Tel}}<span>Entertainment</span></p>
            <p class="info">
                <span class="location"><span class="icon"><i class="fas fa-map-marker-alt"></i></span>  Kaohsiung City</span>
                <span class="open"><span class="icon"><i class="far fa-calendar-alt"></i></span>  {{item.Opentime}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    showDetail(item) {
      this.$store.commit("changeDisplay", "detail");
      this.$store.commit("selectDetailItem", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.tourSite {
  margin: 24px 0 0 0;
  cursor: pointer;

  div {
    width: 100%;
  }

  .pic {
    padding: 0;
    min-height: 220px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .content {
    padding: 24px 20px;
    background: #ffffff;

    p {
      margin-bottom: 16px;
    }

    .title {
      font-family: Roboto-Bold;
      font-size: 22px;
      color: #9013fe;
    }

    .des {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .tel {
      font-family: Roboto-Bold;
      font-weight: bold;
      font-size: 14px;
      color: #000000;

      span {
        margin-left: 20px;
        padding: 3px 16px;
        color: #ffffff;
        font-weight: 400;
        font-style: italic;
        background: #d7d7d7;
        border-radius: 100px;
      }
    }

    .info {
      font-family: Roboto-Regular;
      font-size: 14px;
      color: #9b9b9b;
      margin: 0;
      .location {
        display: block;
        margin-bottom: 16px;
      }

      .open {
        display: block;
      }

      span {
        .icon {
          color: #000000;
        }
      }
    }
  }
}
</style>


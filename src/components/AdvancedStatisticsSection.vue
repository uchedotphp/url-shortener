<template>
  <div class="advanced">
    <LinkShortenerSection />
    <div class="doubled-container">
      <div class="welcome">
        <h2>advanced statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div class="cards">
        <el-row>
          <el-col :xs="24" :span="6" class="card-container">
            <div class="grid-content card">
              <div class="img-box">
                <img src="./../assets/images/icon-brand-recognition.svg" alt srcset />
              </div>
              <div class="body">
                <h3>Brand recognition</h3>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :span="6" style="margin-top: 3em" class="card-container">
            <div class="grid-content card">
              <div class="img-box">
                <img src="./../assets/images/icon-detailed-records.svg" alt srcset />
              </div>
              <div class="body">
                <h3>detailed records</h3>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :span="6" style="margin-top: 6em;" class="card-container">
            <div class="grid-content card">
              <div class="img-box">
                <img src="./../assets/images/icon-fully-customizable.svg" alt srcset />
              </div>
              <div class="body">
                <h3>fully customizable</h3>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import LinkShortenerSection from "@/components/LinkShortenerSection";
export default {
  name: "AdvancedStatisticsSectionComponent",
  components: {
    LinkShortenerSection
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .advanced h2 {
    font-size: 15em;
  }

  .img-box {
    left: 6.5em !important;
  }

  .card .body h3 {
    text-align: center;
  }
}

.advanced {
  background: #f0f1f6;
  position: relative;
}

.advanced .welcome {
  max-width: 500px;
  // background: green;
  margin: auto;
}

.advanced h2 {
  text-align: center;
  font-size: 1.5em;
  text-transform: capitalize;
}

.advanced p {
  text-align: center;
  line-height: 2;
  padding-bottom: 5em;
}

.cards {
  padding-bottom: 5em;
  margin-top: 0;
}

.cards .el-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  position: relative;
  background: #fff;
  max-width: 500px;
  margin: auto;
}

// .card-container:after {
//   // width: 150px;
//   // content: "";
//   // display: inline-block;
//   // // top: 10%;
//   // // left: 4%;
//   // border-radius: 20px;
//   // background-color: yellow;
//   // height: 100%;
//   // width: 100%;
//   // position: absolute;
//   // z-index: -1;
//   top: 10px;
//   right: 4%;
//   width: 20px;
//   content: "";
//   display: inline-block;
//   background-color: yellow;
//   height: 100%;
// }

// .card-container * + * {
//   margin-top: 3.5em;
// }

.card .body {
  padding: 0 2em 2em;
  margin-top: 0;
}

.card .body h3 {
  text-transform: capitalize;
}

.card .body p {
  text-align: justify;
  word-spacing: -0.1em;
  font-size: 0.9em;
  padding-bottom: 1em;
}

.img-box {
  position: relative;
  top: -2em;
  left: 2em;
  background: hsl(257, 27%, 26%);
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
}

.img-box img {
  margin: 1.2em auto;
  display: inline;
  // height: 50%;
  width: auto;
}
</style>

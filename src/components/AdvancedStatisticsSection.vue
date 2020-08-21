<template>
  <div class="advanced">
    <LinkShortenerSection />
    <div class="doubled-container">
      <div class="welcome">
        <h2>advanced statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <div class="cards">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :xs="24" :span="6">
            <div class="grid-content card">
              <div class="img-box">
                <img src="./../assets/images/icon-brand-recognition.svg" alt srcset />
              </div>
              <div class="body">
                <h3>Brand recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :span="6">
            <div class="grid-content card">
              <div class="img-box">
                <img src="./../assets/images/icon-brand-recognition.svg" alt srcset />
              </div>
              <div class="body">
                <h3>Brand recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :span="6">
            <div class="grid-content card">
              <div class="img-box">
                <img src="./../assets/images/icon-brand-recognition.svg" alt srcset />
              </div>
              <div class="body">
                <h3>Brand recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
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
.advanced {
  background: #f0f1f6;
  position: relative;
}

.advanced .welcome {
  max-width: 500px;
  margin: auto;
}

.advanced h2 {
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
}

.advanced p {
  text-align: center;
  line-height: 2;
  padding-bottom: 5em;
}

.cards {
  padding-bottom: 10em;
}

.card {
  position: relative;
  background: #fff;
  max-width: 500px;
  margin: auto;
  // text-align: center;
}

.card > h3 {
  // text-align: left;
}

.card .body {
  padding: 0 2em 2em;
}

.card .body p {
  text-align: justify;
  word-spacing: -0.1em;
  font-size: 0.9em;
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
  margin: 1em auto;
  display: inline;
  // height: 50%;
  width: auto;
}
</style>
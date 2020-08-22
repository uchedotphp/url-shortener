<template>
  <div class="jumbotron">
    <div class="main doubled-container">
      <div class="jumbotron-text-area">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button class="rounded-button">Get Started</button>
      </div>
      <div class="image-area">
        <div class="image">
          <img src="./../assets/images/illustration-working.svg" alt="illustration-working" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronSectionComponent"
};
</script>

<style lang="scss" scoped>
.jumbotron {
  // margin: 1.5em -11.1vw 1.5em 0;
  // background-color: red;
  // display: flex;
  padding: 0 0 5em 0;
}

.main {
  display: flex;
}

.jumbotron .main .jumbotron-text-area {
  // justify-content: flex-start;
  // background-color: aquamarine;
  padding: 5em 0;
  // max-width: 700px;
  max-width: 43.75rem;
}

.jumbotron .main .jumbotron-text-area h1 {
  font-size: 4.5rem;
}

.jumbotron .main .jumbotron-text-area p {
  font-size: 1.2rem;
}

.image-area {
  // margin-right: -16.76vw;
  // margin-right: -11.1vw;
  // justify-content: flex-end;
  // background-color: green;
  // margin-top: 0;
  // background-image: url("./../assets/images/illustration-working.svg");
  // background-repeat: no-repeat;
  // background-size: contain;
  // position: relative;
  // background-position: right center;
}

.jumbotron .image-area .image {
}

.jumbotron .image-area .image > img {
  // width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
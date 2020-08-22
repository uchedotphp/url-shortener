<template>
  <div class="jumbotron doubled-container">
    <div class="main">
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
@media (max-width: 500px) {
  .main {
    // display: none;
  }
  .image-area {
    order: -1;
    margin-top: 0;
  }

  .jumbotron-text-area {
    text-align: center;
    // max-width: 3.75rem;
    // font-size: 1em;
  }

  .jumbotron .main .jumbotron-text-area h1 {
    font-size: 2em !important;
  }

  .jumbotron .main .jumbotron-text-area p {
    font-size: 1em !important;
  }
}

.jumbotron {
  // margin: 1.5em -11.1vw 1.5em 0;
  // background-color: red;
  // display: flex;
  padding: 0 0 5em 0;
}

.main {
  // background: red;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  // justify-content: flex-end;
}

.jumbotron .main .jumbotron-text-area {
  // justify-content: flex-start;
  // background-color: aquamarine;
  padding: 3em 0;
  max-width: 700px;
  // max-width: 43.75rem;
}

.jumbotron .main .jumbotron-text-area h1 {
  font-size: 5rem;
}

.jumbotron .main .jumbotron-text-area p {
  font-size: 1.2rem;
  line-height: 2;
}

.image-area {
  // position: relative;
  // right: -4em;s
  margin-top: 0;
}

.jumbotron .image-area .image > img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
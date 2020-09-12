<template>
  <div class="jumbotron doubled-container" style="z-index: 0">
    <div class="main">
      <div class="jumbotron-text-area">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button class="rounded-button">Get Started</button>
      </div>
      <div class="image-area">
        <div class="image">
          <img
            src="./../assets/images/illustration-working.svg"
            alt="illustration-working"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronSectionComponent",
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .image-area {
    order: -1;
    margin-top: 0;
  }

  .jumbotron-text-area {
    text-align: center;
  }

  .jumbotron .main .jumbotron-text-area h1 {
    font-size: 2em !important;
  }

  .jumbotron .main .jumbotron-text-area p {
    font-size: 1em !important;
  }
}

.jumbotron {
  padding: 5em 0;
}

.main {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
}

.jumbotron .main .jumbotron-text-area {
  padding: 3em 0;
  max-width: 700px;
}

.jumbotron .main .jumbotron-text-area h1 {
  font-size: 5rem;
}

.jumbotron .main .jumbotron-text-area p {
  font-size: 1.2rem;
  line-height: 2;
}

.image-area {
  margin-top: 0;
}

.jumbotron .image-area .image > img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>

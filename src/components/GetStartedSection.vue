<template>
  <div class="getStarted">
    <div class="content doubled-container">
      <h1>Boost your links today</h1>
      <button class="rounded-button">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartedSectionComponent"
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .content {
    font-size: 0.9em;
  }
}

.getStarted {
  margin-top: 0;
  background-color: hsl(257, 27%, 26%);
  background-image: url("./../assets/images/bg-boost-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5em 0;
}

.content {
  max-width: 500px;
  text-align: center;
  padding: 0 1.2em;
}

.content h1 {
  color: #fff;
}

.content > button {
  font-size: 1.5em;
}
</style>
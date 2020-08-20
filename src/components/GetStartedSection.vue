<template>
  <div class="getStarted">
    <div class="content doubled-container">
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartedSectionComponent"
};
</script>

<style lang="scss" scoped>
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
}

.content h2 {
  color: #fff;
}
</style>
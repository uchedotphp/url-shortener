<template>
  <div class="advanced">
    <LinkShortenerSection />
    <div class="welcome doubled-container">
      <h2>advanced statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
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
}
</style>
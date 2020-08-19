<template>
  <div id="app">
    <div>
      <MenuHeader />
      <JumbotronSection />
      <LinkShortenerSection />
      <AdvancedStatisticsSection />
      <GetStartedSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader";
import JumbotronSection from "@/components/JumbotronSection";
import LinkShortenerSection from "@/components/LinkShortenerSection";
import AdvancedStatisticsSection from "@/components/AdvancedStatisticsSection";
import GetStartedSection from "@/components/GetStartedSection";
import FooterSection from "@/components/FooterSection";
export default {
  name: "app",
  components: {
    MenuHeader,
    JumbotronSection,
    LinkShortenerSection,
    AdvancedStatisticsSection,
    GetStartedSection,
    FooterSection
  }
};
</script>

<style lang="scss">
@import url("https://fonts.google.com/specimen/Poppins");

:root {
  //testing with vh
  font-size: calc(1.125em + 0.01vw);
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}

*,
::before,
::after {
  box-sizing: inherit;
}

// Defining standard variables and values
// primary
$cyan: hsl(180, 66%, 49%);
$darkViolet: hsl(257, 27%, 26%);

// secondary
$red: hsl(0, 87%, 67%);

// Neutral
$gray: hsl(0, 0%, 75%);
$grayishViolet: hsl(257, 7%, 63%);
$veryDarkBlue: hsl(255, 11%, 22%);
$veryDarkViolet: hsl(260, 8%, 14%);

// :root {
//   font-size: 1.125em; //desired px(18px) / inherited px(16px)
// }

// media queries
@media (max-width: 8375px) {
  //for mobile views
  // :root {
  //   font-size: 0.875em;
  // }
}

@media (min-width: 1440px) {
  //for desktop views
  // :root {
  //   font-size: 0.875em;
  // }
}

body {
  // font-size: 18px;
  line-height: 1.2;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

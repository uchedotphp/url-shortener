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
  font-size: 1.125em; //desired px(18px) / inherited px(16px)
  // font-size: calc(1.125em + 0.01vw);
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

body {
  line-height: 1.2;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  color: #929197;
  // overflow: hidden;
}

body * + * {
  margin-top: 1.5em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #35333e;
  letter-spacing: -0.1rem;
  font-family: Poppins;
}

ul,
p {
  font-size: 1rem;
}

ul {
  list-style: none;
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
@media (max-width: 375px) {
  //for mobile views
  :root {
    font-size: 1em;
  }
}

@media (min-width: 1440px) {
  //for desktop views
  // :root {
  //   font-size: 0.875em;
  // }
}

.rounded-button {
  background: hsl(180, 66%, 49%);
  color: #fff;
  text-transform: capitalize;
}

.button-link {
  display: block;
  padding: 0.5em;
  color: #fff;
  background-color: #0090c9;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

// .button-link + .button-link {
//   margin-top: 1.5em; //Only apply a top margin to button-links that immediately follow another button-link
// }

#app {
  // max-width: 1440px;
  max-width: 77.83783783783784vw;
  margin: 1.25em auto;
  background: blue;
  font-weight: 500;
}
</style>

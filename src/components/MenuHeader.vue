<template>
  <!-- <nav class="doubled-container">
    <ul class="site-nav">
      <span>
        <img src="./../assets/images/logo.svg" />
      </span>
      <li>
        <a href="#">features</a>
      </li>
      <li>
        <a href="#">pricing</a>
      </li>
      <li>
        <a href="#">resources</a>
      </li>
      <span class="nav-right">
        <li>
          <a href="#">login</a>
        </li>
        <li>
          <button class="rounded-button" type="button">sign up</button>
        </li>
      </span>
    </ul>
  </nav>-->

  <nav class="topnav doubled-container">
    <a href="#">
      <img src="./../assets/images/logo.svg" alt="logo" />
    </a>

    <div id="myLinks" v-if="myLinks">
      <a href="#">features</a>

      <a href="#">pricing</a>

      <a href="#">resources</a>

      <a href="#">login</a>

      <a href="#">
        <button class="rounded-button" type="button">sign up</button>
      </a>
    </div>
    <a href="javascript:void(0)" class="icon" @click="openBars">
      <ion-icon name="menu-outline"></ion-icon>
    </a>
  </nav>
</template>

<script>
export default {
  name: "MenuHeaderComponent",
  data() {
    return {
      myLinks: false
    };
  },
  methods: {
    openBars() {
      this.myLinks = this.myLinks === false ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
// @media (max-width: 375px) {
@media (max-width: 500px) {
  //for mobile views
  :root {
    font-size: 1em;
  }

  .topnav {
    overflow: hidden;
    // background-color: #333;
    position: relative;
  }

  .topnav #myLinks {
    // display: none;
    background: hsl(257, 27%, 26%);
    border-radius: 15px;
    padding: 2.5em 2em;
    text-align: center;
    margin-top: 1em;
  }

  .topnav a {
    color: #fff;
    text-transform: capitalize;
    padding: 0.5em 0;
    text-decoration: none;
    font-size: 1.1em;
    display: block;
  }

  .topnav a button {
    width: 100%;
  }

  .topnav a > img {
    padding: 0;
  }

  .topnav a.icon {
    // background: rgb(221, 210, 210);
    // background: red;
    padding: 0;
    color: hsl(257, 7%, 63%);
    margin-top: 0;
    font-size: 2rem;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav a:hover {
    // background-color: #ddd;
    // color: black;
  }

  /* Style the active link (or home/logo) */
  .active {
    background-color: #4caf50;
    color: green;
  }
}

nav {
  // background-color: #fff;
  // color: #afaeb3;
  // border: 1px solid red;
  // font-weight: 700;
  // padding: 1em 0;
}

// .site-nav {
//   display: flex;
//   padding: 0.5em 0;
// }

// .site-nav {
//   padding-left: 0;
//   list-style-type: none;
// }

// .site-nav > li {
//   margin-top: 0;
//   padding: 0.2em 0;
// }

// .site-nav > li + li {
//   margin-left: 1.5em;
//   // padding: 0.3em 1em;
// }

// .site-nav span img {
//   padding-right: 50px;
// }

// .site-nav > li > a {
//   text-decoration: none;
//   color: inherit;
//   display: block;
//   // padding: 0.3em 1em;
//   text-transform: capitalize;
// }

// .site-nav > .nav-right {
//   // display: inline-block;
//   margin-top: 0;
//   // background: green;
//   margin-left: auto;
//   display: flex;
// }

// .nav-right > li {
//   margin-top: 0;
// }

// .nav-right > li > a {
//   text-decoration: none;
// }

// .nav-right > li + li {
//   margin-left: 1.5em;
//   // padding: 0.3em 1em;
// }

// .signupButton {
//   padding: 0.5em 1.5em;
//   color: #fff;
//   background: hsl(180, 66%, 49%);
//   border: hsl(180, 66%, 49%);
//   border-radius: 1em;
//   font-weight: 700;
// }
</style>
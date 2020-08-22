<template>
  <nav class="doubled-container">
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
  </nav>
</template>

<script>
export default {
  name: "MenuHeaderComponent"
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #fff;
  color: #afaeb3;
  // border: 1px solid red;
  font-weight: 700;
  padding: 1em 0;
}

.site-nav {
  display: flex;
  padding: 0.5em 0;
}

.site-nav {
  padding-left: 0;
  list-style-type: none;
}

.site-nav > li {
  margin-top: 0;
  padding: 0.2em 0;
}

.site-nav > li + li {
  margin-left: 1.5em;
  // padding: 0.3em 1em;
}

.site-nav span img {
  padding-right: 50px;
}

.site-nav > li > a {
  text-decoration: none;
  color: inherit;
  display: block;
  // padding: 0.3em 1em;
  text-transform: capitalize;
}

.site-nav > .nav-right {
  // display: inline-block;
  margin-top: 0;
  // background: green;
  margin-left: auto;
  display: flex;
}

.nav-right > li {
  margin-top: 0;
}

.nav-right > li > a {
  text-decoration: none;
}

.nav-right > li + li {
  margin-left: 1.5em;
  // padding: 0.3em 1em;
}

.signupButton {
  padding: 0.5em 1.5em;
  color: #fff;
  background: hsl(180, 66%, 49%);
  border: hsl(180, 66%, 49%);
  border-radius: 1em;
  font-weight: 700;
}
</style>
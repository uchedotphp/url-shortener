<template>
  <footer>
    <div class="doubled-container">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <img class="footer-logo" src="./../assets/images/white-logo.svg" alt="logo" srcset />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <ul>
              Features
              <li>
                <a href="#">link shortening</a>
              </li>
              <li>
                <a href="#">branded links</a>
              </li>
              <li>
                <a href="#">analytics</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <ul>
              Resources
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <ul>
              Company
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">our team</a>
              </li>
              <li>
                <a href="#">careers</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <ul class="social-links">
              <li>
                <a href="#">
                  <img src="./../assets/images/icon-facebook.svg" alt="facebook" srcset />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./../assets/images/icon-twitter.svg" alt="twitter" srcset />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./../assets/images/icon-pinterest.svg" alt="pinterest" srcset />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./../assets/images/icon-instagram.svg" alt="instagram" srcset />
                </a>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSectionComponent"
};
</script>

<style lang="scss" scoped>
a:link,
a:visited {
  color: hsl(0, 0%, 75%);
  text-decoration: none;
}

a:hover,
a:active {
  color: hsl(180, 66%, 49%);
}

footer {
  background: hsl(260, 8%, 14%);
  padding: 5em 0;
  margin-top: 0;
}

.el-col {
  margin-top: 0;
}

.footer-logo {
  color: #fff;
}

.grid-content ul {
  color: #fff;
  text-transform: capitalize;
}

// .grid-content ul li > a {
//   color: rgb(51, 25, 25);
// }

.grid-content li:first-child {
  padding-top: 2em;
}
.social-links {
  // list-style: none;
  // margin-top: 0;
}

.social-links li {
  display: inline-block;
  padding-right: 1em;
  padding-top: 0 !important;
  margin-top: 0;
}

.social-links li a img {
  // height: 1000px;
  background: none;
}

.social-links li a img:hover {
  // background: red;
  color: red;
}
</style>
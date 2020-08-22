<template>
  <div class="house doubled-container">
    <div class="shortener">
      <div class="input-area">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-row :gutter="20">
            <el-col :xs="24" :span="19">
              <el-form-item prop="link">
                <input
                  class="link-input"
                  v-model="ruleForm.link"
                  placeholder="Shorten a link here..."
                />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :span="5" style="margin-top: 0">
              <el-form-item>
                <button
                  class="submit-link"
                  type="button"
                  @click="shortenLink('ruleForm')"
                >Shorten It!</button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <div v-if="localStorageLinks">
      <el-row class="results" v-for="links in localStorageLinks" :key="links.hashid">
        <el-col :xs="24" :span="16">
          <div class="grid-content bg-purple">
            <p>{{links.url.substring(0, 50)}}...</p>
          </div>
        </el-col>
        <el-col :xs="24" :span="5" style="margin-top: 0">
          <div class="grid-content bg-purple-light">
            <a href="#">https://rel.ink/{{links.hashid}}</a>
          </div>
        </el-col>
        <el-col :xs="24" :span="3" style="margin-top: 0">
          <div class="bg-purple">
            <button class="rounded-button" type="button">copy</button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LinkShortenerSectionComponent",
  data() {
    return {
      localStorageLinks: JSON.parse(localStorage.getItem("urls")),
      ruleForm: {
        link: ""
      },
      showReseutls: false,
      rules: {
        link: [
          {
            required: true,
            message: "Please add a link",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    storage() {
      return JSON.parse(localStorage.getItem("urls"));
    }
  },

  methods: {
    test(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return axios
            .post("https://rel.ink/api/links/", {
              url: this.ruleForm.link
            })
            .then(response => {
              console.log(response);
            })
            .catch(err => {
              console.error(err);
            });
        } else {
          console.log("bad");
        }
      });
    },
    shortenLink(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm.link);
          // if (localStorage.getItem("urls") !== null) {
          //   const found = JSON.parse(localStorage.getItem("urls")).find(
          //     link => {
          //       return link.url === this.ruleForm.link;
          //     }
          //   );
          //   if (found == undefined) {
          return axios
            .post("https://rel.ink/api/links/", {
              url: this.ruleForm.link
            })
            .then(({ data }) => {
              let urls = JSON.parse(localStorage.getItem("urls")) || [];

              urls.push(data);
              localStorage.setItem("urls", JSON.stringify(urls));
              this.$refs[formName].resetFields();

              this.$notify({
                title: "Success",
                message: "URL Link Shorten successfully",
                type: "success"
              });
            })
            .catch(err => {
              console.error(err);
            });
          // }
          // else {
          //   this.$notify.error({
          //     title: "Error",
          //     message: "Sorry but that URL link is in your result list"
          //   });
          // }
          // return;
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },

  mounted() {
    // console.log(this.localStorageLinks);
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .el-form-item input {
    margin-bottom: 2em;
  }
}

.house {
  position: relative;
  top: -5em;
}

.shortener {
  background-color: hsl(257, 27%, 26%);
  background-image: url("./../assets/images/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  padding: 4em;
}

.results {
  border-radius: 15px;
  padding: 2em;
  background: #fff;
}

.grid-content {
  padding: 1em 0;
}

.grid-content p {
  color: #000;
}

.link-input {
  padding: 2em;
  border-radius: 15px;
  width: 100%;
  // margin: 0 auto;
}

::placeholder {
  font-size: 1rem;
  font-weight: 700;
}

.submit-link {
  text-decoration: none;
  display: block;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  border: none;
  background-color: hsl(180, 66%, 49%);
  padding: 0.9em 1em;
  font-size: 1.7em;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
  text-align: center;
}

.submit-link:hover {
  background-color: #9be3e2;
}

.el-form-item {
  margin-bottom: 0;
}

.rounded-button {
  border-radius: 5px;
}

// .el-form-item__error {
//   font-size: 2em !important;
// }
</style>

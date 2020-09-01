<template>
  <div class="house doubled-container">
    <div class="shortener" v-loading="loading" element-loading-text="Processing...">
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

    <div v-if="links.length > 0">
      <el-row class="results" v-for="link in links" :key="link.hashid">
        <el-col :xs="24" :span="16">
          <div class="grid-content bg-purple">
            <p>{{ link.url.substring(0, 50) }}...</p>
          </div>
        </el-col>
        <el-col :xs="24" :span="5" class="divider" style="margin-top: 0">
          <div class="grid-content bg-purple-light">
            <a href="#">https://rel.ink/{{ link.hashid }}</a>
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
  mounted() {
    // fetchUrls: JSON.parse(localStorage.getItem("urls"));
  },
  data() {
    return {
      loading: false,
      // localStorageLinks: JSON.parse(localStorage.getItem("urls")),
      ruleForm: {
        link: ""
      },
      // links: [],
      added: [],
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
    },
    links() {
      return this.added;
    }
  },

  methods: {
    shortenLink(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;

          if (localStorage.getItem("urls") !== null) {
            const found = JSON.parse(localStorage.getItem("urls")).find(
              link => {
                return link.url === this.ruleForm.link;
              }
            );
            if (found == undefined) {
              return axios
                .post("https://rel.ink/api/links/", {
                  url: this.ruleForm.link
                })
                .then(({ data }) => {
                  this.added.push(data);
                  let urls = JSON.parse(localStorage.getItem("urls")) || [];
                  urls.push(data);
                  localStorage.setItem("urls", JSON.stringify(urls));
                  console.log(data);
                  (this.loading = false),
                    this.$message({
                      type: "success",
                      message: "URL link shortened successfully",
                      duration: 5000,
                      showClose: true
                    });
                  this.$refs[formName].resetFields();
                })
                .catch(err => {
                  console.error(err);
                });
            } else {
              this.$message({
                type: "error",
                message: "Sorry but that URL link is in your result list",
                duration: 5000
              });
              this.loading = false;
            }
          } else {
            console.log("hi");
          }

          // return axios
          //   .post("https://rel.ink/api/links/", {
          //     url: this.ruleForm.link
          //   })
          //   .then(({ data }) => {
          //     this.added.push(data);
          //     let urls = JSON.parse(localStorage.getItem("urls")) || [];
          //     urls.push(data);
          //     localStorage.setItem("urls", JSON.stringify(urls));
          //     console.log(data);
          //     (this.loading = false),
          //       this.$message({
          //         type: "success",
          //         message: "URL link shortened successfully",
          //         duration: 5000,
          //         showClose: true
          //       });
          //     this.$refs[formName].resetFields();
          //   })
          //   .catch(err => {
          //     console.error(err);
          //   });

          // if (localStorage.getItem("urls") !== null) {
          //   const found = JSON.parse(localStorage.getItem("urls")).find(
          //     link => {
          //       return link.url === this.ruleForm.link;
          //     }
          //   );
          //   if (found == undefined) {
          // return axios
          //   .post("https://rel.ink/api/links/", {
          //     url: this.ruleForm.link
          //   })
          //   .then(({ data }) => {
          //     let urls = JSON.parse(localStorage.getItem("urls")) || [];

          //     urls.push(data);
          //     localStorage.setItem("urls", JSON.stringify(urls));
          //     this.$refs[formName].resetFields();

          // .catch(err => {
          //   console.error(err);
          // });
          // }
          // else {
          //   this.$notify.error({
          //     title: "Error",
          //     message: "Sorry but that URL link is in your result list"
          //   });
          // }
          // return;
          // }
          //   } else {
          //     console.log("error submit!!");
          //     return false;
          //   }
          // });
        } else {
          this.$message({
            type: "error",
            message: "Oops there seems to be an error.",
            duration: 5000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .el-form-item input {
    margin-bottom: 2em;
  }

  .shortener {
    padding: 2em !important;
  }

  .results {
    // overflow: hidden;
  }

  .bg-purple {
    overflow: hidden;
  }

  .bg-purple > button {
    width: 100%;
  }

  .divider {
    border-top: 1px solid black;
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

.bg-purple-light a {
  text-decoration: none;
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

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
                  @click="submitForm('ruleForm')"
                >Shorten It!</button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <div v-if="showReseutls = true">
      <el-row class="results">
        <el-col :xs="24" :span="16">
          <div class="grid-content bg-purple">
            <p>https://www.frontendmentor.io</p>
          </div>
        </el-col>
        <el-col :xs="24" :span="5" style="margin-top: 0">
          <div class="grid-content bg-purple-light">
            <a href="#">https://rel.ink/k4lKyk</a>
          </div>
        </el-col>
        <el-col :xs="24" :span="3" style="margin-top: 0">
          <div class="bg-purple">
            <button class="rounded-button" type="button">copy</button>
          </div>
        </el-col>
      </el-row>
      <el-row class="results">
        <el-col :xs="24" :span="16">
          <div class="grid-content bg-purple">
            <p>https://www.frontendmentor.io</p>
          </div>
        </el-col>
        <el-col :xs="24" :span="5" style="margin-top: 0">
          <div class="grid-content bg-purple-light">
            <a href="#">https://rel.ink/k4lKyk</a>
          </div>
        </el-col>
        <el-col :xs="24" :span="3" style="margin-top: 0; vertical-align: text-top">
          <div class="bg-purple">
            <button class="rounded-button" type="button">copy</button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkShortenerSectionComponent",
  data() {
    return {
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

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
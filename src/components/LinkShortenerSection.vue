<template>
  <div class="shortener doubled-container">
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
              <button class="submit-link" type="button" @click="submitForm('ruleForm')">Shorten It!</button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
      rules: {
        link: [
          {
            required: true,
            message: "Please provide an input",
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
.shortener {
  position: relative;
  top: -5em;
  // display: flex;
  background-color: hsl(257, 27%, 26%);
  background-image: url("./../assets/images/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  // position: relative;
  // background-position: right center;
  border-radius: 15px;
  padding: 3em;
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
  display: block;
  color: #fff;
  width: 100%;
  border-radius: 15px;
  border: none;
  background-color: hsl(180, 66%, 49%);
  padding: 1.5em 5em;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
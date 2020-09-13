<template>
  <div class="doubled-container">
    <nav class="menuItems">
      <a href="#">
        <img src="./../assets/images/logo.svg" alt="" />
      </a>
      <div class="menu" v-if="barStatus == false">
        <!-- <div class="box"> -->
        <div class="left">
          <ul>
            <li>
              <a href="#">
                features
              </a>
            </li>
            <li>
              <a href="#">
                pricing
              </a>
            </li>
            <li>
              <a href="#">
                resources
              </a>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href="#">
                login
              </a>
            </li>
            <li>
              <button class="rounded-button">SignUp</button>
            </li>
          </ul>
        </div>
      </div>
      <a @click="openBars" href="javascript:void(0)" class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-j</title>
          <line
            x1="80"
            y1="160"
            x2="432"
            y2="160"
            style="fill:none;stroke:hsl(0, 0%, 75%);;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="80"
            y1="256"
            x2="432"
            y2="256"
            style="fill:none;stroke:hsl(0, 0%, 75%);;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
          <line
            x1="80"
            y1="352"
            x2="432"
            y2="352"
            style="fill:none;stroke:hsl(0, 0%, 75%);;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
          />
        </svg>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuHeaderComponent",
  data() {
    return {
      barStatus: false,
    };
  },
  methods: {
    openBars() {
      this.barStatus = this.barStatus == false ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.doubled-container {
  position: relative;
  .menuItems {
    overflow: hidden;
    // background: red;

    a {
      // background: purple;
      margin-right: 1em;
      padding: 1.2em 0;
      float: left;

      img {
        // max-width: 100%;
        // max-height: 100%;
        // display: block;
        // margin: 0 auto;
        // width: 100%;
        // text-align: center;
        // height: 100%;
        // object-fit: cover;
        // display: inline-block;
      }
    }
    .menu {
      margin-top: 0;
      // display: flex;
      display: none;
      // background: green;
      justify-content: space-between;
      // margin-right: auto;
      align-items: baseline;

      .left {
        // background: blue;
        margin-top: 0;
        ul {
          list-style: none;
          // display: inline-block;
          // display: none;
          margin-top: 0;
        }
        li {
          display: inline-block;
        }
        a {
          display: block;
          padding: 0 1em;
          text-decoration: none;
          text-transform: capitalize;
          color: hsl(0, 0%, 75%);

          &:hover {
            color: hsl(260, 8%, 14%);
          }
        }
      }

      .right {
        margin-top: 0;
        // background: green;
        ul {
          list-style: none;
          display: inline-block;
          // display: none;
        }

        li {
          display: inline-block;
          margin-top: 0;
        }
        a {
          display: block;
          padding: 0 2em;
          text-decoration: none;
          text-transform: capitalize;
          color: hsl(0, 0%, 75%);

          &:hover {
            color: hsl(260, 8%, 14%);
          }
        }
      }
      // }
    }
  }
  a.icon {
    display: none;
    margin-top: 0;
    margin-right: 0;
    color: hsl(0, 0%, 75%);
    // background: blue;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 2em;
    padding: 0.5em 0;
  }
}

@media (max-width: 640px) {
  .doubled-container {
    .menuItems {
      .menu {
        // margin-top: 2em;
        top: 5em;
        width: 78vmin;
        padding: 1em 0;
        align-items: center;
        // text-align: center;
        z-index: 1;
        display: flex;
        flex-direction: column;
        position: absolute;
        background: hsl(257, 27%, 26%);
        border-radius: 15px;

        .left {
          text-align: center;
          background: red;
          margin: 1em;
          ul {
            list-style: none;
          }
          li {
            display: block;
            margin-top: 0;
          }
          a {
            display: block;
            padding: 0.5em 0;
            text-decoration: none;
            text-transform: capitalize;
            color: #fff;
            font-size: 1.1em;

            &:hover {
              color: hsl(260, 8%, 14%);
            }
          }
        }

        .right {
          // background: green;
          text-align: center;
          width: 65vmin;
          border-top: 1px solid #fff;
          margin: 1em;
          ul {
            list-style: none;
          }
          li {
            display: block;
            margin-top: 0;
            padding: 1.2em 0;
          }
          a {
            display: block;
            padding: 0 2em;
            text-decoration: none;
            text-transform: capitalize;
            color: #fff;

            font-size: 1.1em;

            &:hover {
              color: hsl(260, 8%, 14%);
            }
          }
        }
      }
    }
    a.icon {
      display: block;
      margin-top: 0;
      margin-right: 0;
      // display: block;
      color: hsl(0, 0%, 75%);
      // background: blue;
      position: absolute;
      right: 0;
      top: 0;
      font-size: 2em;
      padding: 0.5em 0;
    }
  }
}
</style>

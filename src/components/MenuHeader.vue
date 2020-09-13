<template>
  <div class="doubled-container">
    <nav class="menuItems">
      <a href="#">
        <img src="./../assets/images/logo.svg" alt="" />
      </a>
      <div class="menu" id="myTopnav">
        <!-- <div class="box"> -->
        <div class="left">
          <a href="#">
            features
          </a>
          <a href="#">
            pricing
          </a>
          <a href="#">
            resources
          </a>
        </div>
        <div class="right">
          <a href="#">
            login
          </a>
          <button class="rounded-button">SignUp</button>
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
      // barStatus: true,
    };
  },
  methods: {
    openBars() {
      var x = document.getElementById("myTopnav");
      if (x.className === "menu") {
        x.className += " responsive";
      } else {
        x.className = "menu";
      }
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
      margin-right: 1em;
      padding: 0.5em 0;
      float: left;

      img {
      }
    }
    .menu {
      margin-top: 0;
      display: flex;
      justify-content: space-between;

      .left {
        // background: blue;
        margin-top: 0;
        a {
          margin-top: 0;
          display: inline-block;
          padding: 1em 1em;
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
        a {
          margin-top: 0;
          display: block;
          padding: 1em 2em;
          text-decoration: none;
          text-transform: capitalize;
          color: hsl(0, 0%, 75%);

          &:hover {
            color: hsl(260, 8%, 14%);
          }
        }

        button {
          margin-top: 0;
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
        // width: 78vmin;
        padding: 1em 0;
        // align-items: center;
        text-align: center;
        z-index: 1;
        // display: flex;
        display: none;
        flex-direction: column;
        // position: absolute;
        background: hsl(257, 27%, 26%);
        border-radius: 15px;

        .left {
          // text-align: center;
          // background: red;
          margin: 1em;
          padding: 0em 3em;
          // display: ;
          a {
            margin-top: 0;
            display: block;
            // padding: 0.5em 0;
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
          // text-align: center;
          // background: green;
          text-align: center;
          // width: 65vmin;
          border-top: 1px solid #fff;
          margin: 1em;
          a {
            margin: 1.5em;
            display: block;
            padding: 0 2em;
            text-decoration: none;
            text-transform: capitalize;
            color: #fff;
            // text-align: center;
            // background: red;

            font-size: 1.1em;

            &:hover {
              color: hsl(260, 8%, 14%);
            }
          }
          button {
            width: 100%;
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
      padding: 0 0;
    }

    .menu.responsive {
      position: absolute;
      display: flex;
    }

    .menu.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .menu.responsive a {
      display: block;
    }
  }
}
</style>

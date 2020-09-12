<template>
  <div class="doubled-container">
    <nav class="menuItems">
      <a href="#">
        <img src="./../assets/images/logo.svg" alt="" />
      </a>
      <div class="menu">
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
      <!-- </div> -->
      <a href="javascript:void(0)" class="icon">
        <ion-icon name="menu-outline"></ion-icon>
      </a>
      <!-- <button class="icon">
        <ion-icon name="menu-outline"></ion-icon>
      </button> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuHeaderComponent",
};
</script>

<style lang="scss" scoped>
.menuItems {
  overflow: hidden;
  // display: flex;
  // display: inline-block;
  // flex-direction: column;
  // justify-content: space-between;
  // display: grid;
  // grid-template-columns: auto auto;
  // justify-content: space-between;
  // align-items: baseline;
  margin: 1em 0;
  position: relative;
  // background: red;

  a {
    // display: inline-block;
    // display: block;
    // background: purple;
    margin-right: 1em;
    padding: 1.2em 0;
    float: left;
    // padding-right: 3em;
    // height: 150px;
    // width: 200px;
    // margin: 0 auto;
    // vertical-align: middle;

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
    display: flex;
    // background: green;
    // flex-direction: column;
    justify-content: space-between;
    // margin-right: auto;
    align-items: baseline;
    // .box {
    //   display: flex;
    //   align-items: baseline;
    //   justify-content: space-between;

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
      // margin-left: auto;
      ul {
        list-style: none;
        display: inline-block;
        // display: none;

        li {
          display: inline-block;
          margin-top: 0;

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
      }
    }
    // }
  }

  .icon {
    display: none;
    color: hsl(0, 0%, 75%);
    position: absolute;
    right: 0;
    top: 0;
    // height: 150px;
  }
}

@media (max-width: 640px) {
  .menuItems {
    .left {
      ul {
        display: none;
      }
    }
    .right {
      ul {
        display: none;
      }
    }
    .icon {
      display: block;
    }
  }
}

// .topnav {
//   // overflow: hidden;
//   // display: inline-block;
//   background-color: red;
// }

// .topnav img {
//   // margin-right: 3em;
//   // padding-top: 2em;
//   // max-width: auto;
//   // height: auto;
// }

// .topnav .icon {
//   display: none;
// }

// #myLinks {
//   margin-top: 0;
//   display: inline-block;
// }

// #myLinks a {
//   // float: left;
//   // display: block;
//   // display: inline-block;
//   // text-align: center;
//   // padding: 0 4em 0 0;
//   // margin-top: 0;
//   margin: 0 4em 0 0;
// }

// #myLinks a:hover {
//   background: #ddd;
//   color: black;
// }

// #myLinks a.active {
//   background-color: #4caf50;
//   color: green;
// }

// nav {
//   // background-color: #fff;
//   // color: #afaeb3;
//   // border: 1px solid red;
//   // font-weight: 700;
//   // padding: 1em 0;
// }

// // .site-nav {
// //   display: flex;
// //   padding: 0.5em 0;
// // }

// // .site-nav {
// //   padding-left: 0;
// //   list-style-type: none;
// // }

// // .site-nav > li {
// //   margin-top: 0;
// //   padding: 0.2em 0;
// // }

// // .site-nav > li + li {
// //   margin-left: 1.5em;
// //   // padding: 0.3em 1em;
// // }

// // .site-nav span img {
// //   padding-right: 50px;
// // }

// // .site-nav > li > a {
// //   text-decoration: none;
// //   color: inherit;
// //   display: block;
// //   // padding: 0.3em 1em;
// //   text-transform: capitalize;
// // }

// // .site-nav > .nav-right {
// //   // display: inline-block;
// //   margin-top: 0;
// //   // background: green;
// //   margin-left: auto;
// //   display: flex;
// // }

// // .nav-right > li {
// //   margin-top: 0;
// // }

// // .nav-right > li > a {
// //   text-decoration: none;
// // }

// // .nav-right > li + li {
// //   margin-left: 1.5em;
// //   // padding: 0.3em 1em;
// // }

// // .signupButton {
// //   padding: 0.5em 1.5em;
// //   color: #fff;
// //   background: hsl(180, 66%, 49%);
// //   border: hsl(180, 66%, 49%);
// //   border-radius: 1em;
// //   font-weight: 700;
// // }

// // media queries for the different screen sizes
// @media (max-width: 640px) {
//   //mobile
//   :root {
//     font-size: 1em;
//   }

//   .topnav {
//     // overflow: hidden;
//     position: relative;
//   }

//   .topnav img {
//     background: #4caf50;
//   }

//   .topnav .icon {
//     background: green;
//   }

//   .topnav #myLinks {
//     background: hsl(257, 27%, 26%);
//     border-radius: 15px;
//     // padding: 2.5em 2em;
//     width: 78vmin;
//     // text-align: center;
//     // margin-top: 1em;
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     // justify-content: center;
//     align-items: center;
//     // al
//     top: 3.5em;
//     z-index: 1;
//   }

//   .topnav a {
//     color: #fff;
//     text-transform: capitalize;
//     padding: 0.5em 0;
//     text-decoration: none;
//     font-size: 1.1em;
//     display: block;
//   }

//   .topnav a button {
//     width: 100%;
//   }

//   .topnav a > img {
//     padding: 0;
//   }

//   .topnav a.icon {
//     // background: rgb(221, 210, 210);
//     // background: red;
//     padding: 0;
//     color: hsl(257, 7%, 63%);
//     margin-top: 0;
//     font-size: 2rem;
//     display: block;
//     position: absolute;
//     right: 0;
//     top: 0;
//   }

//   .topnav a:hover {
//     // background-color: #ddd;
//     // color: black;
//   }

//   /* Style the active link (or home/logo) */
//   .active {
//     background-color: #4caf50;
//     color: green;
//   }
// }

// @media (max-width: 768px) {
//   //tablets
// }
</style>

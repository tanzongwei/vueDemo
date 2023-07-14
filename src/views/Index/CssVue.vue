<template>
    <body>
      <div class="content">
        <div class="column2 clearfix">
          <div class="column2-1"></div>
          <div class="column2-2"></div>
        </div>
  
        <div class="column3 clearfix">
          <div class="column3-1"></div>
          <div class="column3-2"></div>
          <div class="column3-3"></div>
        </div>
        <!-- 多行duolie -->
        <div class="column-n">
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
        </div>
      </div>
    </body>
  </template>
  
  <style scoped>
      body ul {
          margin: 0;
          padding: 0;
      }
      .content {
          width: 1000px;
          height: 1000px;
          /* border: 2px solid black; */
          margin: 30px auto 0;
      }
      .content .column2 {
          /* width: 1000px; */
          height: 98px;
          margin: 0px 5px;
          /* border: 2px solid orange; */
      }
      .content .column2 .column2-1 {
          width: 600px;
          height: 98px;
          background-color: red;
          float: left;
      }
      .content .column2 .column2-2 {
          width: 380px;
          background-color: yellow;
          height: 98px;
          float: right;
      }
      .content .column3 {
          margin: 5px 5px 0px;
          height: 400px;
          /* border: 2px solid orange; */
      }
      .content .column3 .column3-1 {
          width: 310px;
          height: inherit;
          background-color: goldenrod;
          margin-right: 5px;
          float: left;
      }
      .content .column3 .column3-2 {
          width: 400px;
          height: inherit;
          background-color: red;
          float: left;
      }
      .content .column3 .column3-3 {
          width: 270px;
          height: inherit;
          background-color: blue;
          float: right;
      }
      .clearfix::after {
          content: "";
          display: block;
          clear: both;
      }
      .column-n {
          height: 440px;
      }
       ul {
          list-style: none;
      }
      .column-n ul li {
          width: 190px;
          margin: 5px ;
          height: 196px;
          background-color: green;
          float: left;
      }
  </style>
  
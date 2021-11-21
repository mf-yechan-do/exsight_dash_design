import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

.barclosed {
  margin-left: -280px;
  opacity: 0;
}
.slider.round {
  border-radius: 30px;
}

.pages {
  color: #254067  !important;
  border-bottom: 2px solid #254067;
  font-size: 0.875rem !important;
}
input:focus {outline:1px solid rgba(37,64,103,1);}

.slider.round:before {
  border-radius: 50%;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dddddd;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 0px;
  bottom: -5px;
  background-color: #fff;
  -webkit-transition: .4s;
  transition: .4s;
  border: 1px solid rgba(191, 202, 220, 1);
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: #707070;
  border-radius: 10px;
  background-clip: padding-box;
  border: 1px solid transparent;
}
::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 10px;
}
  * {
  box-sizing: border-box;
  line-height: 1.45 !important;
  font-family: "Noto Sans KR", sans-serif !important;
}

html,
body {    
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  padding: 0;
  margin: 0;
  font-family: 'Lato', sans-serif;
  background: #F2F2F2 0% 0% no-repeat padding-box;
}
h1 {
}
h2 {
}
h3 {
}
h4 {
}
h5 {
}
h6 {
}
p {
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
ul, li {
  margin: 0;
  padding: 0;
  }

  .select {    color: #254067;
    font-weight: 500;}

    .blue {
      color: #254067;
      cursor: pointer;}

      .gray {
        color: #dddddd;
        cursor: pointer;}

        .tableAlign{
          margin-bottom: -2px;
          margin-left: 10px;
          margin-right: 8px;
          right: 0px;
          position: absolute;
          top: 13px;
           path {
    cursor: pointer;
}}
`;
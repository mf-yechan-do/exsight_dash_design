import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

.slider.round {
  border-radius: 30px;
}

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
  transition: all 0.5s;
}
.notion-collection {
  width:100%;
}
.notion-list-item {
  flex-wrap: wrap;
  height: 100%;
}

.notion-property-multi_select-item {
  margin: 5px !important;
}

.notion-page { 
  width: 100%;
  max-width: 1000px;
  padding: 120px 30px;
} 
.notion-page-cover {
  min-height: 450px;
/*  min-width: 1920px;*/
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
  font-size: 42px;
}
h3 {
  font-size: 36px;
}
h4 {
  font-size: 28px;
  font-weight: 500;
}
h5 {
  font-size: 22px;
  font-weight: 500;
}
h6 {
  font-size: 16px;
  font-weight: 500;
}
p {
  font-size: 16px;
  line-height: 28px;
}
a {
  color: inherit;
  text-decoration: none;
}
ul, li {
  margin: 0;
  padding: 0;
  }
.about-list {
  margin-top: 30px;
}
`;

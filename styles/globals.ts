import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
.tab {
  padding-top: 25px;
  padding-left: 40px;
  margin: 0 auto;
  position: relative;
  flex-direction: column;
  width: calc(100%);

  h3 {
    margin: 0;
    color: #707070;
    font-size: 1.125rem;
    font-weight: 500;
    display: inline-block;
    border-bottom: 2px solid #707070;
    margin-right: 20px;
    padding: 0px 3px 5px;
  }
  .TabActive {
    color: #254067;
  }}
.flex {
  display: flex;
}

.active {
  color: rgb(210, 167, 93);
  font-weight: 500;
}
.location{ padding-top: 25px;
  padding-left: 40px;
  margin: 0 auto;
  position: relative;
  flex-direction: column;
  width: calc(100%);
  p {
    color: #707070;
    font-size: 0.75rem;
    margin: 0px;
  }
  img {
    margin: 0px 8px -2px 8px;
    height: 14px;
  }
  span {
    color: #254067;
  }
}

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

input,label {
  cursor: pointer;
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
  cursor: pointer;
}

.tableAlign{
  margin-bottom: -2px;
  margin-left: 10px;
  margin-right: 8px;
  right: 0px;
  position: absolute;
  top: 13px;
   path {
    cursor: pointer;
   }
 }
 .tableAlign2{
   margin-bottom: -2px;
   margin-left: 10px;
   margin-right: 8px;
   right: 0px;
   position: absolute;
   top: 18px;
    path {
     cursor: pointer;
    }
  }
`;
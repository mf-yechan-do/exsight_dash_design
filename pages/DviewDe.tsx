import React, { Component } from "react";
import Top from "../component/top";
import SideBar from "../component/sidebar";
import ViewTable from "../component/view.component/Dviewtable";
import Detailtable from "../component/view.component/detailtable";
import OverView from "../component/view.component/Doverview";
import Settings from "../component/view.component/Dsettings";
import styled from "styled-components";

class Static extends Component {
  render() {
    return (
      <>
        <Top />
        <Flex>
          <SideBar />
          <InlineFlex>
            <Location>
              <p>
                <a href="/home">ExSight Dash</a>
                <img src="/images/location_arrow.svg" />
                <a href="/dataset">Dataset</a>
                <img src="/images/location_arrow.svg" />
                <span>Out_stock(Dynamic Real)</span>
              </p>
            </Location>
            <h1>Out_stock(Dynamic Real)</h1>
            <Flex>
              <OverView />
            </Flex>
            <ViewD>
              <h3>
                <a href="javascript:history.back();">View</a>
              </h3>
              <h3>Detail</h3>
            </ViewD>
            <Detailtable />
            <Graph></Graph>
          </InlineFlex>
        </Flex>
      </>
    );
  }
}

export default Static;

const Graph = styled.div`
  min-height: 200px;
  width: calc(100% - 80px);
  margin: 20px 40px 40px 40px;
  height: 800px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
`;
const ViewD = styled.div`
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
  h3:last-child {
    color: #254067;
    border-bottom: 2px solid #254067;
  }
`;

const Location = styled.div`
  padding-top: 25px;
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
`;

const Flex = styled.div`
  display: flex;
`;

const InlineFlex = styled.div`
  width: calc(100% - 280px);
  h1 {
    font-size: 1.75rem;
    margin: 0px;
    font-weight: 400;
    color: #222222;
    padding: 20px 0px 0px 40px;
  }
`;

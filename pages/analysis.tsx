import React, { Component } from "react";
import Top from "../component/top";
import SideBar from "../component/sidebar";
import DataSelect from "../component/analysis.component/dataselect";
import Domain from "../component/analysis.component/domain";
import GSettings from "../component/analysis.component/gsettings";
import styled from "styled-components";

class Analysis extends Component {
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
                <span>Analysis</span>
              </p>
            </Location>
            <h1>Data Visualization</h1>
            <DataSelect />
            <GSettings />
            <div
              style={{
                border: "1px solid #dddddd",
                margin: "20px 40px 0px 40px",
                height: "800px",
                background: "#ffffff",
              }}
            ></div>
            <Domain />
          </InlineFlex>
        </Flex>
      </>
    );
  }
}

export default Analysis;

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
  h3:first-child {
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

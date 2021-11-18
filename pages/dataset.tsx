import React, { Component } from "react";
import Top from "../component/top";
import SideBar from "../component/sidebar";
import Table from "../component/dataset.component/table";
import styled from "styled-components";

class Dataset extends Component {
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
                <img src="/images/location_arrow.svg" /> <span>Dataset</span>
              </p>
            </Location>
            <Table />
          </InlineFlex>
        </Flex>
      </>
    );
  }
}

export default Dataset;

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

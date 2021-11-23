import Top from "../component/top";
import SideBar from "../component/sidebar";
import Main from "../component/home.component/main";
import styled from "styled-components";
import React, { useState, Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../store";
import Table from "../component/dataset.component/table_v2";

type Props = {
  store?: IStore;
};

@inject("store")
@observer
class Home extends Component<Props> {
  render() {
    const control = () => {
      if (store.sidebar === "closed") {
        const _article = "calc(100% - 40px)";
        return _article;
      } else if (store.sidebar === "open") {
        const _article = "calc(100% - 280px)";
        return _article;
      }
    };

    const { store } = this.props;
    unprotect(store);
    return (
      <>
        <Top />
        <Flex>
          <SideBar />
          <InlineFlex style={{ width: control() }}>
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

export default Home;

const Graph = styled.div`
  min-height: 200px;
  width: calc(100% - 80px);
  margin: 20px 40px 40px 40px;
  height: 800px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
`;
const View = styled.div`
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
const DView = styled.div`
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
  transition: all 0.5s;
  h1 {
    font-size: 1.75rem;
    margin: 0px;
    font-weight: 400;
    color: #222222;
    padding: 20px 0px 0px 40px;
  }
`;

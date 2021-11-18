import Top from "../component/top";
import SideBar from "../component/sidebar";
import Main from "../component/home.component/main";
import styled from "styled-components";
import React, { useState, Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../store";

type Props = {
  store?: IStore;
};

@inject("store")
@observer
class Home extends Component<Props> {
  render() {
    const control = () => {
      if (store.mode === "15px") {
        const _article = "calc(100% - 40px)";
        return _article;
      } else if (store.mode === "25px") {
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
              </p>
            </Location>
            <Main />
          </InlineFlex>
        </Flex>
      </>
    );
  }
}

export default Home;

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

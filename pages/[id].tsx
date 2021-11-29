import Container from "../component/layout/container";
import Main from "../component/home/main";
import styled from "styled-components";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../store";

type Props = {
  store?: IStore;
};

@inject("store")
@observer
class Id extends Component<Props> {
  render() {
    const nav_info = (
      <p>
        <a href="/exsight_dash/data/">ExSight Dash</a>
      </p>
    );
    const { store } = this.props;
    unprotect(store);
    return (
      <>
        <Container store={store} nav_info={""} title={""}>
          <h1>경로가 잘못되었습니다.</h1>
        </Container>
      </>
    );
  }
}

export default Id;

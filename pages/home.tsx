import Container from "../component/layout/container";
import Main from "../component/home/main";
import React, { Component } from "react";
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
    const nav_info = (
      <p>
        <a href="/exsight_dash/data/">ExSight Dash</a>
      </p>
    );
    const { store } = this.props;
    unprotect(store);
    return (
      <>
        <Container store={store} nav_info={nav_info} title={""}>
          <Main />
        </Container>
      </>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../../store";
import Table from "../../component/data/table";
import Container from "../../component/layout/container";

type Props = {
  store?: IStore;
};

@inject("store")
@observer
class Home extends Component<Props> {
  render() {
    const nav_info = (
      <p>
        <a href="/home">ExSight Dash</a>
        <img src="/images/location_arrow.svg" /> <span>Dataset</span>
      </p>
    );
    const { store } = this.props;
    unprotect(store);
    return (
      <>
        <Container store={store} nav_info={nav_info} title={""}>
          <Table />
        </Container>
      </>
    );
  }
}

export default Home;

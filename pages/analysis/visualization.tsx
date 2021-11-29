import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../../store";
import DataSelect from "../../component/analysis/dataselect";
import Domain from "../../component/analysis/domain";
import GSettings from "../../component/analysis/gsettings";
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
        <img src="/images/location_arrow.svg" />
        <span>Analysis</span>
      </p>
    );

    const { store } = this.props;
    unprotect(store);
    return (
      <>
        <Container store={store} nav_info={nav_info} title={""}>
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
        </Container>
      </>
    );
  }
}

export default Home;

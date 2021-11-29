import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../../store";
import OverView from "../../component/data/overview";
import Settings from "../../component/data/settings";
import ViewTable from "../../component/data/statictable";
import Container from "../../component/layout/container";
import DetailTable from "../../component/data/detailtable";

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
        <a href="/data">Dataset</a>
        <img src="/images/location_arrow.svg" />
        <span>SKU_info(Static)</span>
      </p>
    );
    const { store } = this.props;
    unprotect(store);

    const menuList = {
      0: <ViewTable store={store} />,
      1: <DetailTable />,
    };

    return (
      <>
        <Container store={store} nav_info={nav_info} title={""}>
          <h1>SKU_info(Static)</h1>

          <div className="flex">
            <OverView
              store={store}
              name="Sku_info"
              domain="Prj1"
              description="SKU 정보"
              Type="Static"
              created="2021/01/03"
              updated="2021/01/03"
              row="5"
              column="7"
              locaion="-"
            />
            <span
              style={{
                display: store.menu === 0 ? "inline-block" : "none",
                width: "100%",
              }}
            >
              <Settings store={store} datatype="static" />
            </span>
          </div>

          <div className="tab">
            <h3>
              <a
                className={store.menu === 0 ? "TabActive" : ""}
                onClick={() => store.Changemenu(0)}
              >
                View
              </a>
            </h3>
            <h3>
              <a
                className={store.menu === 1 ? "TabActive" : ""}
                onClick={() => store.Changemenu(1)}
              >
                Detail
              </a>
            </h3>
          </div>
          {menuList[store.menu]}
        </Container>
      </>
    );
  }
}

export default Home;

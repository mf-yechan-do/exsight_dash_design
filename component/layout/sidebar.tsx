import styled from "styled-components";
import React from "react";
import { observer } from "mobx-react";
import { IStore } from "../../store";
import { useRouter } from "next/router";

interface Props {
  store: IStore;
}

const SideBar: React.FunctionComponent<Props> = observer(({ store }) => {
  const router = useRouter();
  return (
    <>
      <Sidebar
        style={{
          width: store.sidebar ? "280px" : "40px",
          minWidth: store.sidebar ? "280px" : "40px",
        }}
      >
        <Container>
          <img
            onClick={(event) => {
              store.onChangeSidebar(!store.sidebar);
            }}
            style={{
              right: store.sidebar ? "25px" : "10px",
            }}
            src={store.sidebar ? "/images/close.svg" : "/images/hamburger.svg"}
          />
          <Nav className={store.sidebar ? "" : "barclosed"}>
            <h2>
              <a href="/home">ExSight Dash</a>
            </h2>
            <ul>
              <li>
                <a
                  href="/data"
                  className={router.pathname == "/data" ? "active" : ""}
                >
                  Dataset
                </a>
              </li>

              <li>
                <a
                  href="/analysis/visualization"
                  className={
                    router.pathname == "/analysis/visualization" ? "active" : ""
                  }
                >
                  Analysis
                </a>
              </li>
            </ul>
          </Nav>
        </Container>
      </Sidebar>
    </>
  );
});
export default SideBar;
const Sidebar = styled.div`
  position: relative;
  width: 280px;
  min-width: 220px;
  min-height: calc(100vh - 40px);
  background: #fff;
  transition: all 0.5s;
  h2 {
    margin: 0px;
    font-size: 1.25rem;
    color: #254067;
    font-weight: 500;
    line-height: 70px !important;
    padding-left: 40px;
  }
`;
const Nav = styled.nav`
  transition: all 0.5s;
  img {
    margin: 0px 5px 4px 0px;
    cursor: pointer;
  }
  ul > li > a {
    padding-left: 13px;
  }
  li {
    list-style: none;
    padding-left: 25px;
    font-size: 1rem;
    font-weight: 300;
    border-top: 1px solid #eeeeee;
    font-weight: 400;
    padding-left: 40px;
    line-height: 50px !important;
  }
  li > ul > li {
    font-size: 0.875rem;
    background-color: #fbfbfb;
    font-weight: 400;
    padding-left: 40px;
    line-height: 30px !important;
    padding-left: 13px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  img {
    position: absolute;
    top: 25px;
    cursor: pointer;
    z-index: 100;
  }
`;

import Top from "./top";
import SideBar from "./sidebar";
import styled from "styled-components";
import React from "react";
import { observer } from "mobx-react";
import { IStore } from "../../store";

interface Props {
  store: IStore;
  nav_info: any;
  title: string;
  children: any;
}

const Container: React.FunctionComponent<Props> = observer(
  ({ store, nav_info, children }) => {
    return (
      <>
        <Top />
        <div className="flex">
          <SideBar store={store} />
          <InlineFlex
            style={{
              width: store.sidebar ? "calc(100% - 280px)" : "calc(100% - 40px)",
            }}
          >
            <Location>{nav_info}</Location>
            {children}
          </InlineFlex>
        </div>
      </>
    );
  }
);

export default Container;

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

const InlineFlex = styled.div`
  transition: all 0.5s;
  h1 {
    font-size: 1.75rem;
    margin: 0px;
    font-weight: 400;
    color: #222222;
    padding: 20px 0px 0px 40px;
  }
`;

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FilterSelec from "../../pages/filterselec";
import React, { useState, Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../../store";

function Align() {
  return (
    <svg className="tableAlign2" width="10" height="4" viewBox="0 0 10 4">
      <g transform="translate(-476 -202)">
        <path
          d="M5,0l5,4H0Z"
          transform="translate(486 206) rotate(180)"
          fill="#707070"
        />
      </g>
    </svg>
  );
}

type Props = {
  store?: IStore;
};

@inject("store")
@observer
export default class ViewTable extends Component<Props> {
  render() {
    const { store } = this.props;
    unprotect(store);

    return (
      <>
        <Container>
          <div
            style={{
              width: "100%",
              padding: "0px 40px",
              paddingTop: "20px",
            }}
          >
            <Flex>
              <Sort>
                <p>Sort</p>
                <div className="box">
                  <div>
                    Name(Asc)
                    <img
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                      src="/images/close.svg"
                    />
                  </div>
                </div>
              </Sort>
              <div
                style={{
                  width: "15px",
                }}
              ></div>
              <Filter>
                <p>Filter</p>
                <div className="box">
                  <div>
                    <span className="blue">Name</span> contains
                    <span className="blue"> info</span>
                    <img
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                      src="/images/close.svg"
                    />
                  </div>
                </div>
              </Filter>
            </Flex>
          </div>
          <Dataset>
            <TableScroll>
              <DatasetTable>
                <tr
                  style={{
                    position: "sticky",
                    top: "0px",
                    backgroundColor: "rgb(245, 245, 245)",
                    zIndex: 100,
                  }}
                >
                  <th>
                    <DThbar
                      onClick={(event) => {
                        const bloo = !store.isToggleOn;
                        store.Toggle(bloo);
                      }}
                    >
                      ID
                      <Align />
                    </DThbar>
                    {store.isToggleOn ? " " : <FilterSelec />}
                  </th>
                  <th>
                    <DThbar
                      onClick={(event) => {
                        const bloo = !store.isToggleOn2;
                        store.Toggle2(bloo);
                      }}
                    >
                      Goods_code
                      <Align />
                    </DThbar>
                    {store.isToggleOn2 ? " " : <FilterSelec />}
                  </th>
                  <th>
                    <DThbar
                      onClick={(event) => {
                        const bloo = !store.isToggleOn3;
                        store.Toggle3(bloo);
                      }}
                    >
                      Febric
                      <Align />
                    </DThbar>
                    {store.isToggleOn3 ? " " : <FilterSelec />}
                  </th>
                  <th>
                    <DThbar
                      onClick={(event) => {
                        const bloo = !store.isToggleOn4;
                        store.Toggle4(bloo);
                      }}
                    >
                      Color
                      <Align />
                    </DThbar>
                    {store.isToggleOn4 ? " " : <FilterSelec />}
                  </th>
                  <th>
                    <DThbar
                      onClick={(event) => {
                        const bloo = !store.isToggleOn5;
                        store.Toggle5(bloo);
                      }}
                    >
                      Size
                      <Align />
                    </DThbar>
                    {store.isToggleOn5 ? " " : <FilterSelec />}
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a>19297</a>
                  </td>
                  <td>PPFbT1c005</td>
                  <td>-</td>
                  <td>Black</td>
                  <td>225</td>
                  <td></td>
                </tr>
              </DatasetTable>
            </TableScroll>
          </Dataset>
          <Pagination>
            <div>
              <img
                style={{
                  transform: "rotate(90deg)",
                }}
                src="/images/big_arrow.svg"
              />
              <ul>
                <li className="pages">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ul>
              <img
                style={{
                  transform: "rotate(-90deg)",
                }}
                src="/images/big_arrow.svg"
              />
            </div>
          </Pagination>
        </Container>
      </>
    );
  }
}
const Flex = styled.div`
  display: flex;
`;
const Sort = styled.div`
  p {
    margin: 0px;
    color: #254067;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .box {
    color: #254067;
    font-size: 0.75rem;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    padding: 5px 15px;
    margin-top: 5px;
    img {
      width: 10px;
    }
  }
`;
const Filter = styled.div`
  p {
    margin: 0px;
    color: #254067;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .box {
    color: #707070;
    font-size: 0.75rem;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border: 1px solid #DDDDDD;
    padding: 5px 15px;
    margin-top: 5px;
    img {
      width: 10px;
    }
`;
const Pagination = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px 40px;
  ul {
    list-style: none;
  }
  ul,
  li {
    display: inline-block;
    padding: 0px 8px;
    font-size: 0.875rem !important;
    margin: 0px 10px;
    color: #707070;
  }
`;

const DThbar = styled.div`
  border-right: 1px solid #dddddd;
  cursor: pointer;
`;
const TableScroll = styled.div`
  overflow: scroll;
  height: calc(100vh - 585px);
  background: #ffffff;
  min-height: 200px;
`;

const DatasetTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    background: #f2f2f2;
  }
  tr:not(:first-of-type) {
    border-top: 1px solid #dddddd;
  }
  td:first-child {
    padding-left: 15px;
    color: #254067;
  }
  th:first-child {
    padding-left: 15px;
  }

  th:not(:last-of-type) {
    min-width: 140px;
  }

  th:last-child {
    width: 100%;
  }
  th {
    height: 40px;
    text-align: left;
    color: #707070;
    font-size: 0.75rem;
    font-weight: 500;
    position: relative;
    padding-left: 8px;
    img {
      margin-bottom: -2px;
    }
    img:first-child {
      margin-left: 8px;
      margin-right: 10px;
    }
    img:last-child {
      margin-left: 10px;
      margin-right: 8px;
      right: 0px;
      position: absolute;
    }
  }
  td:not(:last-of-type) {
  }
  td {
    height: 30px;
    background: #ffffff;
    color: #222222;
    font-size: 0.75rem;
    font-weight: 400;
    padding-left: 8px;
    img {
      margin-bottom: -2px;
    }
    img:first-child {
      margin-left: 8px;
      margin-right: 10px;
    }
    img:last-child {
      margin-left: 10px;
      margin-right: 8px;
      right: 0px;
      position: absolute;
    }
  }
`;
const BlueButton = styled.button`
  position: absolute;
  margin: 7px 15px 0px 0px;
  right: 0px;
  cursor: pointer;
  font-size: 0.75rem;
  color: #ffff;
  background-color: #254067;
  border: 1px solid #254067;
  padding: 2px 20px 5px 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  min-width: 1600px;
`;

const Dataset = styled.div`
  position: relative;
  margin: 20px 40px 0px 40px;
  background: #f5f5f5;
  border: 1px solid #dddddd;
  opacity: 1;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 7px 0px 7px 15px;
    display: inline-block;
  }
`;

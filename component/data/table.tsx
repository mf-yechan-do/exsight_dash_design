import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import React, { useState, Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../../store";
import FilterSelec from "../common/filterselec";

type Props = {
  store?: IStore;
};

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
@inject("store")
@observer
class Table extends Component<Props> {
  render() {
    const { store } = this.props;
    unprotect(store);
    const handleFilter = (filterId: any) => {
      store.setIdFilterBox(filterId);
    };
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
                    <span className="blue">info</span>
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
            <h3>Dataset</h3>
            <Search
              type="text"
              id="Search"
              name="Search"
              placeholder="Search"
            />
            <BlueButton>Add Data</BlueButton>
            <TableScroll>
              <DatasetTable>
                <tr
                  style={{
                    position: "sticky",
                    top: "0px",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <th>
                    <DThbar
                      onClick={(event) => {
                        handleFilter(!store.filter[0].id);
                      }}
                    >
                      Name
                      <Align />
                    </DThbar>
                    {store.filter[0].id == true ? <FilterSelec /> : ""}
                  </th>
                  <th>
                    <DThbar>
                      Domain
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      Description
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      Data Type
                      <Align />
                    </DThbar>
                    {store.isToggleOn4 ? " " : <FilterSelec />}
                  </th>
                  <th>
                    <DThbar>
                      Created
                      <Align />
                    </DThbar>
                    {store.isToggleOn5 ? " " : <FilterSelec />}
                  </th>
                  <th>
                    <DThbar>
                      Updated
                      <Align />
                    </DThbar>
                    {store.isToggleOn6 ? " " : <FilterSelec />}
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <a href="/data/dynamic">Out_stock</a>
                  </td>
                  <td>Prj1</td>
                  <td>출고량</td>
                  <td>Dynamic Real</td>
                  <td>2021/01/03</td>
                  <td>2021/01/03</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a href="/data/static">SKU_info</a>
                  </td>
                  <td>Prj1</td>
                  <td>SKU 정보</td>
                  <td>Static</td>
                  <td>2021/01/03</td>
                  <td>2021/01/03</td>
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
export default Table;

const SortBtn = styled.div`
  .selectbtn {
    color: #ffffff;
    background: #254067;
    svg > path {
      fill: #ffffff;
    }
    line {
      stroke: #ffffff;
    }
  }
  div {
    color: #254067;
    font-size: 0.75rem;
    border: 1px solid #dddddd;
    padding: 5px 15px;
    margin-top: 5px;
    display: inline-block;
    width: calc(50% - 3px);
    position: relative;
    cursor: pointer;
    img {
      display: inline-block !important;
      margin: 0px !important;
      right: 15px !important;
      top: 9px;
    }
    svg {
      display: inline-block !important;
      margin: 0px !important;
      right: 15px !important;
      top: 9px;
      position: absolute;
      path {
        fill: #254067;
      }
      line {
        stroke: #254067;
      }
    }
  }
  div:first-child {
    margin-right: 6px;
  }
`;
const FilterSelectBox = styled.div`
  width: 180px;
  height: 239px;
  background: #ffffff;
  border: 1px solid #aaaaaa;
  position: absolute;
`;
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
  height: calc(100vh - 210px);
  border-top: 1px solid #dddddd;
  background: #ffffff;
  min-height: 200px;
`;

const Search = styled.input`
  font-size: 0.75rem;
  width: 160px;
  height: 27px;
  color: rgba(59, 59, 59, 1);
  right: 118px;
  position: absolute;
  margin-bottom: 20px;
  padding: 0px 0px 0px 10px;
  margin: 7px 0px 0px 0px;
  border: solid 1px #aaaaaa;
  background: #ffffff;
  font-weight: 300;

  ::placeholder {
    color: #dddddd;
  }
  background-image: url(/images/search_icon.svg);
  background-position: 135px;
  background-repeat: no-repeat;
`;
const Search2 = styled.input`
  font-size: 0.75rem;
  width: 160px;
  height: 27px;
  color: rgba(59, 59, 59, 1);
  margin-bottom: 20px;
  padding: 0px 0px 0px 10px;
  margin: 10px 0px 5px 0px;
  border: solid 1px #dddddd;
  background: #ffffff;
  font-weight: 300;

  ::placeholder {
    color: #dddddd;
  }
  background-image: url(/images/search_icon.svg);
  background-position: 135px;
  background-repeat: no-repeat;
`;
const DatasetTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

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
      display: none;
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
const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
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
`;
const Dataset = styled.div`
  position: relative;
  margin: 20px 40px 0px 40px;
  background: #f5f5f5;
  border: 1px solid #dddddd;
  opacity: 1;
  min-width: 400px;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 7px 0px 7px 15px;
    display: inline-block;
  }
`;

const FBox = styled.div`
  border: 1px solid #dddddd;
  height: 140px;
  width: 160px;
  overflow: scroll;
`;

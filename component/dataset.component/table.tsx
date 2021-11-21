import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import React, { useState, Component } from "react";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import { IStore } from "../../store";

type Props = {
  store?: IStore;
};

function Align() {
  return (
    <svg className="tableAlign" width="10" height="13" viewBox="0 0 10 13">
      <g transform="translate(-476 -193)">
        <path
          d="M5,0l5,4H0Z"
          transform="translate(486 206) rotate(180)"
          fill="#707070"
        />
        <path d="M5,0l5,4H0Z" transform="translate(476 193)" fill="#707070" />
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

    return (
      <>
        <Container>
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
                    <DThbar>
                      <span className="blue">Name</span>
                      {/*
                    <img
                      src="/images/table_filter.svg"
                      alt="mofl logo"
                      height={14}
                    />*/}
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue">Domain</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue">Description</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue">Data Type</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue">Created</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue">Updated</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <a
                      onClick={(event) => {
                        store.ChangeMode("Dynamic");
                      }}
                    >
                      Out_stock
                    </a>
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
                    <a
                      onClick={(event) => {
                        store.ChangeMode("Static");
                      }}
                    >
                      SKU_info
                    </a>
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

const Pagination = styled.div`
  border-right: 1px solid #dddddd;
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
const Location = styled.div`
  padding-left: 40px;
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

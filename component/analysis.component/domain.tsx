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
export default class Domain extends Component<Props> {
  render() {
    const { store } = this.props;
    unprotect(store);

    return (
      <>
        <Container>
          <Tab>
            <Tabitem>
              <TabitemBar>frj 1</TabitemBar>
            </Tabitem>
            <Tabitem
              style={{
                paddingRight: "15px",
              }}
            >
              frj 2
            </Tabitem>
            <Tabitem2>
              <TabitemBar2>frj 3</TabitemBar2>
            </Tabitem2>
          </Tab>
          <Flex
            style={{
              paddingBottom: "40px",
            }}
          >
            <Dataset>
              <div
                style={{
                  width: "100%",
                  padding: "3px 0px 15px 0px",
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
              <div
                style={{
                  border: "1px solid #dddddd",
                  background: "#f5f5f5",
                }}
              >
                <h3>Domain Name:frj 1</h3>
                <Search
                  type="text"
                  id="Search"
                  name="Search"
                  placeholder="Search"
                />
              </div>
              <TableScroll>
                <DatasetTable>
                  <tr
                    style={{
                      position: "sticky",
                      top: "0px",
                      backgroundColor: "#f5f5f5",
                      zIndex: 100,
                    }}
                  >
                    <th>
                      <DThbar
                        style={{
                          height: "18px",
                        }}
                      ></DThbar>
                    </th>
                    <th>
                      <DThbar>
                        <span className="blue"> Name </span>
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
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                </DatasetTable>
              </TableScroll>
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
            </Dataset>
            <Dataset>
              <div
                style={{
                  width: "100%",
                  padding: "3px 0px 15px 0px",
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
              <div
                style={{
                  border: "1px solid #dddddd",
                  background: "#f5f5f5",
                }}
              >
                <h3>Domain Name:frj 2</h3>
                <Search
                  type="text"
                  id="Search"
                  name="Search"
                  placeholder="Search"
                />
              </div>
              <TableScroll>
                <DatasetTable>
                  <tr
                    style={{
                      position: "sticky",
                      top: "0px",
                      backgroundColor: "#f5f5f5",
                      zIndex: 100,
                    }}
                  >
                    <th>
                      <DThbar
                        style={{
                          height: "18px",
                        }}
                      ></DThbar>
                    </th>
                    <th>
                      <DThbar>
                        <span className="blue"> Name </span>
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
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>Out_stock</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" /> 
                    </td>
                    <td>SKU_info</td>
                    <td>Prj1</td>
                    <td>2021/01/03</td>
                    <td>2021/01/03</td>
                    <td></td>
                  </tr>
                </DatasetTable>
              </TableScroll>
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
            </Dataset>
          </Flex>
        </Container>
      </>
    );
  }
}

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
`;
const Tabitem = styled.div`
  display: inline-block;
  background: #254067;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 5px 0px 5px 15px;
`;
const Tabitem2 = styled.div`
  display: inline-block;
  color: #707070;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 5px 0px 5px 15px;
`;
const TabitemBar2 = styled.div`
  border-right: 1px solid #707070;
  padding-right: 15px;
`;
const Tab = styled.div`
  border-bottom: 2px solid #254067;
  margin-bottom: 10px;
`;
const TabitemBar = styled.div`
  border-right: 1px solid #adb7c6;
  padding-right: 15px;
`;
const Flex = styled.div`
  display: flex;
`;

const Container = styled.div`
  margin: 20px 40px 0px 40px;
  width: calc(100% - 80px);
  min-width: 1050px;
`;

const TableScroll = styled.div`
  overflow-y: scroll;
  height: 400px;
  background: #ffffff;
  border-right: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
`;

const Search = styled.input`
  font-size: 0.75rem;
  width: 160px;
  height: 27px;
  color: rgba(59, 59, 59, 1);
  right: 15px;
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
    border-bottom: 1px solid #dddddd;
    background: #f5f5f5;
  }
  td:first-child {
    padding-left: 15px;
    color: #254067;
  }
  th:first-child {
    padding-left: 15px;
    width: 50px !important;
  }

  th:not(:last-of-type) {
    width: 150px;
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

const Dataset = styled.div`
  position: relative;
  margin: 0px 5px 0px 0px;
  :last-of-type {
    margin: 0px 0px 0px 5px;
  }
  opacity: 1;
  width: 50%;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 7px 0px 7px 15px;
    display: inline-block;
  }
`;

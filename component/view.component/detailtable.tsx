import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";

const Title = styled.div`
  background: #f5f5f5;
  border: 1px solid #dddddd;
  position: relative;
  cursor: pointer;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 7px 0px 7px 15px;
    display: inline-block;
  }
  img {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;
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
export default function DetailTable() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Container>
        <Dataset>
          <Title onClick={() => setVisible(!visible)}>
            <h3>Settings History</h3>
            <img src="/images/big_arrow.svg" />
          </Title>
          {visible && (
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
                      <span className="blue"> Dynamic Data </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Static Data </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Status </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue">Join Feature</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Time Period </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Aggregation</span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Group by Feature </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Aggregation </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      <span className="blue"> Version History </span>
                      <Align />
                    </DThbar>
                  </th>
                  <th></th>
                </tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
                <Tr>
                  <td>Out_stock</td>
                  <td>SKU_info</td>
                  <td>
                    <span style={{ color: "#1D8102" }}>Active</span>
                  </td>
                  <td>Feature 1, Feature 2</td>
                  <td>2 Year</td>
                  <td>Min</td>
                  <td>Feature 1, Feature 2</td>
                  <td>Min</td>
                  <td>September 23, 2021 11:29 AM</td>
                  <td></td>
                </Tr>
              </DatasetTable>
            </TableScroll>
          )}
        </Dataset>
      </Container>
    </>
  );
}

const Tr = styled.tr`
  :hover td {
    background: #dfe7f5 !important;
    color: #254067 !important;
  }
`;
const DThbar = styled.div`
  border-right: 1px solid #dddddd;
`;
const TableScroll = styled.div`
  overflow: scroll;
  height: 300px;
  background: #ffffff;
  min-height: 200px;
  border-right: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
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
  }
  th:first-child {
    padding-left: 15px;
  }

  th:not(:last-of-type) {
    min-width: 180px;
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

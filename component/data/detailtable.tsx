import styled from "styled-components";
import React from "react";

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
                    Dynamic Data
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Static Data
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Status
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Join Feature
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Time Period
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Aggregation
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Group by Feature
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Aggregation
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    Version History
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
    </>
  );
}

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

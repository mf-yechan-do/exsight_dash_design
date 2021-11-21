import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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
export default function ViewTable() {
  return (
    <>
      <Container>
        <Dataset>
          <TableScroll>
            <DatasetTable>
              <tr>
                <th>
                  <DThbar>
                    <span className="blue"> ID </span>
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    <span className="blue"> Goods_code </span>
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    <span className="blue"> Febric </span>
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    <span className="blue"> Color </span>
                    <Align />
                  </DThbar>
                </th>
                <th>
                  <DThbar>
                    <span className="blue"> Size </span>
                    <Align />
                  </DThbar>
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
            </DatasetTable>
          </TableScroll>
        </Dataset>
      </Container>
    </>
  );
}

const DThbar = styled.div`
  border-right: 1px solid #dddddd;
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

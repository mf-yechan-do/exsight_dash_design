import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.div`
  background: #f5f5f5;
  border-bottom: 1px solid #dddddd;
  position: relative;
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
export default function DetailTable() {
  return (
    <>
      <Container>
        <Dataset>
          <Title>
            <h3>Settings History</h3>
            <img src="/images/big_arrow.svg" />
          </Title>
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
                  Dynamic Data
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Static Data
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Status
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Join Feature
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Time Period
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Aggregation
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Group by Feature
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Aggregation
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th>
                  Version History
                  <img
                    src="/images/table_filter.svg"
                    alt="mofl logo"
                    height={14}
                  />
                  <img
                    src="/images/table_align.svg"
                    alt="mofl logo"
                    height={14}
                  />
                </th>
                <th></th>
              </tr>
              <tr>
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
              </tr>
              <tr>
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
              </tr>
              <tr>
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
  height: 300px;
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

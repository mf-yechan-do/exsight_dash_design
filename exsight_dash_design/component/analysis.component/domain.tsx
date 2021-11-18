import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Domain() {
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
            <h3>Domain Name:frj 1</h3>
            <Search
              type="text"
              id="Search"
              name="Search"
              placeholder="Search"
            />
            <TableScroll>
              <DatasetTable>
                <tr>
                  <th>
                    <DThbar>
                      Name
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
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      Domain
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
                    </DThbar>
                  </th>

                  <th>
                    <DThbar>
                      Created
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
                    </DThbar>
                  </th>
                  <th>
                    <DThbar>
                      Updated
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
                    </DThbar>
                  </th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <a href="/Dview">Out_stock</a>
                  </td>
                  <td>Prj1</td>
                  <td>2021/01/03</td>
                  <td>2021/01/03</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <a href="/view">SKU_info</a>
                  </td>
                  <td>Prj1</td>
                  <td>2021/01/03</td>
                  <td>2021/01/03</td>
                  <td></td>
                </tr>
              </DatasetTable>
            </TableScroll>
          </Dataset>
          <Dataset>
            <h3>Prediction List</h3>
            <Search
              type="text"
              id="Search"
              name="Search"
              placeholder="Search"
            />
            <TableScroll>
              <DatasetTable>
                <tr>
                  <th>
                    Name
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
                    Domain
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
                    Description
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
                    Data Type
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
                    Created
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
                    Updated
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
                  <td>
                    <a href="/Dview">Out_stock</a>
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
                    <a href="/view">SKU_info</a>
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
        </Flex>
      </Container>
    </>
  );
}

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
const GBox = styled.div`
  :not(:last-of-type) {
    margin-right: 10px;
  }
  :last-child {
    height: 208px;
    overflow: hidden;
  }
`;
const FBox = styled.div`
  border: 1px solid #aaaaaa;
  height: 160px;
  width: 160px;
`;
const Flex = styled.div`
  display: flex;
`;

const Container = styled.div`
  margin: 20px 40px 0px 40px;
  width: calc(100% - 80px);
  min-width: 1050px;
`;

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
const Info = styled.div`
  background: #ffffff;
  display: flex;
  h5 {
    margin: 0px;
    font-size: 0.875rem;
    color: #222222;
    padding-bottom: 3px;
    font-weight: 500;
  }
  h6 {
    margin: 0px;
    font-size: 0.75rem;
    color: #222222;
    font-weight: 400;
    padding-bottom: 3px;
  }
  p {
    margin: 0px;
    font-size: 0.75rem;
    color: #222222;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

const InfoBox = styled.div`
  margin: 10px 0px 10px 15px;
  :not(:last-of-type) {
    border-right: 1px solid #dddddd;
  }
  padding-right: 15px;
`;

const TableScroll = styled.div`
  overflow-y: scroll;
  height: 400px;
  background: #ffffff;
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

const SelectedDatasetTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
  }
  td:first-child {
    padding-left: 15px;
    color: #254067;
  }
  th:first-child {
    padding-left: 15px;
  }

  th:not(:last-of-type) {
    width: 150px;
  }
  th {
    height: 40px;
    text-align: left;
    color: #ffffff;
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

const DatasetTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
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

const WButton = styled.button`
  position: absolute;
  margin: 7px 15px 0px 0px;
  right: 0px;
  cursor: pointer;
  font-size: 0.75rem;
  color: #254067;
  background-color: #ffff;
  border: 1px solid #254067;
  padding: 2px 20px 5px 20px;
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

const SelectedDataset = styled.div`
  position: relative;
  margin: 00px 5px 10px 10px;
  :last-of-type {
    margin: 00px 10px 10px 5px;
  }
  background: #254067;
  border: 1px solid #dddddd;
  opacity: 1;
  width: 50%;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #ffffff;
    font-weight: 500;
    padding: 7px 0px 7px 15px;
    display: inline-block;
  }
`;
const Dataset = styled.div`
  position: relative;
  margin: 0px 5px 0px 0px;
  :last-of-type {
    margin: 0px 0px 0px 5px;
  }
  background: #f5f5f5;
  border: 1px solid #dddddd;
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

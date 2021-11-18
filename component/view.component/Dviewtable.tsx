import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ViewTable() {
  return (
    <>
      <Container>
        <Dataset>
          <TableScroll>
            <DatasetTable>
              <tr>
                <th>
                  Id
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
                  Goods_code
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
                  Febric
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
                  Color
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
                  Size
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
                <th>2018/05/27</th>
                <th>2018/05/27</th>
                <th>2018/05/27</th>
                <th>2018/05/27</th>
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
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td>0.0</td>
                <td></td>
              </tr>
            </DatasetTable>
          </TableScroll>
        </Dataset>
      </Container>
    </>
  );
}

const TableScroll = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 510px);
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
    border-right: 1px solid #dddddd;
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
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 7px 0px 7px 15px;
    display: inline-block;
  }
`;

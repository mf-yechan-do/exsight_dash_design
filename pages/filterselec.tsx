import React, { Component } from "react";
import styled from "styled-components";

export default function FilterSelec() {
  return (
    <FilterSelectBox>
      <Flex2>
        <SortBtn>
          <div className="selectbtn">
            Asc
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
            >
              <path d="M3,0,6,4H0Z" fill="#707070" />
              <line
                y2="6.5"
                transform="translate(3 2.5)"
                fill="none"
                stroke="#707070"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div>
            Desc
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="9"
              viewBox="0 0 6 9"
            >
              <g transform="translate(6 9) rotate(180)">
                <path d="M3,0,6,4H0Z" />
                <line
                  y2="6.5"
                  transform="translate(3 2.5)"
                  fill="none"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>
        </SortBtn>
        <Search2 type="text" id="Search" name="Search" placeholder="Search" />

        <FBox>
          <form>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
            <div
              style={{
                fontSize: "0.625rem",
                height: "20px",

                borderBottom: "1px solid #dddddd",
                color: "#707070",
              }}
            >
              <Flex>
                <input
                  type="radio"
                  style={{
                    marginRight: "8px",
                  }}
                />
                 
                <label
                  style={{
                    paddingTop: "2px",
                  }}
                >
                  Feature
                </label>
              </Flex>
            </div>
          </form>
        </FBox>
      </Flex2>
    </FilterSelectBox>
  );
}

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
  z-index: 10;
  top: 40px;
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
const Flex = styled.div`
  display: flex;
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

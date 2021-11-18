import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";

export default function OverView() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Container>
        <Title onClick={() => setVisible(!visible)}>
          <h3>OverView</h3>
          <img src="/images/big_arrow.svg" />
        </Title>
        {visible && (
          <Info>
            <div>
              <h6>Name</h6>
              <p>Out_stock</p>
              <h6>Domain</h6>
              <p>Prj1</p>
              <h6>Description</h6>
              <p>출고량</p>
            </div>
            <div>
              <h6>Data Type</h6>
              <p>Dynamic Real</p>
              <h6>Created</h6>
              <p>2021/01/03</p>
              <h6>Updated</h6>
              <p>2021/01/03</p>
            </div>
            <div>
              <h6>row and column</h6>
              <p>-</p>
              <h6>Data storage locaion</h6>
              <p>
                row:5
                <br />
                column:7
              </p>
            </div>
          </Info>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 20px 10px 0px 40px;
  width: calc(25% - 50px);
  min-width: 350px;
`;

const Title = styled.div`
  background: #f5f5f5;
  position: relative;
  border: 1px solid #dddddd;
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
const Info = styled.div`
  background: #ffffff;
  display: flex;
  padding: 10px 15px;
  height: calc(100% - 41px);
  height: 260px;
  border-right: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  h6 {
    margin: 0px;
    font-size: 0.75rem;
    color: #707070;
    font-weight: 500;
  }
  p {
    margin: 0px;
    font-size: 0.75rem;
    color: #222222;
    font-weight: 400;
    margin-bottom: 40px;
  }
  div:not(:last-of-type) {
    border-right: 1px solid #dddddd;
    width: 33%;
  }
  div:not(:first-of-type) {
    padding-left: 15px;
  }
`;

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <InlineFlex>
        <Exp>
          <h3>EXP Groups</h3>
          <div>
            <Button>View details</Button>
            <DeleteBtn>Delete</DeleteBtn>
            <BlueButton>Create EXP group</BlueButton>
          </div>
        </Exp>

        <Flex>
          <Resouces>
            <h3>Resouces</h3>
          </Resouces>
          <Status>
            <h3>Status</h3>
          </Status>
        </Flex>
      </InlineFlex>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InlineFlex = styled.div`
  margin: 20px 40px 20px 40px;
  min-width: 700px;
  h1 {
    font-size: 1.75rem;
    margin: 0px;
    font-weight: 400;
    color: #222222;
    padding: 20px 0px 0px 40px;
  }
`;

const Exp = styled.div`
  min-height: 200px;
  width: 100%;
  height: calc(50vh - 80px);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
  position: relative;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 10px 0px 0px 15px;
    display: inline-block;
  }
`;
const Resouces = styled.div`
  min-height: 200px;
  width: calc(50% - 10px);
  height: calc(50vh - 80px);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 10px 0px 0px 15px;
    display: inline-block;
  }
`;
const Status = styled.div`
  min-height: 200px;
  margin-left: 20px;
  width: calc(50% - 10px);
  height: calc(50vh - 80px);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  opacity: 1;
  h3 {
    margin: 0px;
    font-size: 1.125rem;
    color: #254067;
    font-weight: 500;
    padding: 10px 0px 0px 15px;
    display: inline-block;
  }
`;
const Button = styled.button`
  cursor: pointer;
  margin: 13px 15px 10px 10px;
  font-size: 0.75rem;
  color: #707070;
  background-color: #ffffff;
  border: 1px solid #888888;
  padding: 3px 20px 4px 20px;
  position: absolute;
  right: 240px;
  top: 0px;
`;
const DeleteBtn = styled.button`
  cursor: pointer;
  margin: 13px 15px 10px 10px;
  font-size: 0.75rem;
  color: #707070;
  background-color: #ffffff;
  border: 1px solid #888888;
  padding: 3px 20px 4px 20px;
  position: absolute;
  right: 150px;
  top: 0px;
`;
const BlueButton = styled.button`
  cursor: pointer;
  margin: 13px 15px 10px 10px;
  font-size: 0.75rem;
  color: #ffff;
  background-color: #254067;
  border: 1px solid #254067;
  padding: 2px 20px 5px 20px;
  position: absolute;
  right: 0px;
  top: 0px;
`;
const P = styled.p`
  margin: 25px 0px 0px 0px;
  color: #707070;
  font-size: 0.75rem;
  left: 320px;
  position: absolute;
`;

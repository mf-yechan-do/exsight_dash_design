import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <>
      <Bg>
        <Centerbox>
          <Center>
            <Loginbox>
              <div>
                <Logo src="/images/mofl-logo.png" />
              </div>
              {/*<form>*/}
              <div>
                <Input type="text" id="id" name="id" placeholder="ID" />
                <Input
                  type="text"
                  id="Password"
                  name="Password"
                  placeholder="Password"
                />
              </div>
              <a href="/home">
                <LoginBtn
                  type="submit"
                  title="로그인"
                  alt="로그인"
                  value="로그인"
                />
              </a>
              {/*</form>*/}
              <Find>
                <a href="#">비밀번호 찾기</a>
                <Bar>|</Bar>
                <a href="#">회원가입</a>
              </Find>
            </Loginbox>
          </Center>
        </Centerbox>
      </Bg>
    </>
  );
}

const Find = styled.div`
  text-align: center;
  margin-top: 30px;
  a {
    font-size: 0.875rem;
    font-weight: 400;
    color: #707070;
  }
`;

const Bar = styled.div`
  margin: 0 10px;
  display: inline-block;
  color: #707070;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(/images/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Logo = styled.img`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 70px;
`;

const Centerbox = styled.div`
  height: 100%;
`;

const Center = styled.div`
  display: grid;
  place-items: center;
  min-height: 100%;
`;
const Loginbox = styled.div`
  vertical-align: middle;
  width: 500px;
  height: 515px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(11 37 75 / 10%) 0px 15px 30px;
  opacity: 1;
  text-align: center;
  h1 {
    margin-top: 80px;
    margin-bottom: 40px;
    color: rgb(37, 64, 103);
    font-size: 1.875rem;
    font-weight: 500;
  }
`;
const Input = styled.input`
  font-size: 20px;
  width: 388px;
  color: rgba(59, 59, 59, 1);
  position: relative;
  margin-bottom: 20px;
  padding: 15px 35px 16px 20px;
  border: solid 1px rgba(222, 222, 222, 1);
  background: rgba(248, 248, 248, 1);
  height: 60px;
  font-weight: 300;

  ::placeholder {
    color: rgba(178, 178, 178, 0.5);
  }
`;
const LoginBtn = styled.input`
  cursor: pointer;
  font-size: 21px;
  width: 388px;
  height: 60px;
  border: none;
  background: rgba(37, 64, 103, 1);
  color: #ffffff;
  margin-top: 10px;
`;

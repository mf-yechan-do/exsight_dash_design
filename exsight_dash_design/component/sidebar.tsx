import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function SideBar() {
  return (
    <>
      <Sidebar>
        <Container>
          <Nav>
            <h2>
              ExSight Dash
              <img
                style={{
                  position: "absolute",
                  top: "27px",
                  right: "25px",
                }}
                src="/images/close.svg"
                alt="mofl logo"
                height={16}
              />
            </h2>
            <ul>
              <li>
                <Link href="#">
                  <a>
                    <img
                      src="/images/black_arrow.svg"
                      alt="mofl logo"
                      height={5}
                    />
                    Exp Group 1
                  </a>
                </Link>

                <ul>
                  <li>
                    <Link href="#">Datasets</Link>
                  </li>
                  <li>
                    <Link href="#">Predictors</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <img
                      style={{
                        transform: "rotate( -90deg )",
                      }}
                      src="/images/black_arrow.svg"
                      alt="mofl logo"
                      height={5}
                    />
                    Exp Group 2
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dataset">
                  <a>
                    <span style={{ paddingLeft: "13px" }}>Dataset</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span style={{ paddingLeft: "13px" }}>Forecast</span>
                </Link>
              </li>
              <li>
                <Link href="/analysis">
                  <a>
                    <span style={{ paddingLeft: "13px" }}>Analysis</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span style={{ paddingLeft: "13px" }}>Experiments</span>
                </Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Sidebar>
    </>
  );
}

const Sidebar = styled.div`
  position: relative;
  width: 280px;
  min-width: 220px;
  min-height: calc(100vh - 40px);
  background: #fff;
  h2 {
    margin: 0px;
    font-size: 1.25rem;
    color: #254067;
    font-weight: 500;
    line-height: 70px !important;
    padding-left: 40px;
  }
`;
const Nav = styled.nav`
  img {
    margin: 0px 5px 4px 0px;
  }
  li {
    list-style: none;
    padding-left: 25px;
    font-size: 1rem;
    font-weight: 300;
    border-top: 1px solid #eeeeee;
    font-weight: 400;
    padding-left: 40px;
    line-height: 50px !important;
  }
  li > ul > li {
    font-size: 0.875rem;
    background-color: #fbfbfb;
    font-weight: 400;
    padding-left: 40px;
    line-height: 30px !important;
    padding-left: 13px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

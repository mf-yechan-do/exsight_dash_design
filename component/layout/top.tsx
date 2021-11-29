import Link from "next/link";
import styled from "styled-components";

export default function HomeTop() {
  return (
    <>
      <Header>
        <Container>
          <Link href="/">
            <a>
              <Img src="/images/logo.svg" alt="mofl logo" height={24} />
            </a>
          </Link>
          <Nav>
            <ul>
              <li>
                <Link href="#">Date Catalog</Link>
              </li>
              <Bar>|</Bar>
              <li>
                <Link href="#">
                  <a>
                    Switch Project
                    <img
                      src="/images/top_arrow.svg"
                      alt="mofl logo"
                      height={5}
                    />
                  </a>
                </Link>
              </li>
              <Bar>|</Bar>
              <li>
                <Link href="#">
                  <a>
                    MOFL
                    <img
                      src="/images/top_arrow.svg"
                      alt="mofl logo"
                      height={5}
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Header>
    </>
  );
}

const Img = styled.img`
  margin: 8px 0px;
`;
const Bar = styled.div`
  margin: 0 10px;
  display: inline-block;
  color: #ffffff;
  margin: 0 10px;
  display: inline-block;
  color: #ffffff;
  opacity: 0.7;
  font-weight: 100;
`;

const Header = styled.header`
  width: 100%;
  height: 40px;
  background: var(--unnamed-color-254067) 0% 0% no-repeat padding-box;
  background: #254067 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Nav = styled.nav`
  img {
    margin: 0px 0px 3px 5px;
  }
  position: absolute;
  right: 40px;
  top: 0;
  display: flex;
  height: 36px;
  align-items: center;
  li {
    list-style: none;
    display: inline-block;
    color: #fff;
    line-height: 1;
    font-size: 0.875rem;
    font-weight: 300;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: 0px 40px;
`;

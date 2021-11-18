import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const TabitemBar2 = styled.div`
  border-right: 1px solid #dddddd;
  padding-right: 15px;
`;
export default function GSettings() {
  return (
    <>
      <Container>
        <Flex>
          <Title>
            <h3
              style={{
                width: "100%",
              }}
            >
              <TabitemBar2>Global Settings</TabitemBar2>
            </h3>
          </Title>
          <DTitle>
            <h3>Domain Settings</h3>
            <img src="/images/big_arrow.svg" />
          </DTitle>
        </Flex>
        <Flex>
          {" "}
          <Info>
            <InfoBox
              style={{
                borderRight: "1px solid #dddddd",
              }}
            >
              <Flex>
                <div>
                  <h5>Frequency</h5>
                  <h6>Time period</h6>
                  <Search type="text" id="No." name="No." placeholder="No." />
                  <Form>
                    <div>
                      <input type="radio" value="None" /> <label>Years</label>
                      <br />
                      <input type="radio" value="Max" /> <label>Months</label>
                    </div>
                    <div>
                      <input type="radio" value="Min" /> <label>Days</label>
                      <br />
                      <input type="radio" value="Sum" /> <label>Hours</label>
                    </div>
                  </Form>
                </div>
                <div
                  style={{
                    paddingLeft: "10px",
                  }}
                >
                  <h6
                    style={{
                      paddingTop: "23px",
                    }}
                  >
                    Aggregation
                  </h6>
                  <Form>
                    <div>
                      <input type="radio" value="None" /> <label>None</label>
                      <br />
                      <input type="radio" value="Max" /> <label>Max</label>
                      <br />
                      <input type="radio" value="Mean" /> <label>Mean</label>
                    </div>
                    <div>
                      <input type="radio" value="Min" /> <label>Min</label>
                      <br />
                      <input type="radio" value="Sum" /> <label>Sum</label>
                      <br />
                      <input type="radio" value="Count" /> <label>Count</label>
                    </div>
                  </Form>
                </div>
                <div
                  style={{
                    paddingLeft: "10px",
                  }}
                >
                  <h5>Period</h5>
                  <div
                    style={{
                      border: "1px solid #AAAAAA",
                    }}
                  >
                    <Input type="date"></Input>~<Input type="date"></Input>
                  </div>
                </div>
              </Flex>
            </InfoBox>
          </Info>
          <DInfo>
            <InfoBox>
              <h5>Group by</h5>
              <Flex>
                <GBox>
                  <h6>Feature List</h6>
                  <FBox></FBox>
                  <Search
                    type="text"
                    id="Search"
                    name="Search"
                    placeholder="Search"
                  />
                </GBox>
                <GBox>
                  <h6>Selected Feature</h6>
                  <FBox></FBox>
                </GBox>
                <GBox>
                  <h6>Aggregation</h6>
                  <Form>
                    <div>
                      <input type="radio" value="None" /> <label>None</label>
                      <br />
                      <input type="radio" value="Max" /> <label>Max</label>
                      <br />
                      <input type="radio" value="Mean" /> <label>Mean</label>
                    </div>
                    <div>
                      <input type="radio" value="Min" /> <label>Min</label>
                      <br />
                      <input type="radio" value="Sum" /> <label>Sum</label>
                      <br />
                      <input type="radio" value="Count" /> <label>Count</label>
                    </div>
                  </Form>
                </GBox>
              </Flex>
            </InfoBox>
          </DInfo>
        </Flex>
        <BlueButton>Add</BlueButton>
      </Container>
    </>
  );
}
const Input = styled.input`
  margin: 0px;
  font-size: 0.75rem;
  color: #222222;
  font-weight: 400;
  border: 0px;
  padding: 0px 0px 5px 15px;
  ::-webkit-calendar-picker-indicator {
    background: none;
  }
  :last-of-type::-webkit-calendar-picker-indicator {
    background: url(/images/date.svg) no-repeat;
    background-position: 0px 3px;
  }
`;

const BlueButton = styled.button`
  position: absolute;
  margin: 7px 15px 10px 0px;
  right: 0px;
  cursor: pointer;
  font-size: 0.75rem;
  color: #ffff;
  background-color: #254067;
  border: 1px solid #254067;
  padding: 2px 20px 5px 20px;
  bottom: 0px;
`;
const Search = styled.input`
  font-size: 0.75rem;
  width: 160px;
  height: 27px;
  color: rgba(59, 59, 59, 1);
  margin-bottom: 20px;
  padding: 0px 0px 0px 10px;
  margin: 7px 0px 0px 0px;
  border: solid 1px #aaaaaa;
  background: #ffffff;
  font-weight: 300;

  ::placeholder {
    color: #dddddd;
  }
  background-position: 135px;
  background-repeat: no-repeat;
`;
const Form = styled.form`
  min-width: 135px;
  display: table;
  input {
    margin-left: 0px;
  }
  label {
    margin: 0px;
    font-size: 0.75rem;
    color: #222222;
    font-weight: 400;
    padding-bottom: 3px;
  }
  div {
    display: table-cell;
  }
  div :last-child {
    padding-left: 20px;
  }
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
  border: 1px solid #dddddd;
  min-width: 1050px;
  position: relative;
`;

const Title = styled.div`
  background: #f5f5f5;
  border-bottom: 1px solid #dddddd;
  position: relative;
  width: 50%;
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
const DTitle = styled.div`
  background: #f5f5f5;
  border-bottom: 1px solid #dddddd;
  position: relative;
  width: 50%;
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
  width: 50%;
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
const DInfo = styled.div`
  background: #ffffff;
  display: flex;
  width: 50%;
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

  width: 100%;
  :not(:last-of-type) {
    border-right: 1px solid #dddddd;
  }
  padding-right: 15px;
`;

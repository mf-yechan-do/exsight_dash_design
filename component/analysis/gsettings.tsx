import styled from "styled-components";
import React, { useState } from "react";

export default function GSettings() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Container>
        <Flex onClick={() => setVisible(!visible)}>
          <Title>
            <h3>
              <TabitemBar3>Global Settings</TabitemBar3>
            </h3>
          </Title>
          <DTitle>
            <h3>Domain Settings</h3>
            <img src="/images/big_arrow.svg" />
          </DTitle>
        </Flex>
        {visible && (
          <Flex2>
            <Info>
              <InfoBox>
                <Flex>
                  <div>
                    <h5>Frequency</h5>
                    <h6>Time period</h6>
                    <Search type="text" id="No." name="No." placeholder="No." />
                    <Form>
                      <div>
                        <Flex>
                          <input
                            id="year"
                            type="radio"
                            name="period"
                            value="Years"
                          />
                           <label htmlFor="year">Years</label>
                        </Flex>

                        <Flex>
                          <input
                            id="months"
                            type="radio"
                            name="period"
                            value="Months"
                          />
                           <label htmlFor="months">Months</label>
                        </Flex>
                      </div>
                      <div>
                        <Flex>
                          <input
                            id="days"
                            type="radio"
                            name="period"
                            value="Days"
                          />
                           <label htmlFor="days">Days</label>
                        </Flex>
                        <Flex>
                          <input
                            id="hours"
                            type="radio"
                            name="period"
                            value="Hours"
                          />
                           <label htmlFor="hours">Hours</label>
                        </Flex>
                      </div>
                    </Form>
                  </div>
                  <Frequency_Aggregation>
                    <h6>Aggregation</h6>
                    <Form>
                      <div>
                        <Flex>
                          <input
                            id="none"
                            name="aggregation"
                            type="radio"
                            value="None"
                          />
                           <label htmlFor="none">None</label>
                        </Flex>
                        <Flex>
                          <input
                            id="max"
                            name="aggregation"
                            type="radio"
                            value="Max"
                          />
                           <label htmlFor="max">Max</label>
                        </Flex>
                        <Flex>
                          <input
                            id="mean"
                            name="aggregation"
                            type="radio"
                            value="Mean"
                          />
                           <label htmlFor="mean">Mean</label>
                        </Flex>
                      </div>
                      <div>
                        <Flex>
                          <input
                            id="min"
                            name="aggregation"
                            type="radio"
                            value="Min"
                          />
                           <label htmlFor="min">Min</label>
                        </Flex>
                        <Flex>
                          <input
                            id="sum"
                            name="aggregation"
                            type="radio"
                            value="Sum"
                          />
                           <label htmlFor="sum">Sum</label>
                        </Flex>
                        <Flex>
                          <input
                            id="count"
                            name="aggregation"
                            type="radio"
                            value="Count"
                          />
                           <label htmlFor="count">Count</label>
                        </Flex>
                      </div>
                    </Form>
                  </Frequency_Aggregation>
                  <Period>
                    <h5>Period</h5>
                    <Date>
                      <Input type="date"></Input>~<Input type="date"></Input>
                    </Date>
                  </Period>
                </Flex>
              </InfoBox>
            </Info>
            <DInfo>
              <InfoBox>
                <Flex>
                  <h5>Group by</h5>
                  <Tab>
                    <Tabitem>frj 1</Tabitem>
                    <Tabitem2>
                      <TabitemBar2>frj 2</TabitemBar2>
                    </Tabitem2>
                    <Tabitem2>
                      <TabitemBar2>frj 3</TabitemBar2>
                    </Tabitem2>
                  </Tab>
                </Flex>
                <Flex>
                  <GroupBy_Width></GroupBy_Width>
                  <GBox>
                    <h6>Feature List</h6>
                    <FBox>
                      <FeatureForm>
                        <div>
                          <Flex>
                            <input id="Feature" type="radio" /> 
                            <label htmlFor="Feature">Feature</label>
                          </Flex>
                        </div>
                        <div>
                          <Flex>
                            <input id="Feature1" type="radio" /> 
                            <label htmlFor="Feature1">Feature1</label>
                          </Flex>
                        </div>
                        <div>
                          <Flex>
                            <input id="Feature2" type="radio" /> 
                            <label htmlFor="Feature2">Feature2</label>
                          </Flex>
                        </div>
                      </FeatureForm>
                    </FBox>
                    <Search
                      type="text"
                      id="Search"
                      name="Search"
                      placeholder="Search"
                    />
                  </GBox>
                  <GBox>
                    <h6>Selected Feature</h6>
                    <FBox>
                      <Selected_Feature_Box>
                        Feature
                        <div></div>
                        <span>X</span>
                      </Selected_Feature_Box>
                    </FBox>
                  </GBox>
                  <GBox>
                    <h6>Aggregation</h6>
                    <Form>
                      <div>
                        <Flex>
                          <input
                            id="GroupBy_none"
                            name="GroupBy_aggregation"
                            type="radio"
                            value="None"
                          />
                           <label htmlFor="GroupBy_none">None</label>
                        </Flex>
                        <Flex>
                          <input
                            id="GroupBy_max"
                            name="GroupBy_aggregation"
                            type="radio"
                            value="Max"
                          />
                           <label htmlFor="GroupBy_max">Max</label>
                        </Flex>
                        <Flex>
                          <input
                            id="GroupBy_mean"
                            name="GroupBy_aggregation"
                            type="radio"
                            value="Mean"
                          />
                           <label htmlFor="GroupBy_mean">Mean</label>
                        </Flex>
                      </div>
                      <div>
                        <Flex>
                          <input
                            id="GroupBy_min"
                            name="GroupBy_aggregation"
                            type="radio"
                            value="Min"
                          />
                           <label htmlFor="GroupBy_min">Min</label>
                        </Flex>
                        <Flex>
                          <input
                            id="GroupBy_sum"
                            name="GroupBy_aggregation"
                            type="radio"
                            value="Sum"
                          />
                           <label htmlFor="GroupBy_sum">Sum</label>
                        </Flex>
                        <Flex>
                          <input
                            id="GroupBy_count"
                            name="GroupBy_aggregation"
                            type="radio"
                            value="Count"
                          />
                           <label htmlFor="GroupBy_count">Count</label>
                        </Flex>
                      </div>
                    </Form>
                  </GBox>
                </Flex>
              </InfoBox>
            </DInfo>
          </Flex2>
        )}
        {visible && <BlueButton>Apply</BlueButton>}
      </Container>
    </>
  );
}

const GroupBy_Width = styled.div`
  width: 80px;
`;
const Selected_Feature_Box = styled.div`
  font-size: 0.625rem;
  color: #222222;
  background: #dddddddd;
  padding: 5px 10px;
  display: inline-block;
  margin: 5px 0px 0px 5px;
  div {
    display: inline-block;
    width: 1px;
    background: #222222;
    height: 8px;
    margin: 0px 5px 0px 10px;
    cursor: pointer;
  }
`;
const Period = styled.div`
  paddingleft: "10px";
`;
const Date = styled.div`
  margin-top: 5px;
  border: 1px solid #aaaaaa;
`;
const Frequency_Aggregation = styled.div`
  padding-left: 10px;
  padding-top: 23px;
  padding-bottom: 7px;
`;
const FeatureForm = styled.form`
  div {
    font-size: 0.625rem;
    height: 20px;
    border-bottom: 1px solid #dddddd;
    color: #707070;
  }
  input {
    marginright: 8px;
  }
  label {
    paddingtop: 2px;
  }
`;
const TabitemBar3 = styled.div`
  border-right: 1px solid #dddddd;
  padding-right: 15px;
`;
const Tabitem = styled.div`
  display: inline-block;
  background: #254067;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 2px 12px 3px 12px;
`;
const Tabitem2 = styled.div`
  display: inline-block;
  color: #707070;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 2px 0px 3px 12px;
`;
const TabitemBar2 = styled.div`
  border-right: 1px solid #707070;
  padding-right: 12px;
`;
const Tab = styled.div`
  border-bottom: 2px solid #254067;
  margin-bottom: 10px;
  width: calc(100% - 80px);
}
`;
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

  :first-child::-webkit-calendar-picker-indicator {
    display: none;
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
  margin: 6px 0px 5px 0px;
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
  display: flex;
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
    width: 50%;
  }
  div:last-child {
  }
`;
const GBox = styled.div`
  :not(:last-of-type) {
    margin-right: 10px;
  }
  :last-child {
    overflow: hidden;
  }
`;
const FBox = styled.div`
  border: 1px solid #aaaaaa;
  height: 100px;
  width: 160px;
  overflow: scroll;
`;
const Flex = styled.div`
  display: flex;
`;
const Flex2 = styled.div`
  border-top: 1px solid #dddddd;
  display: flex;
`;

const Container = styled.div`
  margin: 20px 40px 0px 40px;
  width: calc(100% - 80px);
  border: 1px solid #dddddd;
  min-width: 1200px;
  position: relative;
`;

const Title = styled.div`
  background: #f5f5f5;
  position: relative;
  width: 50%;
  cursor: pointer;
  h3 {
    width: 100%;
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
  position: relative;
  width: 50%;
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
    padding-bottom: 7px;
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
    width: 80px;
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
  :first-child {
    border-right: 1px solid #dddddd;
  }
`;

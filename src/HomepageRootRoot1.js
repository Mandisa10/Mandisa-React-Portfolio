import React from "react";
import styled from "styled-components";

export const HomepageRootRoot1 = ({}) => {
  return (
    <HomepageRootRootRoot>
      <Heading>
        <FlexColumn>
          <Text1>@mandyngabaza@gmail.com</Text1>
          <PeepsSitting
            src={`https://file.rendit.io/n/9uPlaCvcq6qSwRdDNuWk.png`}
          />
        </FlexColumn>
        <FlexColumn1>
          <FlexRow>
            <Image1 src={`https://file.rendit.io/n/Kj0lYKBrEofje0juWrqH.svg`} />
            <Image1 src={`https://file.rendit.io/n/fBQ2rDSg8Sb31SioKUDY.svg`} />
          </FlexRow>
          <Greeting>
            <Text2>Hi there, I’m Mandisa</Text2>
            <Text3>Computer Science Graduate</Text3>
            <Paragraph>
              I am a recent graduate who works in Design and Front-End
              development. I enjoy challenges and working towards building
              useful and functional designs and web applications.
            </Paragraph>
          </Greeting>
          <BlackFlexRow>
            <Text4>See my Resume</Text4>
          </BlackFlexRow>
        </FlexColumn1>
      </Heading>
      <ProjectsAndSkills1>
        <Text5>Projects and Skills</Text5>
      </ProjectsAndSkills1>
      <FlexRow1>
        <CinemaCard>
          <WhiteFlexColumn>
            <Image2 src={`https://file.rendit.io/n/75004jHwFuVEVO8FDmwc.png`} />
            <Text6>Cinema Booking App</Text6>
          </WhiteFlexColumn>
        </CinemaCard>
        <CinemaCard>
          <WhiteFlexColumn1>
            <HomePage
              src={`https://file.rendit.io/n/McbdfE2sfRNWrzaAZ3p0.png`}
            />
            <Text7>Course Rating Website</Text7>
          </WhiteFlexColumn1>
        </CinemaCard>
      </FlexRow1>
      <FlexRow2>
        <CinemaCard>
          <WhiteFlexColumn2>
            <Education1>
              <FlexColumn2>
                <FlexColumn3>
                  <Text8>Education</Text8>
                  <Image3
                    src={`https://file.rendit.io/n/CBTlHYCQYQPaLKAGUkGp.svg`}
                  />
                </FlexColumn3>
                <FlexRow3>
                  <Image4
                    src={`https://file.rendit.io/n/pvadxEfQQMVe7LHmqqB1.svg`}
                  />
                  <Paragraph1>
                    National Senior Certificate <br />
                    Rhenish Girls’ High School
                  </Paragraph1>
                </FlexRow3>
              </FlexColumn2>
              <Paragraph2>
                BSc Computer Science <br />
                University of the Western Cape
                <br />
                2019-2022
              </Paragraph2>
            </Education1>
          </WhiteFlexColumn2>
        </CinemaCard>
        <CinemaCard>
          <WhiteFlexColumn3>
            <FlexColumn4>
              <Text9>Skills</Text9>
              <FlexRow4>
                <ReacticonsfaFaCode3
                  src={`https://file.rendit.io/n/kB80kbqNhVxAiEf3NSAM.svg`}
                />
                <Text10>Python</Text10>
              </FlexRow4>
            </FlexColumn4>
            <FlexRow5>
              <ReacticonsfaFaCode3
                src={`https://file.rendit.io/n/kB80kbqNhVxAiEf3NSAM.svg`}
              />
              <Text11>Java</Text11>
            </FlexRow5>
            <FlexRow6>
              <ReacticonsfaFaCode3
                src={`https://file.rendit.io/n/kB80kbqNhVxAiEf3NSAM.svg`}
              />
              <Text12>SQL</Text12>
            </FlexRow6>
            <FlexRow7>
              <ReacticonsfaFaCode3
                src={`https://file.rendit.io/n/kB80kbqNhVxAiEf3NSAM.svg`}
              />
              <Text13>Figma</Text13>
            </FlexRow7>
          </WhiteFlexColumn3>
        </CinemaCard>
      </FlexRow2>
      <FlexRow8>
        <Footer>
          <Text14>Let’s get in touch!</Text14>
          <Text15>@mandyngabaza@gmail.com</Text15>
          <FlexRow9>
            <Image1 src={`https://file.rendit.io/n/Kj0lYKBrEofje0juWrqH.svg`} />
            <Image1 src={`https://file.rendit.io/n/fBQ2rDSg8Sb31SioKUDY.svg`} />
          </FlexRow9>
        </Footer>
        <Connect>
          <Text16>Email</Text16>
          <FlexColumn5>
            <Text17>hire-me@company.com</Text17>
          </FlexColumn5>
          <Text18>Message</Text18>
          <FlexColumn6>
            <Text19>Hi Mandisa, beautiful protfolio, ...</Text19>
            <Element1 />
          </FlexColumn6>
          <BlackText>Send message</BlackText>
        </Connect>
      </FlexRow8>
    </HomepageRootRootRoot>
  );
};

// Style components:

const Image1 = styled.img`
  width: 40px;
  height: 40px;
`;
const CinemaCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ReacticonsfaFaCode3 = styled.img`
  width: 26px;
  height: 26px;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
`;
const HomepageRootRootRoot = styled.div`
  height: 2395px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 68px 62px 68px 93px;
  background-color: rgba(245, 224, 202, 1);
  background-image: linear-gradient(
    180deg,
    #fefefe 0%,
    #ffecda 38%,
    #ffdcba 85%
  );
  overflow: hidden;
`;
const Heading = styled.div`
  gap: 83px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  margin: 0px 0px 157px 0px;
`;
const FlexColumn = styled.div`
  width: 364px;
  height: 518px;
  gap: 89px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Text1 = styled.div`
  width: 323px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
`;
const PeepsSitting = styled.img`
  width: 303px;
  height: 396px;
  align-self: flex-end;
`;
const FlexColumn1 = styled.div`
  height: 518px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexRow = styled.div`
  width: 768px;
  gap: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 0px 50px 0px;
  padding: 0px 15px;
`;
const Greeting = styled.div`
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 48px 0px;
`;
const Text2 = styled.div`
  width: 559px;
  font-size: 34px;
  font-weight: 500;
  font-family: Roboto Mono;
`;
const Text3 = styled.div`
  width: 798px;
  align-self: stretch;
  font-size: 50px;
  font-weight: 500;
  font-family: Roboto Mono;
`;
const Paragraph = styled.div`
  width: 751px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 25px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
`;
const BlackFlexRow = styled.div`
  width: 191px;
  gap: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #000000;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
`;
const Text4 = styled.div`
  width: 162px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const ProjectsAndSkills1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: 0px 0px 82px 332px;
`;
const Text5 = styled.div`
  width: 603px;
  font-size: 50px;
  font-weight: 500;
  font-family: Roboto Mono;
  text-align: center;
`;
const FlexRow1 = styled.div`
  width: 1251px;
  gap: 49px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 48px 0px;
  padding: 0px 17px;
`;
const WhiteFlexColumn = styled.div`
  width: 488px;
  height: 417px;
  gap: 8.65px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 23px 50px 23px 49px;
  border-radius: 5px;
  background-color: #fff3e8;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;
const Image2 = styled.img`
  width: 488px;
  height: 332px;
  align-self: stretch;
`;
const Text6 = styled.div`
  width: 413px;
  height: 47px;
  margin: 0px 37px 0px 0px;
  font-size: 36px;
  font-family: Roboto Mono;
  text-align: center;
`;
const WhiteFlexColumn1 = styled.div`
  width: 480px;
  height: 417px;
  gap: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 23px 51px 23px 56px;
  border-radius: 5px;
  background-color: #fff4e8;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;
const HomePage = styled.img`
  width: 480px;
  height: 323px;
  align-self: stretch;
`;
const Text7 = styled.div`
  width: 467px;
  height: 47px;
  margin: 0px 0px 0px 6px;
  font-size: 36px;
  font-family: Roboto Mono;
  text-align: center;
`;
const FlexRow2 = styled.div`
  width: 1251px;
  gap: 49px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 126px 0px;
  padding: 0px 17px;
`;
const WhiteFlexColumn2 = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 86.6px 43.5px 67px;
  border-radius: 5px;
  background-color: #fff3e8;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;
const Education1 = styled.div`
  width: 353px;
  height: 179px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 90.3px 0px 90.3px 80.6px;
`;
const FlexColumn2 = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 79.4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn3 = styled.div`
  width: 300px;
  gap: 37.9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 116px 0px 0px;
`;
const Text8 = styled.div`
  width: 299px;
  height: 68.6px;
  align-self: flex-end;
  font-size: 35px;
  font-weight: 500;
  font-family: Poppins;
`;
const Image3 = styled.img`
  width: 43.6px;
  height: 53.8px;
`;
const FlexRow3 = styled.div`
  height: 120px;
  gap: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image4 = styled.img`
  width: 43.6px;
  height: 53.8px;
  align-self: flex-start;
  margin: 6.73px 0px 0px 0px;
`;
const Paragraph1 = styled.div`
  width: 335px;
  height: 120px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const Paragraph2 = styled.div`
  width: 353px;
  height: 121px;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const WhiteFlexColumn3 = styled.div`
  height: 343px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 60px 323px 60px 77px;
  border-radius: 5px;
  background-color: #fff3e8;
  box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.25);
`;
const FlexColumn4 = styled.div`
  width: 187px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text9 = styled.div`
  width: 180px;
  height: 69px;
  font-size: 35px;
  font-weight: 500;
  font-family: Poppins;
`;
const FlexRow4 = styled.div`
  width: 187px;
  gap: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  align-items: center;
`;
const Text10 = styled.div`
  width: 78px;
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const FlexRow5 = styled.div`
  width: 145px;
  gap: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 21px;
`;
const Text11 = styled.div`
  width: 57px;
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const FlexRow6 = styled.div`
  gap: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 36px 0px 44px;
`;
const Text12 = styled.div`
  width: 42px;
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const FlexRow7 = styled.div`
  width: 165px;
  gap: 39px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 11px;
`;
const Text13 = styled.div`
  width: 67px;
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
`;
const FlexRow8 = styled.div`
  width: 1245px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 40px;
`;
const Footer = styled.div`
  width: 402px;
  height: 166px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  margin: 22px 0px 0px 0px;
`;
const Text14 = styled.div`
  width: 397px;
  height: 45px;
  align-self: flex-end;
  margin: 0px 0px 20px 0px;
  font-size: 36px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
`;
const Text15 = styled.div`
  width: 323px;
  margin: 0px 0px 31px 0px;
  font-size: 20px;
  font-weight: 500;
  font-family: Poppins;
  text-align: center;
`;
const FlexRow9 = styled.div`
  width: 392px;
  gap: 41px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  padding: 0px 5px;
`;
const Connect = styled.div`
  width: 713px;
  height: 385px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text16 = styled.div`
  width: 81px;
  margin: 0px 0px 13px 0px;
  font-size: 24px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
`;
const FlexColumn5 = styled.div`
  width: 555px;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  margin: 0px 0px 43px 0px;
  padding: 0px 88px 0px 9px;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #000000;
`;
const Text17 = styled.div`
  width: 614px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
`;
const Text18 = styled.div`
  margin: 0px 0px 13px 0px;
  font-size: 24px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
  white-space: nowrap;
`;
const FlexColumn6 = styled.div`
  width: 713px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  margin: 0px 0px 33px 0px;
`;
const Text19 = styled.div`
  width: 614px;
  left: 10px;
  top: 8px;
  position: absolute;
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
`;
const Element1 = styled.div`
  width: 650px;
  height: 111px;
  position: relative;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  border-color: #000000;
`;
const BlackText = styled.div`
  width: 166px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Poppins;
  line-height: 30px;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #000000;
`;

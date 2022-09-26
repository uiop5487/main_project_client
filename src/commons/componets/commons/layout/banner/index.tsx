import Slider from "react-slick";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const BennerWrapper = styled.img`
//   width: 100%;
//   height: 400px;
// `;

const BannerPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const BannerPage = styled.div`
    width: 100%;
    height: 400px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
      url("/img/header.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const SliderStyles = styled(Slider)`
    height: 180px;
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px 10px;
  `;

  const H3wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const H3 = styled.div`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: white;
  `;

  const H2 = styled.div`
    font-size: 48px;
    font-weight: 800;
    letter-spacing: 15px;
    color: white;
    /* margin-top: 20px; */
  `;

  return (
    <Wrapper>
      <BannerPage>
        <H2>만리장성</H2>
        <SliderStyles {...settings}>
          <H3wrapper>
            <H3>
              안녕하세요. <br /> 만리장성입니다. <br />
              방문해주셔서 감사합니다!
            </H3>
          </H3wrapper>
          <H3wrapper>
            <H3>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </H3>
          </H3wrapper>
          <H3wrapper>
            <H3>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </H3>
          </H3wrapper>
          <H3wrapper>
            <H3>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </H3>
          </H3wrapper>
          <H3wrapper>
            <H3>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </H3>
          </H3wrapper>
          <H3wrapper>
            <H3>
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
              안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </H3>
          </H3wrapper>
        </SliderStyles>
      </BannerPage>
    </Wrapper>
  );
};

export default BannerPage;

import styled from "styled-components/macro";

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.background.default};
    overflow: hidden;
`;

const FirstCircle = styled.div`
    width: 410px;
    height: 410px;
    position: absolute;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background.first};
    top: -119px;
    right: -251px;
    
    @media (min-width: 660px) and (max-width: 1103.9px) {
        top: -154px;
        right: -127px;
    }
    
    @media (min-width: 1104px)  {
		top: -148px;
		right: -127px;
    }
`;

const SecondCircle = styled.div`
    position: absolute;
    width: 141px;
    height: 141px;
    border-radius: 50%;
    left: -60px;
    top: 266px;
    background-color: ${(props) => props.theme.colors.background.second};
    
	@media (min-width: 660px) and (max-width: 1103.9px) {
		top: 304px;
		left: 19px;
	}

	@media (min-width: 1104px)  {
		top: 304px;
		left: 49px;
	}
    
`;

const Background = () => {
    return (
        <BackgroundWrapper>
            <FirstCircle />
            <SecondCircle />
        </BackgroundWrapper>
    );
};

export default Background;

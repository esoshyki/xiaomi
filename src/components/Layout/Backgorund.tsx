import styled from "styled-components/macro";

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.background.default};
    overflow: hidden;
`;

const FirstCircle = styled.div`
    width: 410px;
    height: 410px;
    position: absolute;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background.first};
    top: -154px;
    right: -128px;
`;

const SecondCircle = styled.div`
    position: absolute;
    width: 141px;
    height: 141px;
    border-radius: 50%;
    left: 49px;
    top: 304px;
    background-color: ${(props) => props.theme.colors.background.second};
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

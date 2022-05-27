import styled from "styled-components/macro";
import { select } from "../../store/selector";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

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

const FirstCircle = styled.div<{position: number, isHomePage: boolean}>`
    width: ${(props) => props.isHomePage ? "319px": "410px"};
    height: ${(props) => props.isHomePage ? "319px": "410px"};
    position: absolute;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background.first};
    top: ${(props) => props.isHomePage ? "-62px": "-119px"};
    right: ${(props) => props.isHomePage ? "-69px": "-251px"};
    transition: transform 1200ms 250ms linear;
    will-change: transform;
    
    transform: ${(props) => 
            props.position === 1 ? "translateX(-240px)" :
            props.position === 2 ? "translateX(140px)" : "translateX(0)"
    };
    
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
    const view = useSelector(select.view),
        current = view.currentSlide;
    const { pathname } = useLocation()
    return (
        <BackgroundWrapper>
            <FirstCircle position={current} isHomePage={pathname === "/"}/>
            <SecondCircle />
        </BackgroundWrapper>
    );
};

export default Background;

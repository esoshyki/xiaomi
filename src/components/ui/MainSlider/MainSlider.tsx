import styled from "styled-components";
import { Props } from "../../types";
import { Container, Image, Typography } from "../index";
import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../../store/selector";
import { setSlide } from "../../../store/viewSlice";

type SliderProps = Props<{
    slides: {img: string, title: string, text: string}[]
}>;

const SliderButton = styled.button<{visible?: boolean}>`
	position: absolute;
	right: 0;
	bottom: 0;
    
    margin: 0;
	padding: 0 8px;
    
    opacity: ${(props) => props.visible ? 1 : 0};
    pointer-events: ${(props) => props.visible ? "auto" : "none"};
	font-size: 14px;
	line-height: 16px;
	color: ${(props => props.theme.colors.link.default)};
    background-color: transparent;
    border: none;
	cursor: pointer;
    transition: opacity 300ms;
    
    @media (min-width: 660px) {
		display: none;
    }
`;

const SliderDot = styled.span<{current?: boolean}>`
    flex-shrink: 0;
	width: 8px;
	height: 8px;
	margin: 0 6px;

	border-radius: 50%;
	background-color: ${(props) => props.current ? props.theme.colors.accent.default : props.theme.colors.icon.quaternary};
`;

const DesktopWrapper = styled.div`
    display: block;
    width: 100%;
    @media (max-width: 660px) {
        display: none;
    }
`

const MobileWrapper = styled.div`
    display: none;
    width: 100%;
    @media (max-width: 660px) {
        display: block;
    }
`

const AnimateWrapper = (props: {children: ReactNode, styles?: {}}) => {
    return (
        <Container.Flex alignItems="stretch"
            styles={{
                overflowX: "hidden",
                marginLeft: "-24px",
                marginRight: "-24px",
                width: "calc(100% + 48px)",
            }}
        >
            <Container.Flex alignItems="stretch" direction="row" styles={props.styles}>
                {props.children}
            </Container.Flex>

        </Container.Flex>
    )
}

const MainSlider = (props: SliderProps) => {
    const dispatch = useDispatch();

    const [endSlider, setEndSlider] = useState<boolean>(false);
    const view = useSelector(select.view),
        current = view.currentSlide;

    const slides = props.slides;

    const nextSlide = () => {
        const next = current + 1;
        dispatch(setSlide(next));
        if (next === slides.length - 1) {
            setEndSlider(true);
        } else if (endSlider) {
            setEndSlider(false);
        }
    }

    const firstSlide = () => {
        dispatch(setSlide(0));
        setEndSlider(false);
    }

    return (
        <Container.Flex styles={{position: "relative"}} breakpoints={{
            660: {
                paddingTop: "16px"
            }
        }}>

            {/* slider in mobile */}
            <MobileWrapper>
                <AnimateWrapper styles={{
                    transition: "margin 800ms 120ms ease-in-out",
                    marginLeft: `-${current * 100}vw`,
                }}>
                    {slides.map((slide, index) => {
                            return (
                                <div key={index} style={{
                                    paddingLeft: "24px",
                                    paddingRight: "24px",
                                    textAlign: "center",
                                    width: "100vw",
                                    flexShrink: 0
                                }}>
                                    <Image src={slide.img} height={228} alt={slide.title} noBasePath/>
                                </div>
                            )
                        })
                    }
                </AnimateWrapper>


                <AnimateWrapper styles={{
                    transition: "margin 500ms 200ms ease",
                    marginLeft: `-${current * 100}vw`,
                }}>
                    {slides.map((slide, index) => {
                        return (
                            <div key={index} style={{
                                paddingLeft: "24px",
                                paddingRight: "24px",
                                textAlign: "center",
                                width: "100vw",
                                flexShrink: 0,
                                willChange: "margin"
                            }}>
                                <Typography.Big margin={"32px 22px 24px"}>{slide.title}</Typography.Big>
                            </div>
                        )
                    })
                    }
                </AnimateWrapper>

                <AnimateWrapper>
                    {slides.map((slide, index) => {
                        return (
                            <div key={index} style={{
                                paddingLeft: "24px",
                                paddingRight: "24px",
                                textAlign: "center",
                                opacity: current === index ? 1 : 0,
                                transition: "opacity 300ms ease",
                                width: "100vw",
                                flexShrink: 0,
                                transform: `translateX(-${index * 100}vw)`
                            }}>
                                <Typography.Medium margin={0}>{slide.text}</Typography.Medium>
                            </div>
                        )
                    })
                    }
                </AnimateWrapper>

                <Container.Flex direction="row" justify="center" breakpoints={{
                        660: {
                            marginTop: "24px",
                            padding: "8px 24px 4px"
                        }
                    }}
                >
                    {slides.map((slide, index) => {
                        return (
                            <SliderDot key={index} current={index === current}/>
                        )
                    })}
                </Container.Flex>
                <SliderButton visible={!endSlider} onClick={nextSlide}>Далее</SliderButton>
                <SliderButton visible={endSlider} onClick={firstSlide}>В начало</SliderButton>
            </MobileWrapper>

            {/* column in tablet, desktop */}
            <DesktopWrapper>
                <Container.Flex gap={42} fullWidth styles={{maxWidth: "880px",marginLeft: "auto", marginRight: "auto"}} breakpoints={{
                    1024: {
                      gap: "16px"
                    }
                }}>
                    {slides.map((slide, index) => {
                        return (
                            <Container.Flex
                                key={index}
                                direction="row"
                                fullWidth
                                styles={{
                                    minHeight: "280px"
                                }}
                                horizontalGap={72}
                                breakpoints={{
                                    1024: {
                                        columnGap: "36px"
                                    }
                                }}
                            >
                                <Image src={slide.img} height={228} alt={slide.title} noBasePath/>
                                <Container.Flex alignItems="stretch" styles={{
                                    order: index % 2 === 0 ? 1: -1,
                                    marginLeft: index % 2 === 0 ? 0: "auto",
                                    maxWidth: "312px"
                                }}>
                                    <Typography.Big margin={"32px 22px 24px"}>{slide.title}</Typography.Big>
                                    <Typography.Medium margin={0}>{slide.text}</Typography.Medium>
                                </Container.Flex>
                            </Container.Flex>
                        )
                    })}
                </Container.Flex>
            </DesktopWrapper>
        </Container.Flex>
    )
};

export default MainSlider
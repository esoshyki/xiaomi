import styled from "styled-components";
import * as CSS from 'csstype'
import { Props } from "../../types";
import checkPNG from "../../../assets/done.png";
import { Img, Container } from "../../ui";

const UploadProgressText = styled.span`
	color: ${(props) => props.theme.colors.link.default};
	font-weight: 600;
	font-size: 17px;
	line-height: 20px;
`;

type UploadProps = Props<{
    loadedLength: number
    styles?: CSS.Properties
}>;

const UploadProgress = (props: UploadProps) => {
    return (
        <Container.Flex direction="row" horizontalGap={4} margin="0 0 6px" styles={{marginBottom: "6px", order: "-1"}}>
            <Img image={checkPNG} />
            <UploadProgressText>
                {props.loadedLength === 1 && "Первое фото загружено"}
                {props.loadedLength === 2 && "Все фото загружены"}
            </UploadProgressText>
        </Container.Flex>
    )
};

export default UploadProgress
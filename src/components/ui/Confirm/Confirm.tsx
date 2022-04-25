import styled from "styled-components";
import * as CSS from "csstype";
import Container from "../Container";
import Typography from "../Typography";
import Button from "../Button";

const ConfirmWrapper = styled.div<ConfirmProps>`
    width: 100%;
    ${(props) => ({
        ...props.styles,
    })}
`;

interface ConfirmProps {
    question: string;
    onYes: () => void;
    onNo: () => void;
    styles?: CSS.Properties;
}

const Confirm = (props: ConfirmProps) => {
    return (
        <ConfirmWrapper {...props}>
            <Container.Flex fullWidth alignItems="start">
                <Typography.H5>{props.question}</Typography.H5>

                <Container.Grid
                    direction="row"
                    gap={10}
                    cols={"1fr 1fr"}
                    fullWidth
                >
                    <Button
                        fullWidth
                        onClick={props.onNo}
                        square
                        styles={{ margin: "0" }}
                    >
                        Нет
                    </Button>
                    <Button
                        fullWidth
                        onClick={props.onYes}
                        square
                        styles={{ margin: "0" }}
                    >
                        Да
                    </Button>
                </Container.Grid>
            </Container.Flex>
        </ConfirmWrapper>
    );
};

export default Confirm;

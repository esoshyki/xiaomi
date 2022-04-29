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
    withWrapper?: true
}

const Confirm = (props: ConfirmProps) => {
    return (
        <ConfirmWrapper {...props}>
            <Typography.Title textAlign="start" margin={"16px 0 22px"}>{props.question}</Typography.Title>

            <Container.Grid
                direction="row"
                gap={16}
                cols={"1fr 1fr"}
            >
                <Button
                    variant="outline"
                    fullWidth
                    onClick={props.onNo}
                    square
                    styles={{ margin: "0" }}
                >
                    Нет
                </Button>
                <Button
                    variant="outline"
                    fullWidth
                    onClick={props.onYes}
                    square
                    styles={{ margin: "0" }}
                >
                    Да
                </Button>
            </Container.Grid>

        </ConfirmWrapper>
    );
};

export default Confirm;

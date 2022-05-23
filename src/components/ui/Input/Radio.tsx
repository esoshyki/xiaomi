import { useTheme } from "styled-components";
import { styled } from "../../../helpers/styled";
import { Props } from "../../types";
import Container from "../Container";
import Typography from "../Typography";

type RadioProps = Props<{
    selected: boolean;

    label: string;
    onChange: () => void;
}>;

const _Radio = styled.div<{
    selected: boolean;
}>`
    position: absolute;
    left: -30px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-color: ${(props) =>
        props.selected
            ? props.theme.colors.accent.default
            : props.theme.colors.icon.secondary};
    border-width: ${(props) => (props.selected ? "7px" : "2px")};
    border-style: solid;
    transition: all 200ms ease-in;
    &:hover {
        cursor: pointer;
    }
`;

const Radio = (props: RadioProps) => {
    const { selected, label, onChange } = props;
    const theme = useTheme();

    const _onChange = () => {
        onChange();
    };

    return (
        <Container.Flex
            direction="row"
            margin={"5px 0"}
            fullWidth
            styles={{ position: "relative" }}
        >
            <_Radio onClick={_onChange} selected={selected} />
            <Typography.Main
                color={
                    selected
                        ? theme.colors.link.default
                        : theme.colors.text.default
                }
            >
                {label}
            </Typography.Main>
        </Container.Flex>
    );
};

export default Radio;

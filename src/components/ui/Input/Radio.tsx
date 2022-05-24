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
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
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
            fullWidth
            styles={{ position: "relative", paddingLeft: "36px", cursor: "pointer" }}
            onClick={_onChange}
        >
            <_Radio selected={selected} />
            <Typography.Main
                color={
                    selected
                        ? theme.colors.link.default
                        : theme.colors.text.default
                }
                margin={0}
            >
                {label}
            </Typography.Main>
        </Container.Flex>
    );
};

export default Radio;

import React, {
    forwardRef,
    Fragment,
    MouseEvent,
    useEffect,
    useRef,
    ChangeEvent
} from "react";
import { styled } from "../../../helpers/styled";
import { getCommonProps, Props } from "../../types";
import Icon from "../Icon";
import { Icons } from "../Icon/types";
import { collectButtonStyles } from "./styles";

export type ButtonVariants = "primary" | "disabled" | "outline" | "danger";

const Root = styled.button<ButtonProps>`
    ${(props) => collectButtonStyles(props)}
    ${(props) => getCommonProps(props)}
`;

const Input = styled.input`
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border: none;
`

export type ButtonProps = Props<{
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    onFileInput?: (file: File) => void;
    variant?: ButtonVariants;
    withLoader?: true;
    pending?: boolean;
    icon?: Icons;
    square?: true;
    sumbit?: true;
    fileInput?: true;
}>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (props: ButtonProps, ref) => {
        const { children, withLoader, pending, icon, fileInput, onFileInput } = props;

        const buttonRef = useRef<HTMLButtonElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (buttonRef.current) {
                buttonRef.current.blur();
            }
        });

        const onClick = () => {
            if (fileInput) {
                if (inputRef.current) {
                    inputRef.current.click()
                }
            };
            props.onClick && props.onClick()
        };

        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                onFileInput && onFileInput(file)
            }
        }   

        return (
            <Fragment>
                <Root
                    ref={ref ?? buttonRef}
                    {...props}
                    onClick={onClick}
                    type={props.sumbit ? "submit" : "button"}
                >
                    {withLoader && pending && (
                        <Icon name="loading" styles={{ marginRight: "10px" }} />
                    )}
                    {icon && !(withLoader && pending) && (
                        <Icon name={icon} styles={{ marginRight: "10px" }} />
                    )}
                    {!!children && children}
                </Root>
                {fileInput && <Input type="file" ref={inputRef} onChange={onChange} />}
            </Fragment>
        );
    }
);

export default Button;

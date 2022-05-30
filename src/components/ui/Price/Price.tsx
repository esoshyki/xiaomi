import { useTheme } from "styled-components";
import Typography from "../Typography";

interface PriceProps {
    amount?: number;
    currency?: string;
    text?: string;
}

const Price = (props: PriceProps) => {
    const theme = useTheme();

    const color = theme.colors.text.default;
    const fontWeight = 700;

    const { amount, currency, text } = props;

    const base = amount ? Math.floor(amount) : null;

    const rest = (base && amount) ? Math.round(100 * (amount % base)) : 0;

    const stringRest = rest > 9 ? "" + rest : "0" + rest;

    console.log(base);
    console.log(rest);

    return !text ? (
        <>
            <Typography.Small
                styles={{
                    color,
                    fontSize: "16px",
                    fontWeight,
                }}
            >
                {"" + base}
            </Typography.Small>
            <Typography.Small
                styles={{
                    color,
                    fontSize: "12px",
                    fontWeight,
                    position: "relative",
                    top: "-2px"
                }}
            >
                {stringRest}
            </Typography.Small>
            <Typography.Small
                styles={{
                    color,
                    fontSize: "16px",
                    fontWeight,
                    marginLeft: "6px"
                }}
            >
                {currency}
            </Typography.Small>
        </>
    ) : (
        <>
            <Typography.Small
                styles={{
                    color,
                    fontSize: "16px",
                    fontWeight,
                }}
            >
                {text}
            </Typography.Small>
        </>
    );
};

export default Price;

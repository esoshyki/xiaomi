import { TextProps } from "./types";
import cl from 'classnames'

interface TypographyProps extends TextProps {
  variant: "h1" 
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "mark"
}

const TypographyHOC = (props: TypographyProps) => {

  const { variant, className, children, onClick } = props;

  const Wrapper = variant;

  const collectStyles = () => {

    const { marginBottom, marginTop, color, fontSize, fontWeight, position, lineHeight,  } = props;

    return {
      marginBottom,
      marginTop,
      color,
      fontSize,
      fontWeight,
      position,
      lineHeight: lineHeight ? `${lineHeight}px` : undefined
    }
  }

  return (
    <Wrapper 
      onClick={onClick}
      style={{...collectStyles()}}
      className={cl({
        className: !!className,
      })}>
      {children}
    </Wrapper>
  )
}

export default TypographyHOC;
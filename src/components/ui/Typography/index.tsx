import { TextProps, TextColors } from "./types";
import TypographyHOC from "./TypographyHOC";

const H1 = (props: TextProps) => <TypographyHOC {...props} variant="h1"/>;
const H2 = (props: TextProps) => <TypographyHOC {...props} variant="h2"/>;
const H3 = (props: TextProps) => <TypographyHOC {...props} lineHeight={props.lineHeight || 30} variant="h3"/>;
const H4 = (props: TextProps) => <TypographyHOC {...props} variant="h4"/>;
const H5 = (props: TextProps) => <TypographyHOC {...props} variant="h5"/>;
const H6 = (props: TextProps) => <TypographyHOC {...props} variant="h6"/>;
const Span = (props: TextProps) => <TypographyHOC {...props} variant="span"/>;
const P = (props: TextProps) => <TypographyHOC {...props} variant="p"/>;
const Mark = (props: TextProps) => <TypographyHOC {...props} variant="mark"/>;
const Error = (props: TextProps) => <TypographyHOC {...props} variant="span" color={TextColors.Error}/>;

const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Span,
  P,
  Mark,
  Error
};

export default Typography
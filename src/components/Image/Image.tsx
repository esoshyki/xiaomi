import { Props } from "../types";

type ImageProps = Props<{
    src: string
    width: string
    height: string
}>

const Image = (props: ImageProps) => {

    return (
        <picture>
            <source src={props.src}></source>
        </picture>
    )
};

export default Image
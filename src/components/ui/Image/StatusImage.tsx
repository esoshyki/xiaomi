import DoneImg from '../../../assets/done.png';
import AttentionImg from '../../../assets/attention.png'
import Image from './Image';

type ImageStatus = "done" | "attention"

type Props = {
    status: ImageStatus
}

const getUrl = (status: ImageStatus) => {
    switch (status) {
        case "done": 
            return DoneImg
        case "attention":
            return AttentionImg
        default:
            return ""
    }
}

export default function StatusImage (props: Props) {

    const { status } = props;
    const url = getUrl(status)

    return (
        url ? <Image noBasePath src={DoneImg} alt={status} width={40} height={40} styles={{
            width: "16px",
            height: "16px",
            marginRight: "4px"
        }}/> : null
    )
}
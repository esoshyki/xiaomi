import { Container, Info } from "../../ui"
import QRCode from "react-qr-code";

interface QrCodeProps {
    link: string
}

const QrCode = ({ link } : QrCodeProps) => {

    return (
        <Container.Flex fullWidth margin={"0 0 20px 0"}>
            <QRCode value={link} size={120} /> 
        </Container.Flex>
    )
}

export default QrCode
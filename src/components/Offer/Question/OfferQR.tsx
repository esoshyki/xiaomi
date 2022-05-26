import { useMemo } from "react";
import { Box, Container, } from "../../ui";
import QRCode from "react-qr-code";
import useQuery from "../../../hooks/useQuery";
import OfferLoader from "../OfferLoader";

interface QrCodeProps {
    combinationCode?: string
    combinationId?: string
}

const OfferQR = ({ combinationCode, combinationId } : QrCodeProps) => {

    const { makePath } = useQuery();

    const link = makePath();

    const value = useMemo(() => link + "?qrcode=" + (combinationCode ?? combinationId), [link, combinationCode, combinationId]);

    return (
        <Container.Flex fullWidth alignItems="start">
            <Box
                padding={10}
                styles={{
                    alignSelf: "center",
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    fontSize: "0",
                    lineHeight: "0"
                }}
            >
                {(combinationCode || combinationId) ? <QRCode value={value} size={140} /> : <OfferLoader />}
            </Box>
        </Container.Flex>
    );
};

export default OfferQR;

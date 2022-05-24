import { Box, Container, } from "../../ui";
import QRCode from "react-qr-code";
import useQuery from "../../../hooks/useQuery";

const OfferQR = () => {

    const { makeStateData } = useQuery();

    const link = makeStateData()

    const value = link + "?action=addPhoto"

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
                <QRCode value={value} size={140} />
            </Box>
        </Container.Flex>
    );
};

export default OfferQR;

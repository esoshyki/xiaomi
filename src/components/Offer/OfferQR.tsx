import { Box, Button, Container, Info, Typography } from "../ui";
import QRCode from "react-qr-code";

const OfferQR = () => {

    return (
        <Container.Flex fullWidth alignItems="start">

            <Box
                margin={"0 auto 26px auto"}
                styles={{
                    width: "140px",
                    height: "140px",
                    alignSelf: "center",
                }}
            >
                <QRCode value="bubenchiki" size={140} />
            </Box>

        </Container.Flex>
    );
};

export default OfferQR;

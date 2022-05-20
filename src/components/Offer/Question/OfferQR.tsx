import { Box, Container, } from "../../ui";
import QRCode from "react-qr-code";
import useQuery from "../../../hooks/useQuery";

const OfferQR = () => {

    const { makeStateData } = useQuery();

    const basePath = process.env.REACT_APP_BASE_PATH;
    const params = makeStateData()

    const value = basePath + (params ? "?" : "") + params;

    console.log(value);

    return (
        <Container.Flex fullWidth alignItems="start" margin={"0 0 20px 0"}>

            <Box
                
                margin={0}
                padding={20}
                styles={{
                    alignSelf: "center",
                    backgroundColor: "#fff"
                }}
            >
                <QRCode value={value} size={144} />
            </Box>

        </Container.Flex>
    );
};

export default OfferQR;

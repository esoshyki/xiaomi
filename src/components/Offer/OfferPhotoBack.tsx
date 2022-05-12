import { Container, Img, Info, Typography, Button } from "../ui";
import DonePNG from "../../assets/done.png";
import { useTheme } from "styled-components";
import { useOfferData } from "./hooks/useOfferData";

const OfferPhotoBack = () => {
    const theme = useTheme();

    const { setPhoto } = useOfferData();

    const onFileInput = (file: File) => {
        if (typeof window !== "undefined") {
            const localURL = window.URL.createObjectURL(file);
            setPhoto("back", localURL)
        }
    };

    return (
        <Container.Flex alignItems="start" fullWidth>
            <Container.Flex direction="row" justify="center" fullWidth>
                <Img image={DonePNG} />
                <Typography.Title
                    styles={{ marginLeft: "4px" }}
                    color={theme.colors.link.default}
                >
                    Первое фото загружено
                </Typography.Title>
            </Container.Flex>

            <Typography.Title>Фото 2 из 2</Typography.Title>

            <Typography.Main start>
                Сделайте фото задней стороны смартфона
                <br />{" "}
                <Typography.Link start href="#">
                    Пример фото
                </Typography.Link>
            </Typography.Main>

            <Info>
                Все надписи на корпусе и IMEI должны быть четко различимы
                на фото
            </Info>

            <Button
                fileInput
                icon="photo"
                variant="outline"
                fullWidth
                margin={"15px 0 0"}
                onFileInput={onFileInput}
            >
                ВЫБРАТЬ/СДЕЛАТЬ ФОТО
            </Button>
        </Container.Flex>
    );
};

export default OfferPhotoBack;

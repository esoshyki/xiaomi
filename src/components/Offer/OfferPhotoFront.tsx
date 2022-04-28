import { useOfferData } from "../../hooks/useOfferData";
import { Button, Container, Info, Typography } from "../ui";

const OfferPhotoFront = () => {
    const { setPhoto } = useOfferData();

    const onFileInput = (file: File) => {
        if (typeof window !== "undefined") {
            const localURL = window.URL.createObjectURL(file);
            setPhoto("front", localURL)
        }
    };

    return (
        <Container.Flex fullWidth alignItems="start">
            <Typography.Title>Фото 1 из 2</Typography.Title>

            <Typography.Main start>
                {
                    "Сделайте фото лицевой стороны с включённым экраном и отображением IMEI, для этого наберите USSD-команду *#06# "
                }
                <Typography.Link href="#">Пример фото</Typography.Link>
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

export default OfferPhotoFront;

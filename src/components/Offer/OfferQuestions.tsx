import { useOfferData } from "../../hooks/useOfferData";
import Container from "../ui/Container";

const OfferQuestions = () => {

    const { questions } = useOfferData();

    console.log(questions);

    return (
        <Container.Flex>

        </Container.Flex>
    )
};

export default OfferQuestions
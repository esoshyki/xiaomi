import Container from "../ui/Container";
import ThemeButtons from "./Buttons";
import ThemeInputs from "./Inputs";
import ThemeSelect from "./ThemeSelect";
import ThemeRadio from "./Radio";

const Theme = () => {

    return (
        <Container.Flex direction="row" wrapped fullWidth gap={15} >
            <ThemeButtons />
            <ThemeInputs />
            <ThemeRadio />
            <ThemeSelect />
        </Container.Flex>
    );
};

export default Theme;

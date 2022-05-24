import Container from "../ui/Container";
import ThemeButtons from "./Buttons";
import ThemeInputs from "./Inputs";
import ThemeSelect from "./ThemeSelect";
import ThemeRadio from "./Radio";
import ThemeCheckbox from "./Checkbox";

const Theme = () => {

    return (
        <Container.Flex direction="row" wrapped alignItems="stretch" fullWidth gap={40} >
            <ThemeButtons />
            <ThemeInputs />
            <ThemeRadio />
            <ThemeSelect />
            <ThemeCheckbox />
        </Container.Flex>
    );
};

export default Theme;

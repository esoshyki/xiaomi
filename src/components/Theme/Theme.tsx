import Container from "../ui/Container";
import ThemeButtons from "./Buttons";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, getThemeData, getThemes } from "../../store/themeSlice";
import ThemeInputs from "./Inputs";
import ThemeTooltips from "./Tooltips";
import ThemeSelect from "./ThemeSelect";

const Theme = () => {

    return (
        <Container.Flex direction="row" wrapped fullWidth gap={15} >
            <ThemeButtons />
            <ThemeInputs />
            <ThemeTooltips />
            <ThemeSelect />
        </Container.Flex>
    );
};

export default Theme;

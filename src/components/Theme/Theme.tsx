import Container from "../ui/Container";
import ThemeButtons from "./Buttons";
import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, getThemeData, getThemes } from "../../store/themeSlice";
import ThemeInputs from "./Inputs";
import ThemeTooltips from "./Tooltips";

const Theme = () => {

    const dispatch = useDispatch()

    const { themes, theme } = useSelector(getThemeData);

    useEffect(() => {
        dispatch(getThemes.request())
    }, [dispatch])

    const themeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(getTheme.request(e.target.value))
    }

    return (
        <Container.Grid fullWidth gap={15} >
            {themes.length && <select value={theme.id} onChange={themeChange} style={{
                marginBottom: 20,
                height: 50
            }}>
                <option value={themes[0].id}>{themes[0].title}</option>
                <option value={themes[1].id}>{themes[1].title}</option>
            </select>}
            <ThemeButtons />
            <ThemeInputs />
            <ThemeTooltips />
        </Container.Grid>
    );
};

export default Theme;

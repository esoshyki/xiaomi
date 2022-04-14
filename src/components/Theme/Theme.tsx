import { useSelector } from "react-redux"
import { getThemeData } from "../../store/themeSlice"

const Theme = () => {
    const { theme } = useSelector(getThemeData);

    
}

export default Theme
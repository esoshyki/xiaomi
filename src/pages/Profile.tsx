import { withLayout } from "../components/Layout/withLayout"
import Profile from "../components/Profile"


const ThemePage = () => {
    return (
        <Profile/>
    )
}

export default withLayout(ThemePage, "Профиль", true)
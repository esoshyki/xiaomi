import { withLayout } from "../components/Layout/withLayout"
import ProfileEdit from "../components/Profile/ProfileEdit";


const ThemePage = () => {
    return (
        <ProfileEdit />
    )
}

export default withLayout(ThemePage, "Редактирование профиля", true)
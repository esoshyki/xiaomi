import { withLayout } from "../components/Layout/withLayout"
import NewRequest from "../components/Profile/NewRequest";


const ThemePage = () => {
    return (
        <NewRequest />
    )
}

export default withLayout(ThemePage, "Новая заявка", true)
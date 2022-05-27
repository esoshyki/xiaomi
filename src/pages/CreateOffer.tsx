import { memo } from "react";
import { withLayout } from "../components/Layout/withLayout"
import Order from "../components/Order"
import useURL from "../hooks/useUrl"

const CreateOffer = () => {
    useURL("create");

    return (
        <Order qrCode={false} />
    )
}

export default memo(withLayout(CreateOffer, "Главная"))
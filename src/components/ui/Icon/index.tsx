import AddPlus from './icons/addPlus';
import ColorIndicatorIcon from './icons/colorIndicator'; 
import TelegramIcon from './icons/telegram'
import LoadingIcon from './icons/loading'
import { IconProps } from './types';
import UserIcon from './icons/user';
import ReportsIcon from './icons/reports';
import HelpIcon from './icons/help';
import InfoIcon from './icons/info';
import PhotoIcon from './icons/photo';
import Hidden from './icons/hidden';
import Eye from './icons/eye';
import SettingsIcon from './icons/settings';
import EmployeeIcon from './icons/employee';
import OrderList from './icons/orderList';
import QrCodeIcon from './icons/qrCode';
import NewOrderIcon from './icons/newOrder';
import ExitIcon from './icons/exit';
import BellIcon from './icons/bell';
import EditIcon from "./icons/edit";
import EyeClose from "./icons/eye-close";
import Arrow from './icons/arrow';
import Search from './icons/search';

const Icon = (props: IconProps) => {

    switch (props.name) {
        case "add-plus":
            return <AddPlus {...props} />
        case "arrow":
            return <Arrow {...props} />
        case "color-indicator":
            return <ColorIndicatorIcon {...props} />
        case "telegram":
            return <TelegramIcon {...props}/>;
        case "loading":
            return <LoadingIcon {...props}/>
        case "employee":
            return <EmployeeIcon {...props} />
        case "exit":
            return <ExitIcon {...props} />
        case "user":
            return <UserIcon {...props} />
        case "reports":
            return <ReportsIcon {...props} />
        case "help":
            return <HelpIcon {...props} />
        case "info":
            return <InfoIcon {...props} />
        case "new-order":
            return <NewOrderIcon {...props} />
        case "order-list":
            return <OrderList {...props} />
        case "photo":
            return <PhotoIcon {...props} />
        case "qr-code":
            return <QrCodeIcon {...props} />
        case "hidden":
            return <Hidden {...props} />
        case "eye":
            return <Eye {...props} />
        case "eye-close":
            return <EyeClose {...props} />
        case "settings":
            return <SettingsIcon {...props} />
        case "bell":
            return <BellIcon {...props} />
        case "edit":
            return <EditIcon {...props} />
        case "search":
            return <Search {...props} />
    };
}

export default Icon;
import TelegramIcon from './icons/telegram'
import LoadingIcon from './icons/loading'
import { IconProps } from './types';
import UserIcon from './icons/user';
import ReportsIcon from './icons/reports';
import HelpIcon from './icons/help';
import InfoIcon from './icons/info';
import PhotoIcon from './icons/photo';
import AddPlus from './icons/addPlus';

const Icon = (props: IconProps) => {

    switch (props.name) {
        case "telegram":
            return <TelegramIcon {...props}/>;
        case "loading":
            return <LoadingIcon {...props}/>
        case "user":
            return <UserIcon {...props} />
        case "reports":
            return <ReportsIcon {...props} />
        case "help":
            return <HelpIcon {...props} />
        case "info":
            return <InfoIcon {...props} />
        case "photo":
            return <PhotoIcon {...props} />
        case "add-plus":
            return <AddPlus {...props} />
    };
}

export default Icon;
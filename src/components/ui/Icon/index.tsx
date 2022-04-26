import TelegramIcon from './icons/telegram'
import LoadingIcon from './icons/loading'
import { IconProps } from './types';
import UserIcon from './icons/user';
import ReportsIcon from './icons/reports';
import InfoIcon from './icons/info';

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
            return <ReportsIcon {...props} />
        case "info":
            return <InfoIcon {...props} />
     
    };
}

export default Icon;
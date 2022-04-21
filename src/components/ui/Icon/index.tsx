import TelegramIcon from './icons/telegram'
import LoadingIcon from './icons/loading'
import { IconProps } from './types';
import UserIcon from './icons/user';

const Icon = (props: IconProps) => {

    switch (props.name) {
        case "telegram":
            return <TelegramIcon {...props}/>;
        case "loading":
            return <LoadingIcon {...props}/>
        case "user":
            return <UserIcon {...props} />
    };
}

export default Icon;
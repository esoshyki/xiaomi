import { select } from '../store/selector';
import { useSelector } from 'react-redux';

export const useOfferData = () => {
    const offer = useSelector(select.offer);

    return ({
        ...offer
    })
}
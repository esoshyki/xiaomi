import OfferCostConfirm from './OfferCostConfirm'
import OfferImei from './OfferImei'
import OfferIsYourPhone from './OfferIsYourPhone'
import OfferPhotoFront from './OfferPhotoFront'
import OfferQR from './OfferQR'
import OfferQuestions from './OfferQuestions'
import OfferSummary from './OfferSummary'

export const OfferStep = {
    Imei: OfferImei,
    IsYourPhone: OfferIsYourPhone,
    Questions: OfferQuestions,
    Summary: OfferSummary,
    CostConfirm: OfferCostConfirm,
    QR: OfferQR,
    PhotoFront: OfferPhotoFront
}

export { default } from './Offer'
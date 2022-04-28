import OfferCostConfirm from './OfferCostConfirm'
import OfferImei from './OfferImei'
import OfferIsYourPhone from './OfferIsYourPhone'
import OfferPending from './OfferPending'
import OfferPhotoBack from './OfferPhotoBack'
import OfferPhotoFront from './OfferPhotoFront'
import OfferPreliminary from './OfferPreliminary'
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
    PhotoFront: OfferPhotoFront,
    PhotoBack: OfferPhotoBack,
    Pending: OfferPending,
    Preliminary: OfferPreliminary
}

export { default } from './Offer'
import OfferCostConfirm from './OfferCostConfirm'
import OfferPending from './OfferPending'
import OfferPhotoBack from './OfferPhotoBack'
import OfferPhotoFront from './OfferPhotoFront'
import OfferPreliminary from './OfferPreliminary'
import OfferQR from './OfferQR'
import OfferSummary from './OfferSummary'

export { default as OfferQuestions } from './OfferQuestions'

export const OfferStep = {
    Summary: OfferSummary,
    CostConfirm: OfferCostConfirm,
    QR: OfferQR,
    PhotoFront: OfferPhotoFront,
    PhotoBack: OfferPhotoBack,
    Pending: OfferPending,
    Preliminary: OfferPreliminary
}

export { default } from './Offer'
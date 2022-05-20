import OfferCostConfirm from './OfferCostConfirm'
import OfferPending from './OfferPending'
import OfferPreliminary from './OfferPreliminary'
import OfferSummary from './OfferSummary'

export { default as OfferQuestions } from './OfferQuestions'

export const OfferStep = {
    Summary: OfferSummary,
    CostConfirm: OfferCostConfirm,
    Pending: OfferPending,
    Preliminary: OfferPreliminary
}

export { default } from './Offer'
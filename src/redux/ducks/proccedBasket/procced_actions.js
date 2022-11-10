import { createAction } from 'redux-actions'

export const BASKET_POSTED = 'BASKET_POSTED'

export const basketPosted = createAction(BASKET_POSTED)
export const basketSucceed = createAction('BASKET_SUCCEED')
export const basketFailed = createAction('BASKET_FAILED')

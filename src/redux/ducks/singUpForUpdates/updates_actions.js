import { createAction } from 'redux-actions'

export const EMAIL_POSTED = 'EMAIL_POSTED'

export const emailPosted = createAction(EMAIL_POSTED)
export const emailSucceed = createAction('EMAIL_SUCCEED')
export const emailFailed = createAction('EMAIL_FAILED')

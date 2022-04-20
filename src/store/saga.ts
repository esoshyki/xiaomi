import { all } from 'redux-saga/effects'
import { themeWatcher } from './themeSlice/sagas'
import { userSagas } from './userSlice/sagas'

export default function* rootSaga() {
    yield all([
        themeWatcher(),
        userSagas()
    ])
}
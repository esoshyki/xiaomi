import { all } from 'redux-saga/effects'
import { themeWatcher } from './themeSlice/sagas'

export default function* rootSaga() {
    yield all([
        themeWatcher()
    ])
}
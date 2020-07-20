import * as ProfileUtil from '../util/profile_util'

export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = () => dispatch => (
  ProfileUtil.fetchUser().then(user => dispatch(receiveUser(user)))
)
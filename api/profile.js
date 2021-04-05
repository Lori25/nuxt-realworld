import { request } from '/plugins/request'


export const getUser = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}

export const updateUser = username => {
  return request({
    method: 'PUT',
    url: `/api/profiles/${username}`
  })
}

export const followUser = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

export const unfollowUser = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}
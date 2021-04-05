import { request } from '@/plugins/request'

export const addComment = params => {
  return request({
    method: 'POST',
    url: `/api/articles/${params.slug}/comments`,
    data: params
  })
}

export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

export const deleteComment = (slug, id) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}
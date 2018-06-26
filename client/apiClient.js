import request from 'superagent'

export function getAllCats() {
  return request
    .get('/api/v1/cats')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
    })
}
import config from '../../static/config'

const ajax = params => {
  const { url, method, data } = params
  const queryUrl = `${config.baseURI}/${url}`
  const type = method.toLowerCase()
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.timeout = 1000
    if (type === 'get') {
      xhr.open('GET', queryUrl, true)
      xhr.send()
    } else if (type === 'post') {
      xhr.open('POST', queryUrl, true)
      xhr.send(data)
    }
    xhr.onload = function () {
      //如果请求成功
      if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
        const response = JSON.parse(xhr.responseText)
        resolve(response)
      } else {
        reject(xhr.responseText)
      }
    }
  })
}

export default ajax

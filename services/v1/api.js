
var host = 'https://jsonplaceholder.typicode.com/'
const port = ''

const myHeaders = {
  'Content-Type': 'application/json'
}




export function get(path ,params = {}) {

    let fullpath = new URL(host + path)

    const options = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    }
    Object.keys(params).forEach(key => fullpath.searchParams.append(key, params[key]))

    return fetch(fullpath,options)
  }

export function post(path ,params) {
    let fullpath = new URL(host + path)
    const options = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(params)
    }
   
    return fetch(fullpath,options)
  }
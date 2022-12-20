import { get, post } from '../v1/api' 


export function getTodoList  () {
    let url = 'todos'
    return get(url)
}
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://seu-ip-da-maquina:3333'
})

export { api } 

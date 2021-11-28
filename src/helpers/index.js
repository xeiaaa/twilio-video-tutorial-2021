import axios from 'axios'

export const getToken = identity => {
  return axios.get(`${process.env.REACT_APP_TWILIO_SERVERLESS_URL}/token?identity=${identity}`)
}

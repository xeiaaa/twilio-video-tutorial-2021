import { useEffect, useState } from 'react'
import axios from 'axios'
import { getToken } from './helpers'

const IDENTITY = 'USER_1'

function App() {

  useEffect(() => {
    const init = async () => {
      try {
        const result = await getToken(IDENTITY)
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    }
    init()
  }, [])

  return (
    <div>
      <h1>{ process.env.REACT_APP_TWILIO_SERVERLESS_URL }</h1>
    </div>
  );
}

export default App;

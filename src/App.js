import { useEffect, useState } from 'react'
import { getToken } from './helpers'
import { connect } from 'twilio-video'

const IDENTITY = 'USER_1'
const ROOM_NAME = 'DEFAULT_ROOM'

function App() {

  useEffect(() => {
    const init = async () => {
      try {
        const result = await getToken(IDENTITY)
        console.log('Access Token:', result.data.accessToken)

        const room = await connect(result.data.accessToken, { name: ROOM_NAME })
        console.log('Twilio Room Instance:', room)
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

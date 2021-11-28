import { useEffect, useState } from 'react'
import { getToken } from './helpers'
import { connect } from 'twilio-video'
import { VideoRoomMonitor } from '@twilio/video-room-monitor'

const IDENTITY = 'USER_1'
const ROOM_NAME = 'DEFAULT_ROOM'

function App() {

  useEffect(() => {
    const init = async () => {
      try {
        const result = await getToken(IDENTITY)
        console.log('Access Token:', result.data.accessToken)

        const room = await connect(result.data.accessToken, { name: ROOM_NAME, tracks: [] })
        console.log('Twilio Room Instance:', room)

        // Register the room
        VideoRoomMonitor.registerVideoRoom(room)
      } catch (err) {
        console.log(err)
      }
    }
    init()
  }, [])

  const openRoomMonitor = () => {
    VideoRoomMonitor.openMonitor()
  }

  return (
    <div>
      <h1>{ process.env.REACT_APP_TWILIO_SERVERLESS_URL }</h1>

      <button onClick={() => openRoomMonitor()}>Room Monitor</button>
    </div>
  );
}

export default App;

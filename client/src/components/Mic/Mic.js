import React from 'react'
import "./Mic.css"

const Mic = () => {
    const [mute, setMute] = React.useState(true)
    return (
        <button className="microphone" onClick={() => setMute(!mute)} >
            {
                mute ? <img src="/images/mute.svg" alt="mute" /> : <img src="/images/microphone.svg" alt="mic" />
            }
        </button>
    )
}

export default Mic

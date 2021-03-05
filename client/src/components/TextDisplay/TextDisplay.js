import React from 'react'
import "./TextDisplay.css"

const TextDisplay = () => {
    return (
        <textarea className="text-display" cols="30" rows="10" readOnly placeholder="Converted text will display here"></textarea>
    )
}

export default TextDisplay

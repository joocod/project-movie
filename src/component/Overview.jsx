import React, { useRef, useState } from 'react'
import styled from 'styled-components'

function Overview() {
    const [isVisible, setIsvisible] = useState(false);
    const overviewref = useRef(null);

    return (
        <Hovercontainer ref={overviewref} className={`overview${isVisible ? 'visible' : ''}`}>
            <Hoverwrap>

            </Hoverwrap>
        </Hovercontainer>
    )
}

export default Overview

const Hovercontainer = styled.div`
    
`

const Hoverwrap = styled.div`
    
`
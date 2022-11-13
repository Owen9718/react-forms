import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewFormData';

function BoxList() {

    const [boxes, setBoxes] = useState([])



    function createBox(data) {
        console.log(data)
        setBoxes([...boxes, data])
    }

    function handleRemove(id) {
        setBoxes(boxes.filter(box => box.id !== id))
    }
    console.log(boxes)
    return (
        <div>
            <NewBoxForm createBox={createBox} />
            {boxes.map(el => {
                return (
                    <Box key={el.id} id={el.id} handleRemove={handleRemove} height={el.height} width={el.width} backgroundColor={el.backgroundColor} />
                )
            })}
        </div>
    )
}


export default BoxList;
import React from 'react'

const SizeComponent = ({data}) => {
  return (
    <>
        {
            data.map((item, index) => (
                <button style={{ backgroundColor: typeof(item) === "string" ? item : ""}} key={index}>{typeof(item) === "number" ? item : ""}</button>
            ))
        }
    </>
  )
}

export default SizeComponent

import React from 'react'

const Header = ({data}) => {
    console.log("Header component is rendering")
  return (
    <div>Header
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
}

export default React.memo(Header)
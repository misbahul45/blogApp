import React from 'react'
import Link from "next/link"

const notFound= () => {
  return (
    <div>
        <h1>Not Found</h1>
        <p>Soory, the Page you are looking does not</p>
        <Link href={'/'}>Home</Link>
    </div>
  )
}

export default notFound

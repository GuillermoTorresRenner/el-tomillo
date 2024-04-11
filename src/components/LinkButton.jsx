import React from 'react'
import Link from 'next/link'

function LinkButton({urlLink, title}) {
  return (
    <Link
        class="border border-white rounded-lg py-1 px-2 hover:border-primary active:bg-secondary"
        href={urlLink} >
        <p class='text-caption text-white'>{title}</p>
    </Link>    
  )
}

export default LinkButton
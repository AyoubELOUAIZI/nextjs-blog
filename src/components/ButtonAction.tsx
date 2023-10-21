import { PencilLine,Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ButtonAction = () => {
  return (
    <div>
       <Link className='btn mr-2'href='/edit/1'> <PencilLine /> Edit</Link>
       <button className='btn btn-error'> <Trash2 /> Delete</button>
    </div>
  )
}

export default ButtonAction


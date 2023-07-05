'use client'

import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { signInWithGoogle } from '@/lib/firebase'

interface LoginProps {
  name: string,
  text: string,
  alt: string,
  src: string,
  linkText: string,
}

export default function Login({ name, text, alt, src, linkText }: LoginProps) {
  return (
    <div className="card w-[350px] bg-base-300 my-10 mx-auto shadow-xl">
      <div className="card-body items-center text-center">
        <h1 className="text-2xl font-bold m-2">{name}</h1>
        <p className="text-lg m-2">{text} via:</p>
        <div className='form-control'>
          <input type='text' placeholder='Username' className='input input-bordered m-3 text-center' />
          <input type='password' placeholder='Password' className='input input-bordered m-3 text-center' />
          <button className='btn btn-neutral m-3'>Login</button>
        </div>
        <p className="text-lg m-2">Or authenticate with:</p>
        <div className="btn-group">
          <button className="btn btn-neutral" onClick={signInWithGoogle}>
            <FcGoogle className="w-6 h-6" />
          </button>
        </div>
        <p className="text-md m-2">{alt}</p>
        <p className='text-md text-accent italic m-2'>
          <Link href={src} prefetch={true}>
            {linkText}
          </Link>
        </p>
      </div>
    </div>
  )
}
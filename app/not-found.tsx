import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-24'>
      <h1 className='text-3xl m-2'>404</h1>
      <h2 className='text-2xl italic m-2'>Not Found</h2>
      <p className='text-xl m-5'>We can't find the page or resource you are looking for.</p>
      <p className='text-md m-2'>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  )
}
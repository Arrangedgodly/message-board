import Navbar from "@/components/Navbar"

interface Params {
  params: {
    user: string
  }
}

export default function Page({ params }: Params) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <h1 className="text-5xl m-2">{params.user}</h1>
    </main>
  )
}
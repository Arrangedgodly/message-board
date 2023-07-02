import Navbar from "@/components/Navbar"

export default function Page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <h1 className="text-5xl m-2">{params.user}</h1>
    </main>
  )
}
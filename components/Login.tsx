interface LoginProps {
  name: string
}

export default function Login({ name }: LoginProps) {
  return (
    <div className="card w-96 bg-base-300 m-10">
      <div className="card-body items-center text-center">
        <h1 className="text-2xl font-bold m-2">{name}</h1>
      </div>
    </div>
  )
}
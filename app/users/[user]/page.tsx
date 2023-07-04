interface Params {
  params: {
    user: string;
  };
}

export default function Page({ params }: Params) {
  return <h1 className="text-5xl m-2">{params.user}</h1>;
}

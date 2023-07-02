import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>404 Not Found</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-5xl m-2">404</h1>
        <h2 className="text-3xl italic m-2">Not Found</h2>
        <p className="text-2xl m-5 text-center">
          We can't find the page or resource you are looking for.
        </p>
        <p className="text-lg m-2">
          View{" "}
          <Link href="/" legacyBehavior>
            <a className="text-accent">all posts</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

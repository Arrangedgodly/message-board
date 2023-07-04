import Login from "@/components/Login"

export default function Page() {
  return (
    <Login 
      name="Login"
      text="Sign in"
      alt="Don't have an account?"
      src="/register"
      linkText="Register here!"
    />
  )
}
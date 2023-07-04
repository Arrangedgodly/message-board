import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="flex flex-col items-center min-h-screen">
    <Navbar />
    {children}
    </section>
}
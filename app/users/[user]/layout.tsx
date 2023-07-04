export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="flex flex-col grow items-center">
    {children}
    </section>
}
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-blue-50 mx-auto flex min-h-screen justify-center items-center">
      {children}
    </main>
  );
}

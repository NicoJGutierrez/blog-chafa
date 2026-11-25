import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav>
          <ul>
            <Link href="/">Inicio</Link> {" | "}
            <Link href="/blogs">Blogs</Link> {" | "}
            <Link href="/blogs/new">Nuevo Blog</Link> {" | "}
            <Link href="/users">Usuarios</Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}

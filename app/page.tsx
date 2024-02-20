import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main><h1>HelloWorld</h1>
      <Link href="/users/new">Users</Link>
    </main>
  )
}

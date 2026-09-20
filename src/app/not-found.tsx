import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 lg:px-8">
      <p className="section-kicker">404</p>
      <h1 className="mt-3 section-title">Offside</h1>
      <p className="mt-4 max-w-lg prose-muted">
        That page isn&apos;t on the pitch. Head back home or pick a section from the nav.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn-primary">
          Back home
        </Link>
      </div>
    </div>
  )
}

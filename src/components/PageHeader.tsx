import Link from 'next/link'

type PageHeaderProps = {
  index?: string
  title: string
  description?: string
  backHref?: string
  backLabel?: string
}

export default function PageHeader({
  index,
  title,
  description,
  backHref,
  backLabel = 'Back',
}: PageHeaderProps) {
  return (
    <header className="mb-10 space-y-4 sm:mb-14">
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex text-sm text-night-400 transition hover:text-flood-300"
        >
          ← {backLabel}
        </Link>
      ) : null}
      {index ? <p className="section-kicker">{index}</p> : null}
      <h1 className="section-title">{title}</h1>
      {description ? <p className="prose-muted max-w-2xl">{description}</p> : null}
    </header>
  )
}

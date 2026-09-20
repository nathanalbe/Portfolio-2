import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-12 font-display text-2xl uppercase tracking-wide text-night-50 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-display text-xl uppercase tracking-wide text-flood-300">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-base leading-relaxed text-night-200 sm:text-lg">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-night-200">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-night-200">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-flood-300 underline-offset-4 hover:underline"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href || '#'} className="text-flood-300 underline-offset-4 hover:underline">
        {children}
      </Link>
    )
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-night-50">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 border-flood-400/60 pl-4 text-night-300 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-night-900 px-1.5 py-0.5 font-mono text-sm text-flood-200">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-xl border border-night-400/15 bg-night-950 p-4 text-sm text-night-100">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-night-400/15" />,
}

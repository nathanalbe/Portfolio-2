'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { primaryNav, secondaryNav } from '@/lib/nav'
import { profile } from '@/content'

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-night-400/10 bg-night-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg uppercase tracking-[0.18em] text-night-50 transition hover:text-flood-400"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 font-display text-xs uppercase tracking-[0.16em] transition ${
                isActive(item.href)
                  ? 'bg-flood-500/15 text-flood-300'
                  : 'text-night-300 hover:text-night-50'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === '/resume'
                  ? 'btn-primary !min-h-[40px] !px-4 !py-2 !text-xs'
                  : 'btn-ghost !min-h-[40px] !px-4 !py-2 !text-xs'
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-night-400/20 text-night-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          id="mobile-nav"
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="border-t border-night-400/10 bg-night-950 lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-3 font-display text-sm uppercase tracking-[0.16em] ${
                  isActive(item.href)
                    ? 'bg-flood-500/15 text-flood-300'
                    : 'text-night-200'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, type CSSProperties, type ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { ImageModal } from './image-modal'
import { projectOrder, getNextAndPreviousProjects } from '@/lib/projectOrder'

const easeOut = [0.22, 1, 0.36, 1] as const

export type SpecEntry = { label: string; value: ReactNode }

export type GalleryItem =
  | {
      type: 'image'
      src: string
      alt: string
      description?: string
      style?: CSSProperties
    }
  | {
      type: 'video'
      src: string
      title?: string
      description?: string
      aspect?: 'video' | 'portrait'
    }
  | {
      type: 'pdf'
      src: string
      title: string
      description?: string
    }

export type ProjectPageLayoutProps = {
  id: string
  tag: string
  title: string
  titleEmphasis?: string
  heroImage: {
    src: string
    alt: string
    style?: CSSProperties
    aspect?: '4/5' | '4/3' | '1/1' | '3/4'
  }
  heroCaption?: string
  specs: SpecEntry[]
  prose: ReactNode
  gallery?: GalleryItem[]
  galleryTitle?: string
  extraSection?: ReactNode
}

export function ProjectPageLayout({
  id,
  tag,
  title,
  titleEmphasis,
  heroImage,
  heroCaption,
  specs,
  prose,
  gallery,
  galleryTitle = 'Gallery',
  extraSection,
}: ProjectPageLayoutProps) {
  const { previousProject, nextProject } = getNextAndPreviousProjects(id)
  const projectIndex = projectOrder.indexOf(id) + 1
  const total = projectOrder.length

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const openModal = (src: string, alt: string) => setSelectedImage({ src, alt })
  const closeModal = () => setSelectedImage(null)

  const heroAspectClass =
    heroImage.aspect === '4/3'
      ? 'aspect-[4/3]'
      : heroImage.aspect === '1/1'
        ? 'aspect-square'
        : heroImage.aspect === '3/4'
          ? 'aspect-[3/4]'
          : 'aspect-[4/5]'

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Title */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="mb-10 flex items-baseline justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
              ◦ {projectIndex.toString().padStart(2, '0')} / {total.toString().padStart(2, '0')}
              {' '}⋆ Projects
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft text-right">
              {tag}
            </p>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
            className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.025em] text-ink"
          >
            {title}
            {titleEmphasis && <> {titleEmphasis}</>}
            <span className="text-signal">.</span>
          </motion.h1>
        </section>

        {/* Hero image + specs */}
        <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: easeOut }}
              className="md:col-span-7"
            >
              <button
                type="button"
                onClick={() => openModal(heroImage.src, heroImage.alt)}
                className="group block w-full text-left"
              >
                <div className={`relative ${heroAspectClass} overflow-hidden rounded-sm bg-paper`}>
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    style={heroImage.style}
                  />
                </div>
              </button>
              {heroCaption && (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  {heroCaption}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: easeOut }}
              className="md:col-span-5 md:col-start-8"
            >
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                ◦ Specifications
              </p>
              <dl className="divide-y divide-hairline border-y border-hairline">
                {specs.map((s, i) => (
                  <div key={i} className="py-5">
                    <dt className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                      {s.label}
                    </dt>
                    <dd className="font-display text-lg leading-snug text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Prose */}
        <section className="mx-auto max-w-3xl px-6 md:px-12 pb-24">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
            ◦ Project
          </p>
          <div className="space-y-6 text-[18px] leading-[1.7] text-ink-soft font-light">
            {prose}
          </div>
        </section>

        {/* Optional extra section (e.g. featured demo video) */}
        {extraSection}

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-28">
            <div className="mb-10 flex items-baseline justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
                ◦ {galleryTitle}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                {gallery.length.toString().padStart(2, '0')} items
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {gallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: Math.min(idx * 0.06, 0.25), ease: easeOut }}
                  className="space-y-3"
                >
                  {item.type === 'image' ? (
                    <button
                      type="button"
                      onClick={() => openModal(item.src, item.alt)}
                      className="group block w-full text-left"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-paper">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                          style={item.style}
                        />
                      </div>
                    </button>
                  ) : item.type === 'video' ? (
                    <div
                      className={`relative ${
                        item.aspect === 'portrait' ? 'aspect-[9/16] max-w-[260px]' : 'aspect-video'
                      } overflow-hidden rounded-sm bg-ink`}
                    >
                      <video className="h-full w-full" controls muted loop playsInline autoPlay>
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-hairline bg-paper">
                      <iframe src={item.src} title={item.title} className="h-full w-full" />
                    </div>
                  )}
                  {item.description && (
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft shrink-0">
                        Fig. {(idx + 1).toString().padStart(2, '0')}
                      </p>
                      <p className="flex-1 text-right text-[13px] leading-snug text-ink-soft font-light">
                        {item.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next */}
        <section className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-10 md:px-12 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject}`}
                className="group flex items-center gap-3 transition-colors hover:text-signal"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                <span>Previous</span>
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject}`}
                className="group flex items-center gap-3 transition-colors hover:text-signal"
              >
                <span>Next</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </section>
      </main>
      <Footer />
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}
    </div>
  )
}

/**
 * Helper for rendering a centered "Demo" section (separate from the gallery)
 * for projects with a hero portrait video or a small set of side-by-side videos.
 */
export function ProjectDemoSection({
  label,
  caption,
  children,
}: {
  label: string
  caption?: string
  children: ReactNode
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
      <div className="mb-10 flex items-baseline justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
          ◦ {label}
        </p>
        {caption && (
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
            {caption}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

import { motion, useReducedMotion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

// Shared animation variants — only animate compositor props (transform, opacity)

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const fadeRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const staggerSlowContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

const defaultTransition = { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }

/** Fade up on scroll */
export function FadeUp({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Fade in on scroll */
export function FadeIn({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Slide in from left */
export function FadeLeft({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={fadeLeftVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Slide in from right */
export function FadeRight({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={fadeRightVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Scale up on scroll */
export function ScaleUp({ children, className, delay = 0 }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={scaleUpVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Stagger children with fade-up. Children must use motion.div with variants. */
export function StaggerChildren({ children, className }: Omit<Props, 'delay'>) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={staggerContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Slower stagger for larger grids */
export function StaggerSlow({ children, className }: Omit<Props, 'delay'>) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      ref={ref}
      variants={staggerSlowContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** A stagger child item — use inside StaggerChildren */
export function StaggerItem({ children, className }: Omit<Props, 'delay'>) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Re-export motion for one-off usage */
export { motion }

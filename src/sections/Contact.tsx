import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { AlertCircle, ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, Clipboard, Linkedin, LoaderCircle, Mail, MessageCircle, Send } from 'lucide-react'
import { Container } from '../components/Container'
import { Reveal } from '../animations/Reveal'
import { siteConfig } from '../data/site'

type FormValues = {
  name: string
  email: string
  projectType: string
  budget: string
  details: string
}

type FieldName = keyof FormValues
type FormErrors = Partial<Record<FieldName, string>>
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'draft'

const initialValues: FormValues = { name: '', email: '', projectType: '', budget: '', details: '' }

const inputStyles = 'mt-2.5 min-h-12 w-full rounded-xl border bg-white/[0.025] px-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 hover:border-white/[0.16] focus:border-violet-400/60 focus:bg-violet-400/[0.025]'

function Field({ label, name, error, optional, children }: { label: string; name: FieldName; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="flex items-center justify-between text-xs font-medium text-zinc-300">
        {label}{optional && <span className="font-mono text-[9px] font-normal uppercase tracking-wider text-zinc-600">Optional</span>}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && <motion.p id={`${name}-error`} role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-red-300" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><AlertCircle className="size-3" />{error}</motion.p>}
      </AnimatePresence>
    </div>
  )
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter at least 2 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!values.projectType) errors.projectType = 'Please choose a project type.'
  if (values.details.trim().length < 20) errors.details = 'Tell us a little more (at least 20 characters).'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const reducedMotion = useReducedMotion()
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

  const brief = useMemo(() => [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Project type: ${values.projectType}`,
    `Budget: ${values.budget || 'Not specified'}`,
    '',
    'Project details:',
    values.details,
  ].join('\n'), [values])

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Project enquiry from ${values.name || 'website visitor'}`)}&body=${encodeURIComponent(brief)}`
  const updateField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
    if (status !== 'idle' && status !== 'submitting') setStatus('idle')
    setCopyState('idle')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstField = ['name', 'email', 'projectType', 'details'].find((field) => nextErrors[field as FieldName])
      if (firstField) document.getElementById(firstField)?.focus()
      return
    }

    setStatus('submitting')

    // With no endpoint configured, never claim a message was sent. Prepare an
    // honest email-draft fallback instead. See README.md for the POST contract.
    if (!endpoint) {
      setStatus('draft')
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Contact request failed: ${response.status}`)
      setValues(initialValues)
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(brief)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-700/[0.07] blur-[130px]" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.83fr_1.17fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3"><span className="h-px w-7 bg-violet-400/70" /><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-300">Start a conversation</p></div>
              <h2 className="text-balance text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-6xl">Have an idea?<br /><span className="text-gradient">Let&apos;s build it properly.</span></h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">Tell us what you are working on, where you are stuck, or what you want to create. We will bring curiosity, candor, and a practical next step.</p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 space-y-3">
              <a target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-violet-300/20 hover:bg-white/[0.035]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300"><Mail className="size-5" /></span>
                <span className="min-w-0"><span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">Business email</span><span className="mt-1 block truncate text-sm font-medium text-zinc-200">{siteConfig.email}</span></span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-violet-300" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-violet-300/20 hover:bg-white/[0.035]">
                  <MessageCircle className="size-5 text-violet-300" />
                  <span className="mt-5 flex items-center justify-between text-sm font-medium text-zinc-200">WhatsApp <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-violet-300" /></span>
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" title="Editable sample LinkedIn destination" className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors hover:border-violet-300/20 hover:bg-white/[0.035]">
                  <Linkedin className="size-5 text-violet-300" />
                  <span className="mt-5 flex items-center justify-between text-sm font-medium text-zinc-200">LinkedIn <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-violet-300" /></span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.18} className="mt-6 flex items-start gap-2.5 text-xs leading-5 text-zinc-600">
              <Check className="mt-0.5 size-3.5 shrink-0 text-violet-400" /> Your details are used only to respond to your enquiry. No newsletter signup, no noise.
            </Reveal>
          </div>

          
        </div>
      </Container>
    </section>
  )
}

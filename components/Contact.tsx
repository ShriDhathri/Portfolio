'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus('error')
            setIsSubmitting(false)
            return
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
            message: formData.message,
            time: new Date().toLocaleString(),
        }

        try {
            const emailjs = (await import('emailjs-com')).default
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )

            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    return (
        <section id="contact" className="bg-background text-foreground py-16 px-6 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
                    <p className="text-muted-foreground text-lg">
                        Get in touch with me for any questions or opportunities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <ContactInfo icon={<MapPin size={24} />} title="Location" content="Shivamogga, Karnataka, India" />
                        <ContactInfo icon={<Phone size={24} />} title="Call" content="+91 6362925156" />
                        <ContactInfo icon={<Mail size={24} />} title="Email" content="dhathridhatu@gmail.com" />
                        <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Let&#39;s Connect!</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                I&#39;m always excited to discuss new opportunities, collaborate on interesting projects,
                                or simply connect with fellow data enthusiasts. Whether you have a question about
                                my work or want to explore potential collaborations, feel free to reach out!
                            </p>
                        </div>
                    </div>

                    <div className="bg-background border border-green-500/20 rounded-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required
                                    className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-md focus:border-green-500 focus:outline-none text-foreground placeholder-muted-foreground transition-colors"
                                />
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required
                                    className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-md focus:border-green-500 focus:outline-none text-foreground placeholder-muted-foreground transition-colors"
                                />
                            </div>

                            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required
                                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-md focus:border-green-500 focus:outline-none text-foreground placeholder-muted-foreground transition-colors"
                            />

                            <textarea name="message" rows={6} placeholder="Your Message" value={formData.message} onChange={handleInputChange} required
                                className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-md focus:border-green-500 focus:outline-none text-foreground placeholder-muted-foreground transition-colors resize-vertical"
                            />

                            <button type="submit" disabled={isSubmitting}
                                className="w-full md:w-auto px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 font-medium"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-2 text-green-600 bg-green-500/10 p-3 rounded-md">
                                    <CheckCircle size={18} />
                                    <span className="text-sm">Message sent successfully! I&#39;ll get back to you soon.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-500/10 p-3 rounded-md">
                                    <AlertCircle size={18} />
                                    <span className="text-sm">Failed to send message. Please try again or contact me directly.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ContactInfoProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground">{content}</p>
            </div>
        </div>
    )
}

export default Contact

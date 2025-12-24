"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@xmb-group.ch",
    href: "mailto:info@xmb-group.ch",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+41 44 123 45 67",
    href: "tel:+41441234567",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Bahnhofstrasse 1, 8001 Zürich",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Mo-Fr: 08:00-18:00",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-xmb-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-xmb-blue/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-xmb-gray mb-6">
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Lassen Sie uns <span className="gradient-text">sprechen</span>
            </h1>
            <p className="text-lg md:text-xl text-xmb-gray leading-relaxed">
              Haben Sie ein Projekt im Sinn oder Fragen zu unseren Services? 
              Wir freuen uns darauf, von Ihnen zu hören.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-8">Kontaktinformationen</h2>
            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-xmb-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-xmb-gray mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-xmb-purple transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Schnelle Antwort</h3>
              <p className="text-sm text-xmb-gray leading-relaxed">
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre 
                Anfrage. Für dringende Anliegen rufen Sie uns gerne direkt an.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-xmb-blue via-xmb-purple to-xmb-pink flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Vielen Dank!
                </h3>
                <p className="text-xmb-gray mb-8">
                  Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns 
                  schnellstmöglich bei Ihnen melden.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                  Neue Nachricht senden
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-white mb-8">
                  Nachricht senden
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-xmb-gray mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10",
                          "text-white placeholder-xmb-gray/50",
                          "focus:outline-none focus:border-xmb-purple/50 focus:ring-1 focus:ring-xmb-purple/50",
                          "transition-colors"
                        )}
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-xmb-gray mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10",
                          "text-white placeholder-xmb-gray/50",
                          "focus:outline-none focus:border-xmb-purple/50 focus:ring-1 focus:ring-xmb-purple/50",
                          "transition-colors"
                        )}
                        placeholder="ihre@email.ch"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-xmb-gray mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10",
                        "text-white placeholder-xmb-gray/50",
                        "focus:outline-none focus:border-xmb-purple/50 focus:ring-1 focus:ring-xmb-purple/50",
                        "transition-colors"
                      )}
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-xmb-gray mb-2">
                      Interessiert an
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10",
                        "text-white",
                        "focus:outline-none focus:border-xmb-purple/50 focus:ring-1 focus:ring-xmb-purple/50",
                        "transition-colors appearance-none cursor-pointer"
                      )}
                    >
                      <option value="" className="bg-xmb-dark">Bitte auswählen</option>
                      <option value="contracting" className="bg-xmb-dark">IT Contracting</option>
                      <option value="security" className="bg-xmb-dark">Cyber Security</option>
                      <option value="software" className="bg-xmb-dark">Software Development</option>
                      <option value="other" className="bg-xmb-dark">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-xmb-gray mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10",
                        "text-white placeholder-xmb-gray/50",
                        "focus:outline-none focus:border-xmb-purple/50 focus:ring-1 focus:ring-xmb-purple/50",
                        "transition-colors resize-none"
                      )}
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Nachricht senden
                    <Send className="w-5 h-5" />
                  </Button>

                  <p className="text-xs text-xmb-gray text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
}


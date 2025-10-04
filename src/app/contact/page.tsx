"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Enviar por WhatsApp
    const phoneNumber = "573115035991";
    const message = `📧 *Nuevo mensaje de contacto*\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Teléfono:* ${formData.phone}\n\n` +
      `*Mensaje:*\n${formData.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(url, '_blank');
    
    setStatus('success');
    
    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus('idle');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[--foreground] mb-4">📧 Contáctanos</h1>
          <p className="text-lg text-[--secondary]">
            ¿Tienes preguntas o quieres hacer un pedido? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="rounded-xl border-2 border-[--border] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[--foreground] mb-6">Información</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="font-bold text-[--foreground]">WhatsApp</h3>
                    <a href="https://wa.me/573115035991" className="text-[--primary] hover:underline">
                      +57 311 503 5991
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-[--foreground]">Email</h3>
                    <a href="mailto:bebidasancestralesaborigen@gmail.com" className="text-[--primary] hover:underline">
                      bebidasancestralesaborigen@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📷</div>
                  <div>
                    <h3 className="font-bold text-[--foreground]">Instagram</h3>
                    <a href="https://www.instagram.com/casa_aborigen" target="_blank" rel="noreferrer" className="text-[--primary] hover:underline">
                      @casa_aborigen
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚚</div>
                  <div>
                    <h3 className="font-bold text-[--foreground]">Envíos</h3>
                    <p className="text-[--secondary]">Bogotá y alrededores<br />24-48 horas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-2 border-[--accent] bg-gradient-to-br from-[--background] to-white p-6 shadow-sm">
              <h3 className="font-bold text-[--foreground] mb-3">🏆 Reconocidos</h3>
              <p className="text-[--secondary]">
                Nuestro Guarapo Aborigen ganó el 1er lugar en el Festival del Guarapo 2024
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-xl border-2 border-[--border] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[--foreground] mb-6">Envíanos un mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[--foreground] mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-[--border] px-4 py-3 focus:border-[--primary] focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[--foreground] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-[--border] px-4 py-3 focus:border-[--primary] focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[--foreground] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-[--border] px-4 py-3 focus:border-[--primary] focus:outline-none"
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[--foreground] mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border-2 border-[--border] px-4 py-3 focus:border-[--primary] focus:outline-none resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-lg bg-[#25D366] px-6 py-4 font-bold text-white hover:bg-[#20BA5A] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' && '⏳ Enviando...'}
                {status === 'success' && '✅ ¡Mensaje enviado!'}
                {status === 'idle' && (
                  <>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Enviar por WhatsApp
                  </>
                )}
                {status === 'error' && '❌ Error, intenta de nuevo'}
              </button>

              <p className="text-xs text-[--secondary] text-center">
                Al enviar, serás redirigido a WhatsApp para completar tu mensaje
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}


'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

export default function DistribuidoresPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    negocio: '',
    tipoNegocio: '',
    ciudad: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica de envío (por ahora solo simulamos)
    console.log('Datos del distribuidor:', formData);
    
    // Enviar por WhatsApp
    const whatsappMsg = `
🤝 *NUEVO INTERESADO EN SER DISTRIBUIDOR*

👤 *Nombre:* ${formData.nombre}
🏪 *Negocio:* ${formData.negocio}
📦 *Tipo:* ${formData.tipoNegocio}
📍 *Ciudad:* ${formData.ciudad}
📱 *Teléfono:* ${formData.telefono}
✉️ *Email:* ${formData.email}
💬 *Mensaje:* ${formData.mensaje}
    `.trim();

    const whatsappUrl = `https://wa.me/573115035991?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappUrl, '_blank');
    
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
    
    // Resetear formulario
    setFormData({
      nombre: '',
      negocio: '',
      tipoNegocio: '',
      ciudad: '',
      telefono: '',
      email: '',
      mensaje: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#f8f5f0] to-[#e8e0d5]">
        {/* Hero Section */}
        <section className="bg-[#8b4513] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">
              Únete a Nuestra Red de Distribuidores
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto opacity-95">
              Comparte la tradición y cultura de las bebidas ancestrales colombianas
              mientras construyes un negocio rentable.
            </p>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-16 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2c1810] mb-12 text-center">
            ¿Por qué ser distribuidor de Aborigen?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#d4c5b0] hover:border-[#8b4513] transition-all">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">Márgenes Atractivos</h3>
              <p className="text-gray-700">
                Obtén descuentos exclusivos por volumen y aumenta tus ingresos con productos únicos
                de alta rotación.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#d4c5b0] hover:border-[#8b4513] transition-all">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">Productos Únicos</h3>
              <p className="text-gray-700">
                Ofrece bebidas que no se encuentran en otros lugares. Productos galardonados
                y con historia cultural.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#d4c5b0] hover:border-[#8b4513] transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">Apoyo Completo</h3>
              <p className="text-gray-700">
                Te brindamos material de marketing, capacitación sobre productos y soporte
                continuo para tu éxito.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#d4c5b0] hover:border-[#8b4513] transition-all">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">Marca en Crecimiento</h3>
              <p className="text-gray-700">
                Únete a una marca reconocida y en expansión. Ganadores del Festival del Guarapo 2024.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#d4c5b0] hover:border-[#8b4513] transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">Exclusividad Territorial</h3>
              <p className="text-gray-700">
                Posibilidad de obtener exclusividad en tu zona según volumen de ventas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#d4c5b0] hover:border-[#8b4513] transition-all">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-[#8b4513] mb-3">Impacto Social</h3>
              <p className="text-gray-700">
                Apoya a comunidades indígenas y afrodescendientes mientras generas ingresos.
              </p>
            </div>
          </div>
        </section>

        {/* Perfil Ideal */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#2c1810] mb-8 text-center">
              ¿Quién puede ser distribuidor?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🏪</span>
                <div>
                  <h3 className="font-bold text-lg text-[#8b4513] mb-1">Tiendas Naturistas</h3>
                  <p className="text-gray-700">Productos saludables con historia cultural</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🍽️</span>
                <div>
                  <h3 className="font-bold text-lg text-[#8b4513] mb-1">Restaurantes</h3>
                  <p className="text-gray-700">Complementa tu menú con bebidas únicas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🍷</span>
                <div>
                  <h3 className="font-bold text-lg text-[#8b4513] mb-1">Bares y Cafés</h3>
                  <p className="text-gray-700">Crea cócteles artesanales diferenciadores</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🛒</span>
                <div>
                  <h3 className="font-bold text-lg text-[#8b4513] mb-1">Supermercados</h3>
                  <p className="text-gray-700">Amplía tu sección gourmet y artesanal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">🎪</span>
                <div>
                  <h3 className="font-bold text-lg text-[#8b4513] mb-1">Ferias y Mercados</h3>
                  <p className="text-gray-700">Productos perfectos para eventos culturales</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">💼</span>
                <div>
                  <h3 className="font-bold text-lg text-[#8b4513] mb-1">Emprendedores</h3>
                  <p className="text-gray-700">Inicia tu negocio con productos probados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section className="py-16 max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 border-2 border-[#d4c5b0]">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-6 text-center">
              Solicita Información de Distribución
            </h2>
            
            {enviado && (
              <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg mb-6">
                ✅ ¡Gracias por tu interés! Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre del Negocio *
                  </label>
                  <input
                    type="text"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                    placeholder="Nombre de tu tienda/negocio"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Negocio *
                </label>
                <select
                  name="tipoNegocio"
                  value={formData.tipoNegocio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="tienda-naturista">Tienda Naturista</option>
                  <option value="restaurante">Restaurante</option>
                  <option value="bar-cafe">Bar/Café</option>
                  <option value="supermercado">Supermercado</option>
                  <option value="feria-mercado">Feria/Mercado</option>
                  <option value="emprendedor">Emprendedor</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                    placeholder="Bogotá, Medellín, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                    placeholder="311 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje / Consulta
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#d4c5b0] rounded-lg focus:border-[#8b4513] focus:outline-none"
                  placeholder="Cuéntanos sobre tu negocio y expectativas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8b4513] text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-[#5c4033] transition-colors shadow-lg"
              >
                📱 Enviar Solicitud por WhatsApp
              </button>

              <p className="text-sm text-gray-600 text-center">
                * Campos obligatorios. Al enviar, serás redirigido a WhatsApp para completar tu solicitud.
              </p>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#f8f5f0] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-10 text-center">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-[#8b4513] mb-2">
                  ¿Cuál es el pedido mínimo?
                </h3>
                <p className="text-gray-700">
                  El pedido mínimo inicial es flexible y se ajusta según tu tipo de negocio.
                  Te contactaremos para definir el mejor plan para ti.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-[#8b4513] mb-2">
                  ¿Ofrecen exclusividad territorial?
                </h3>
                <p className="text-gray-700">
                  Sí, después de establecer un volumen de ventas consistente, podemos
                  ofrecerte exclusividad en tu zona.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-[#8b4513] mb-2">
                  ¿Qué material de apoyo recibiré?
                </h3>
                <p className="text-gray-700">
                  Proporcionamos fichas técnicas, material POP, fotos profesionales,
                  capacitación sobre productos y estrategias de venta.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-[#8b4513] mb-2">
                  ¿Cómo son los márgenes de ganancia?
                </h3>
                <p className="text-gray-700">
                  Ofrecemos descuentos escalonados según volumen, con márgenes competitivos
                  que permiten rentabilidad atractiva. Detalles en la primera reunión.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-[#8b4513] mb-2">
                  ¿Hacen envíos a todo Colombia?
                </h3>
                <p className="text-gray-700">
                  Sí, enviamos a todo el país. Los costos de envío se calculan según destino y volumen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-[#8b4513] to-[#5c4033] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para Unirte a Nuestra Familia?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Comienza hoy a compartir la tradición colombiana y construye un negocio con propósito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573115035991?text=Hola%2C%20quiero%20información%20sobre%20ser%20distribuidor%20de%20Aborigen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#8b4513] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
              >
                💬 Contactar por WhatsApp
              </a>
              <a
                href="tel:+573115035991"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#8b4513] transition-colors inline-block"
              >
                📞 Llamar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


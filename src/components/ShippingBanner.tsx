export function ShippingBanner() {
  const features = [
    {
      icon: "🚚",
      text: "Envíos a Bogotá y alrededores"
    },
    {
      icon: "📦",
      text: "Empaque seguro y refrigerado"
    },
    {
      icon: "⚡",
      text: "Entregas en 24-48 horas"
    },
    {
      icon: "💬",
      text: "Pedidos por WhatsApp"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#5a6b3d] to-[#6b7c4a] py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-white"
            >
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-sm font-medium sm:text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 'chicha-boyaca',
    name: 'Chicha de Maíz',
    description:
      'Bebida ceremonial ancestral de los pueblos Muiscas, elaborada artesanalmente con maíz fermentado. Su sabor único y propiedades nutricionales la convierten en un tesoro de nuestra cultura. Perfecta para compartir en encuentros especiales.',
    price: 15.0,
    region: 'Boyacá',
    imageUrl:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'guarapo-cundinamarca',
    name: 'Guarapo de Caña',
    description:
      'Refrescante bebida campesina extraída del jugo puro de caña de azúcar, ligeramente fermentada. Acompañó las jornadas agrícolas de nuestros ancestros y hoy revive con su dulzor natural y energizante sabor tradicional.',
    price: 12.0,
    region: 'Cundinamarca',
    imageUrl:
      'https://images.unsplash.com/photo-1553531589-498ABC49118F?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'masato-tolima',
    name: 'Masato de Arroz',
    description:
      'Deliciosa bebida dulce elaborada con arroz, panela y especias aromáticas. Herencia de las comunidades indígenas del Tolima, su textura cremosa y sabor reconfortante la hacen ideal para cualquier momento del día.',
    price: 14.0,
    region: 'Tolima',
    imageUrl:
      'https://images.unsplash.com/photo-1627415494383-0407a2139049?q=80&w=1964&auto=format&fit=crop',
  },
  {
    id: 'biche-pacifico',
    name: 'Biche del Pacífico',
    description:
      'Aguardiente artesanal destilado de caña, símbolo de resistencia y patrimonio afrodescendiente del Pacífico colombiano. Aromatizado con hierbas tradicionales, su carácter intenso celebra la cultura y el espíritu de nuestras raíces.',
    price: 35.0,
    region: 'Pacífico',
    imageUrl:
      'https://images.unsplash.com/photo-1608275892095-83a3d5371465?q=80&w=1928&auto=format&fit=crop',
  },
];

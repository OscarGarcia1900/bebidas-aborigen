import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 'guarapo-aborigen',
    name: 'Guarapo Aborigen',
    description:
      'Cada sorbo es un viaje a las raíces de la naturaleza, donde la sabiduría ancestral se encuentra con el placer sensorial. Bebida tradicional de Colombia con raíces ancestrales de comunidades indígenas y campesinas. Panela fermentada con nódulos de Kefir, infusionado con hierbas y especias. Rico en probióticos que favorecen la salud digestiva, aporta energía natural y refresca el cuerpo. 🏆 Ganador del 1er puesto en el Festival del Guarapo 2024.',
    price: 15000,
    region: 'Bogotá',
    imageUrl: '/images/guarapo.png',
  },
  {
    id: 'viche-curado',
    name: 'Viche Curado',
    description:
      'El secreto medicinal del Pacífico colombiano. Destilado artesanal afrocolombiano del Pacífico, transmitido por generaciones como bebida ritual y medicinal. Elaborado con viche (destilado de caña), hierbas curativas, raíces y especias maceradas. Reconocido por sus propiedades revitalizantes, fortalece el sistema inmune y mejora la circulación gracias a su combinación de hierbas. ¡Prueba el sabor de la caña en cada sorbo! Botella de media.',
    price: 25000,
    region: 'Pacífico',
    imageUrl: '/images/viche curao.png',
  },
  {
    id: 'vinete',
    name: 'Vinete',
    description:
      'Poción afrodisíaca y revitalizante. Una bebida ancestral que fusiona la fuerza del viche con el dulzor de la caña y las especias. Bebida afrocolombiana del Pacífico, utilizada en rituales de bienestar y celebración. Elaborado con viche (destilado de caña), panela, clavos de olor, canela, vainilla y otros botánicos. Considerado un potente reconstituyente y afrodisíaco, ideal para revitalizar el cuerpo y el alma, perfecto para la salud menstrual de la mujer. Botella pequeña.',
    price: 15000,
    region: 'Pacífico',
    imageUrl: '/images/vinete.png',
  },
  {
    id: 'yubeka',
    name: 'Yubeka (Aguardiente Nasa)',
    description:
      'Más que una bebida, es un legado ancestral de la comunidad Nasa, una fuente de energía y conexión con la tierra, perfecta para el cuerpo y el espíritu. Bebida tradicional de la comunidad indígena Nasa de Caloto, Cauca, utilizada para fortalecer el cuerpo y la mente. Destilado de caña curado con plantas sagradas. Aporta energía, calienta el vientre y conecta con la sabiduría ancestral a través de sus ingredientes naturales. Botella de media.',
    price: 25000,
    region: 'Caloto - Cauca',
    imageUrl: '/images/yubeka.png',
  },
  {
    id: 'caipirinha',
    name: 'Caipiriña',
    description:
      'El cóctel icónico de Brasil que conquista paladares. Una mezcla refrescante y vibrante perfecta para cualquier ocasión. Bebida tradicional brasileña que combina cachaça (aguardiente de caña), limón fresco, azúcar y hielo. Su sabor agridulce y refrescante la hace ideal para acompañar celebraciones y momentos especiales. Una experiencia tropical en cada vaso. Botella de litro.',
    price: 25000,
    region: 'Brasil',
    imageUrl: '/images/caipiriña.png',
  },
  {
    id: 'chapil',
    name: 'Chapil',
    description:
      'Bebida tradicional campesina de Ricaurte, Nariño, elaborada con el corazón y las manos de agricultores de las montañas andinas. Preparado artesanalmente con caña de azúcar fermentada y hierbas aromáticas de la región, siguiendo recetas ancestrales transmitidas de generación en generación. Su sabor terroso y dulce a la vez te conecta con la tradición agrícola nariñense. Cada sorbo es un homenaje al trabajo campesino y a la riqueza cultural del sur de Colombia. Botella de media.',
    price: 25000,
    region: 'Ricaurte - Nariño',
    imageUrl: '/images/vinete.png',
  },
];
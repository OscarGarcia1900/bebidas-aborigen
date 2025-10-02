import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 'guarapo-aborigen',
    name: 'Guarapo Aborigen',
    description:
      'Cada sorbo es un viaje a las raíces de la naturaleza, donde la sabiduría ancestral se encuentra con el placer sensorial. Bebida tradicional de Colombia con raíces ancestrales de comunidades indígenas y campesinas. Panela fermentada con nódulos de Kefir, infusionado con hierbas y especias. Rico en probióticos que favorecen la salud digestiva, aporta energía natural y refresca el cuerpo. 🏆 Ganador del 1er puesto en el Festival del Guarapo 2024.',
    price: 8.0,
    region: 'Bogotá',
    imageUrl: '/images/pagina-05.jpg',
  },
  {
    id: 'viche-curado',
    name: 'Viche Curado',
    description:
      'El secreto medicinal del Pacífico colombiano. Destilado artesanal afrocolombiano del Pacífico, transmitido por generaciones como bebida ritual y medicinal. Elaborado con viche (destilado de caña), hierbas curativas, raíces y especias maceradas. Reconocido por sus propiedades revitalizantes, fortalece el sistema inmune y mejora la circulación gracias a su combinación de hierbas. ¡Prueba el sabor de la caña en cada sorbo!',
    price: 35.0,
    region: 'Pacífico',
    imageUrl: '/images/pagina-07.jpg',
  },
  {
    id: 'vinete',
    name: 'Vinete',
    description:
      'Poción afrodisíaca y revitalizante. Una bebida ancestral que fusiona la fuerza del viche con el dulzor de la caña y las especias. Bebida afrocolombiana del Pacífico, utilizada en rituales de bienestar y celebración. Elaborado con viche (destilado de caña), panela, clavos de olor, canela, vainilla y otros botánicos. Considerado un potente reconstituyente y afrodisíaco, ideal para revitalizar el cuerpo y el alma, perfecto para la salud menstrual de la mujer.',
    price: 30.0,
    region: 'Pacífico',
    imageUrl: '/images/pagina-09.jpg',
  },
  {
    id: 'aguardiente-nasa',
    name: 'Aguardiente Artesanal Nasa',
    description:
      'Más que una bebida, es un legado ancestral de la comunidad Nasa, una fuente de energía y conexión con la tierra, perfecta para el cuerpo y el espíritu. Bebida tradicional de la comunidad indígena Nasa de Caloto, Cauca, utilizada para fortalecer el cuerpo y la mente. Destilado de caña curado con plantas sagradas. Aporta energía, calienta el vientre y conecta con la sabiduría ancestral a través de sus ingredientes naturales. 30% vol. / 0.2L',
    price: 12.0,
    region: 'Caloto - Cauca',
    imageUrl: '/images/pagina-13.jpg',
  },
];
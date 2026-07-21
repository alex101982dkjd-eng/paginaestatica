export const WHATSAPP_NUMBER = '525536456171';

export const categories = ['Abarrotes', 'Bebidas', 'Botanas', 'Limpieza', 'Hogar'];

// Fotos de referencia (Wikimedia Commons, uso libre). Cuando tengas fotos propias
// de cada producto, solo reemplaza el valor de "image" por tu propio archivo/URL.
const IMG = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

// Nombre del icono Lucide (se importa dinámicamente en el componente)
export const products = [
  { id: 1,  category: 'Abarrotes', name: 'Arroz Extra 1kg',         description: 'Arroz de grano largo, ideal para toda la familia.',       price: 28.50, icon: 'Wheat',      featured: true,  image: IMG + 'White_rice_at_home.jpg' },
  { id: 2,  category: 'Abarrotes', name: 'Frijol Bayo 1kg',         description: 'Frijol de primera calidad, limpio y seleccionado.',        price: 32.00, icon: 'Sprout',     featured: false, image: IMG + 'Dried_Beans.jpg' },
  { id: 3,  category: 'Abarrotes', name: 'Aceite Vegetal 1L',       description: 'Aceite 100% vegetal, bajo en grasas saturadas.',          price: 45.00, icon: 'FlaskConical',featured: true,  image: IMG + 'Many_types_of_Oils.jpg' },
  { id: 4,  category: 'Bebidas',   name: 'Agua Natural 1.5L',       description: 'Agua purificada con minerales esenciales.',               price: 12.00, icon: 'Droplets',   featured: true,  image: IMG + 'Bottled_water.jpg' },
  { id: 5,  category: 'Bebidas',   name: 'Refresco 600ml',          description: 'Variedad de sabores: cola, naranja y limón.',             price: 18.00, icon: 'GlassWater', featured: false, image: IMG + 'Soda_Cans_Pexels_Breakingpic_3008.jpg' },
  { id: 6,  category: 'Bebidas',   name: 'Jugo Natural 1L',         description: 'Jugo de naranja sin conservadores.',                      price: 35.00, icon: 'Leaf',       featured: false, image: IMG + 'Orangejuice.jpg' },
  { id: 7,  category: 'Botanas',   name: 'Papas fritas 100g',       description: 'Crujientes papas con sal de mar.',                       price: 14.00, icon: 'Package',    featured: false, image: IMG + 'Potato-Chips.jpg' },
  { id: 8,  category: 'Botanas',   name: 'Chicharrón 80g',          description: 'Chicharrón de cerdo con chile y limón.',                 price: 16.00, icon: 'Flame',      featured: true,  image: IMG + 'Pork_rind_in_Boquer%C3%B3n.JPG' },
  { id: 9,  category: 'Limpieza',  name: 'Detergente 1kg',          description: 'Detergente en polvo para ropa blanca y de color.',       price: 52.00, icon: 'Sparkles',   featured: false, image: IMG + 'Laundry_detergent_pods.jpg' },
  { id: 10, category: 'Limpieza',  name: 'Cloro 1L',                description: 'Blanqueador y desinfectante multiusos.',                 price: 22.00, icon: 'Beaker',     featured: false, image: IMG + 'Bleach-bottle.jpg' },
  { id: 11, category: 'Hogar',     name: 'Papel de baño paq. 4',    description: 'Papel suave de doble hoja, 4 rollos.',                   price: 38.00, icon: 'ScrollText', featured: false, image: IMG + 'Roll_of_Toilet_Paper.JPG' },
  { id: 12, category: 'Hogar',     name: 'Servilletas 100 pzas',    description: 'Servilletas de papel resistente.',                       price: 18.00, icon: 'FileText',   featured: false, image: IMG + 'Serviette%2C_table_napkin.jpg' },
];

export const offers = [
  { id: 1, title: 'Pack Despensa Básica',  description: 'Arroz 1kg + Frijol 1kg + Aceite 1L + Sal 1kg', originalPrice: 115.00, salePrice: 89.00,  discount: '23% OFF', icon: 'ShoppingCart', image: IMG + 'White_rice_at_home.jpg' },
  { id: 2, title: 'Pack Bebidas x6',       description: '6 refrescos 600ml surtidos',                    originalPrice: 108.00, salePrice: 85.00,  discount: '21% OFF', icon: 'GlassWater',   image: IMG + 'Soda_Cans_Pexels_Breakingpic_3008.jpg' },
  { id: 3, title: 'Pack Limpieza Hogar',   description: 'Detergente 1kg + Cloro 1L + Escoba',            originalPrice: 120.00, salePrice: 95.00,  discount: '21% OFF', icon: 'Sparkles',     image: IMG + 'Bleach-bottle.jpg' },
];

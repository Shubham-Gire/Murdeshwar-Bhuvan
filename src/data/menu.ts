export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: 'signature' | 'spicy' | 'new' | 'popular';
}

export interface MenuCategory {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: 'Dosas',
    subtitle: 'Crispy golden crepes made from fermented rice & lentil batter',
    items: [
      { name: 'Masala Dosa', description: 'Stuffed with spiced potato masala, served with sambar & coconut chutney', price: '₹120', tag: 'signature' },
      { name: 'Plain Dosa', description: 'Classic crispy dosa with sambar & three chutneys', price: '₹90' },
      { name: 'Mysore Masala Dosa', description: 'Spicy red chutney smeared inside, potato masala filling', price: '₹140', tag: 'spicy' },
      { name: 'Onion Dosa', description: 'Sauteed onions folded into a crispy golden dosa', price: '₹110' },
      { name: 'Paper Dosa', description: 'Extra thin, extra crispy — a two-foot wonder', price: '₹130', tag: 'popular' },
      { name: 'Ghee Roast Dosa', description: 'Roasted in pure ghee for a rich, nutty aroma', price: '₹125' },
      { name: 'Cheese Masala Dosa', description: 'Loaded with melted cheese & potato masala', price: '₹160', tag: 'popular' },
      { name: 'Sada Rava Dosa', description: 'Semolina dosa, lacy & crisp, instant batter', price: '₹115' },
    ],
  },
  {
    title: 'Idli & Vada',
    subtitle: 'Steamed rice cakes & golden fried lentil donuts',
    items: [
      { name: 'Idli Sambar (2 pcs)', description: 'Steamed rice cakes with sambar & chutney', price: '₹70', tag: 'popular' },
      { name: 'Sambar Vada (2 pcs)', description: 'Fried lentil donuts soaked in hot sambar', price: '₹80' },
      { name: 'Idli-Vada Combo', description: 'Two idlis & one vada with sambar & chutneys', price: '₹95', tag: 'signature' },
      { name: 'Rava Idli (2 pcs)', description: 'Semolina idli with coconut chutney & sambar', price: '₹85' },
      { name: 'Dahi Vada', description: 'Vada topped with yogurt, tamarind & mint chutney', price: '₹90' },
      { name: 'Masala Vada (4 pcs)', description: 'Crispy chana dal patties with onion & curry leaves', price: '₹75', tag: 'spicy' },
    ],
  },
  {
    title: 'Rice & Meals',
    subtitle: 'Hearty South Indian rice dishes served on banana leaf',
    items: [
      { name: 'Mini Meals (Thali)', description: 'Rice, sambar, rasam, two curries, curd, pickle & papad', price: '₹180', tag: 'signature' },
      { name: 'Curd Rice', description: 'Tempered yogurt rice with pomegranate & curry leaves', price: '₹110' },
      { name: 'Lemon Rice', description: 'Tangy rice with peanuts, turmeric & curry leaves', price: '₹120' },
      { name: 'Bisi Bele Bath', description: 'Karnataka-style rice with lentils, tamarind & vegetables', price: '₹140', tag: 'popular' },
      { name: 'Tomato Rice', description: 'Spiced rice with fresh tomatoes & coriander', price: '₹120' },
      { name: 'Veg Biryani', description: 'Fragrant basmati with mixed vegetables & raita', price: '₹160' },
    ],
  },
  {
    title: 'Beverages',
    subtitle: 'Traditional South Indian drinks & filter coffee',
    items: [
      { name: 'Filter Coffee', description: 'Authentic South Indian decoction with frothy milk', price: '₹40', tag: 'signature' },
      { name: 'Masala Chai', description: 'Spiced milk tea brewed with cardamom & ginger', price: '₹35' },
      { name: 'Buttermilk (Chaas)', description: 'Spiced yogurt drink with curry leaves & cumin', price: '₹30' },
      { name: 'Rose Milk', description: 'Chilled milk with rose syrup & a hint of cardamom', price: '₹45', tag: 'popular' },
      { name: 'Badam Milk', description: 'Almond-flavored warm milk with saffron & nuts', price: '₹55' },
      { name: 'Fresh Lime Soda', description: 'Refreshing lime with soda — sweet, salt or mixed', price: '₹35' },
    ],
  },
];

export interface FeaturedDish {
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: string;
}

export const featuredDishes: FeaturedDish[] = [
  {
    name: 'Masala Dosa',
    tagline: 'Our Signature',
    description: 'A golden, paper-thin crepe of fermented rice and urad dal batter, stuffed with a fragrant potato masala tempered with mustard seeds, curry leaves, and turmeric. Served with piping hot sambar and three chutneys — coconut, tomato, and mint.',
    image: 'https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    price: '₹120',
  },
  {
    name: 'Idli Sambar',
    tagline: 'Steamed Perfection',
    description: 'Cloud-soft steamed rice cakes served in a bowl of rich sambar simmered with toor dal, tamarind, and a secret blend of 14 spices. Paired with freshly ground coconut chutney.',
    image: 'https://images.pexels.com/photos/20422128/pexels-photo-20422128.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    price: '₹70',
  },
  {
    name: 'Medu Vada',
    tagline: 'Crispy & Golden',
    description: 'Hand-shaped lentil donuts fried to a golden crisp on the outside, soft and fluffy within. Served soaked in hot sambar with coconut chutney — the perfect comfort food.',
    image: 'https://images.pexels.com/photos/20422135/pexels-photo-20422135.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
    price: '₹80',
  },
];

export const galleryImages = [
  { url: 'https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Masala dosa with chutneys and sambar on dark background' },
  { url: 'https://images.pexels.com/photos/14132112/pexels-photo-14132112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'South Indian meal on banana leaf' },
  { url: 'https://images.pexels.com/photos/16128085/pexels-photo-16128085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Filter coffee in traditional brass cups' },
  { url: 'https://images.pexels.com/photos/20422129/pexels-photo-20422129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dosa with coconut chutney, curry and sambar' },
  { url: 'https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Top view of dosa meal with chutneys' },
  { url: 'https://images.pexels.com/photos/20422132/pexels-photo-20422132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vada with sambar and chutneys' },
];

export const heroImage = 'https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1600';
export const aboutImage = 'https://images.pexels.com/photos/19447626/pexels-photo-19447626.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';
export const interiorImage = 'https://images.pexels.com/photos/38349089/pexels-photo-38349089.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

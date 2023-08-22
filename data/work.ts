export interface Work {
  id: string;
  name: string;
  desc: string;
  link: string;
  github: string[];
  tech: string[];
  picture: string;
}

export const work = [
  {
    id: '1',
    name: 'Audiophile E-commerce Site',
    desc: 'A full-stack e-commerce web application with shopping cart features, user authentication, and order tracking',
    link: 'https://audiophile.kayyan.dev',
    github: ['https://github.com/kayc529/audiophile-fullstack'],
    tech: ['React', 'Typescript', 'TailwindCSS', 'Express.js', 'MongoDB'],
    picture: 'audiophile.png',
  },
  {
    id: '2',
    name: 'Feedback Forum',
    desc: 'A forum for people to give suggestions on the product and browse feedbacks from other users',
    link: 'https://product.kayyan.dev',
    github: [
      'https://github.com/kayc529/product-feedback-app',
      'https://github.com/kayc529/product-feedback-app-server',
    ],
    tech: ['React', 'Javascript', 'TailwindCSS', 'Express.js', 'MongoDB'],
    picture: 'product_1.png',
  },
  {
    id: '3',
    name: 'PayApi Site',
    desc: 'A multi-page website for the product PayApi with beaufiful UI.',
    link: '',
    github: ['https://github.com/kayc529/payapi'],
    tech: ['React', 'Javascript', 'TailwindCSS'],
    picture: 'payapi.png',
  },
];

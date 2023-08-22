export interface Experience {
  id: string;
  company: string;
  title: string;
  duration: string;
  desc: string[];
  companyLink: string;
  techUsed: string[];
  product?: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Accenture',
    title: 'Software Developer',
    duration: 'Apr 2020 - Apr 2021',
    desc: [
      'Delivered a high-quality, robust and scalable solution for a cross-platform mobile app using React, React Native and Firebase',
      'Collaborated closely with cross-functional teams to fulfill business requirements',
      'Implemented highly reusable components with detailed documentation, optimizing the development process and contributing to a 50% reduction in development time',
      'Demonstrated leadership as a mentor to less experienced developers, offering guidance on best coding practices and code reviews',
    ],
    companyLink: 'https://www.accenture.com/ca-en',
    techUsed: [
      'React',
      'React Native',
      'Typescript',
      'Javascript',
      'CSS',
      'REST API',
      'Firebase',
      'Microsoft Azure',
      'AWS S3',
    ],
  },
  {
    id: '2',
    company: 'Antelope',
    title: 'Software Developer',
    duration: 'Aug 2019 - Mar 2020',
    desc: [
      'Engineered and improved features of a document management system on mobiles and tablets with Java and Android Studio',
      'Resolved 90% of known bugs in the system, significantly boosting the reliability and improving the overall user experience',
      'Optimized offline functionalities of the mobile app using SQLite for local storage',
      'Troubleshooted technical issues encountered by end users',
    ],
    companyLink: 'https://www.antelopeglobal.com/',
    techUsed: ['Java', 'Android Studio', 'XML', 'SOAP API', 'SQLite'],
    product: ['MobileWork DX', 'https://www.antelopeglobal.com/mobilework-dx'],
  },
  {
    id: '3',
    company: 'Skytree',
    title: 'Frontend Programmer',
    duration: 'Dec 2018 - Jun 2019',
    desc: [
      'Developed, maintained and shipped production code for an award-winning mobile game on both iOS and Android platforms using C# and Unity3D',
      'Implemented an efficient file zipping system that resulted in a 30% reduction in game assets download time, significantly enhancing the game’s accessibility and user satisfaction',
      'Managed monthly in-game event data with MySQL to provide the latest game content',
    ],
    companyLink: 'https://www.skytree.com.hk/',
    techUsed: ['C#', 'Unity3D', 'iOS', 'Android', 'MySQL', 'Jira'],
    product: ['Trillionia', 'https://www.skytree.com.hk/games/trillionia'],
  },
];

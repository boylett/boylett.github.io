import './App.css';
import Block from './components/Block';
import Logo from './components/Logo';

function App() {
  const content = [
    {
      title: {
        prefix: 'I speak',
        words: [
          "Apache",
          "Bash",
          "CoffeeScript",
          "CSS",
          "HTML",
          "JavaScript",
          "Laravel",
          "MongoDB",
          "MySQL",
          "Next.js",
          "Nginx",
          "Node.js",
          "PHP",
          "PostgreSQL",
          "Python",
          "React",
          "SASS",
          "Slim",
          "Stylus",
          "Symfony",
          "TypeScript",
        ],
      },
      content: [
        'As a full stack developer, I make ample use of the web\'s latest and most robust technologies - React, TypeScript, PHP, HTML, CSS and, of course, JavaScript.',
        'I\'ve written countless React components, jQuery extensions, WordPress plugins, Magento components, complex database queries and various scriptlets for use within larger scale projects, and am actively learning Node.js and Laravel.',
      ],
      thumbnail: false,
      links: [
        {
          href: 'https://codepen.io/boylett',
          icon: 'fab fa-codepen',
          text: 'codepen.io/boylett'
        },
        {
          href: 'https://github.com/boylett#',
          icon: 'fab fa-github-alt',
          text: 'github.com/boylett'
        },
        {
          href: 'https://linkedin.com/in/boylett',
          icon: 'fab fa-linkedin',
          text: 'linkedin.com/in/boylett'
        },
      ],
    },
  ];

  return (
    <main className="app">
      <header className="app__header">
        <Logo />
      </header>
      <section className="app__content">
        { content.map((blockContent, index) => <Block title={blockContent.title} content={blockContent.content} thumbnail={blockContent.thumbnail} links={blockContent.links} key={index} /> ) }
      </section>
    </main>
  );
}

export default App;

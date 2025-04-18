import "./App.css";
import Block from "./components/Block";
import Logo from "./components/Logo";

function App () {
  const content = [
    {
      title: {
        prefix: "I speak",
        words: [
          "Apache",
          "Bash",
          "CoffeeScript",
          "CSS",
          "HTML",
          "JavaScript",
          "Laravel",
          "MongoDB",
          "Mongoose",
          "MySQL",
          "Next.js",
          "Nginx",
          "Node.js",
          "PHP",
          "PostgreSQL",
          "Python",
          "React",
          "Remix",
          "SASS",
          "SCSS",
          "Slim",
          "Stylus",
          "Symfony",
          "Svelte",
          "TypeScript",
          "Vite",
        ],
      },
      content: [
        "As a full stack developer, I make ample use of the web's latest and most robust technologies - React, Svelte, TypeScript, PHP, HTML, CSS and, of course, JavaScript.",
        "I've written countless React and Svelte components, jQuery extensions, WordPress plugins, Magento components, complex database queries and various scriptlets for use within larger scale projects, and am actively learning more.",
      ],
      thumbnail: false,
      links: [
        {
          href: "https://github.com/boylett",
          icon: "fab fa-github-alt",
          text: "github.com/boylett",
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
        { content.map((blockContent, index) => (
          <Block
            title={ blockContent.title }
            content={ blockContent.content }
            thumbnail={ blockContent.thumbnail }
            links={ blockContent.links }
            key={ index }
          />
        )) }
      </section>
    </main>
  );
}

export default App;

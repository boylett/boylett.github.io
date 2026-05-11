import "./App.css";
import Block from "./components/Block";
import Logo from "./components/Logo";

function App() {
  const content = [
    {
      title: {
        prefix: "I speak",
        words: [
          "AMPScript",
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
          icon: '<svg width="98" height="96" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="currentColor"/></g></svg>',
          text: "GitHub",
        },
        {
          href: "https://marketplace.visualstudio.com/publishers/boylett",
          icon: '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M73.2909 0.259766C73.3101 0.26018 73.3293 0.261126 73.3485 0.261719C73.3999 0.263154 73.4514 0.264863 73.5028 0.267578C73.5536 0.270409 73.6043 0.275214 73.6551 0.279297C73.766 0.287883 73.8766 0.299873 73.9872 0.314453C74.0015 0.316383 74.0158 0.318282 74.0301 0.320312C74.658 0.40755 75.2802 0.58884 75.8729 0.874023L96.4608 10.7803C98.6242 11.8213 99.9998 14.0111 99.9999 16.4131V83.5869C99.9999 85.9889 98.6242 88.1787 96.4608 89.2197L75.8729 99.126C74.2833 99.8909 72.4869 99.9309 70.912 99.3174C70.1248 99.0107 69.3928 98.5407 68.7694 97.917L29.3553 61.959L12.1874 74.9902C11.4303 75.5649 10.5301 75.8447 9.63463 75.8369C8.62069 75.8414 7.6084 75.4776 6.81236 74.7539L1.3026 69.7451C-0.513738 68.0936 -0.515465 65.237 1.29869 63.583L16.2206 49.9766L1.35826 36.417C-0.454776 34.7627 -0.452396 31.9063 1.36314 30.2549L6.869 25.2461C8.3533 23.8959 10.5892 23.7967 12.1874 25.0098L29.3309 38.0225L68.7499 2.08301C69.896 0.936899 71.4094 0.312029 72.9579 0.262695C72.9758 0.262071 72.9937 0.260236 73.0116 0.259766H73.2909ZM45.1092 50L75.0155 72.7012V27.2988L45.1092 50Z" fill="currentColor"/></g></svg>',
          text: "VSCode Extensions",
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

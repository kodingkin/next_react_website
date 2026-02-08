export default function Home() {
  const intro = `
      This page is going to walk you through on how to use Next.JS to create a website effortlessly. \n
      We will be using Next.js for our server, React for our fronend framework, tailwind css for styling, and docker to deploy.\n
      The reason for us to use nexy.js is because of how elegent it is to create a website which is production ready and easy to maintain.
    `

  return (
    <main className="flex flex-col my-2.5">
      <div className="w-full text-center">Introduction</div>
      <div className="px-1 whitespace-break-spaces">{intro}</div>
    </main>
  );
}

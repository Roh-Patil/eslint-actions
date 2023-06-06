export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj5m Quickstart Blog Tutorial jjdjdjjdjjjjjjj

          
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
            {console.log('jjjjjjjj')};
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

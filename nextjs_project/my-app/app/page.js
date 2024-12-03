import LikeButton from "./like-button";

function createTitle(title) {
  if (title) {
    return title;
  } else {
    return "Default title";
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamiltion"];

  return (
    <div>
      <Header title="Develop. Preview. Ship" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}

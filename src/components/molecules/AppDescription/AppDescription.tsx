import { AppLink } from "./AppDescription.style";

export function AppDescription() {
  return (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </>
  );
}

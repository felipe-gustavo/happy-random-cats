import { AppContainer, AppHeader } from "./App.style";
import { AppDescription } from "./components/molecules/AppDescription";
import { AppLogo } from "./components/molecules/AppLogo";

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppLogo />
        <AppDescription />
      </AppHeader>
    </AppContainer>
  );
}

export default App;

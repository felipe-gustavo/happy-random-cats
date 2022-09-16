import { SimpleSnackAlert } from "./components/organisms/SimpleSnackAlert";
import { Routes } from "./config/Routes";
import { Providers } from "./contexts/Providers";

function App() {
  return (
    <Providers>
      <SimpleSnackAlert />
      <Routes />
    </Providers>
  );
}

export default App;

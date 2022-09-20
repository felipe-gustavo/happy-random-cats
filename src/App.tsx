import { SimpleSnackAlert } from "./components/organisms/SimpleSnackAlert";
import { Providers } from "./config/Providers";
import { Routes } from "./config/Routes";

import "./config/i18n";

function App() {
  return (
    <Providers>
      <SimpleSnackAlert />
      <Routes />
    </Providers>
  );
}

export default App;

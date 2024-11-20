import "./App.css";
import { AppColorTokenProvider } from "./components/AppColorTokenProvider/AppColorTokenProvider";
// import AppLayout from "./components/AppLayout/AppLayout";
import AppRouter from "./routes/routes";

function App() {
  return (
      <AppColorTokenProvider>
        {/* <AppLayout> */}
        <AppRouter />
        {/* </AppLayout> */}
      </AppColorTokenProvider>
  );
}

export default App;

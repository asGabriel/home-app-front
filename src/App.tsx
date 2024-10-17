import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import AppRouter from "./routes/routes";

function App() {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}

export default App;

import { Outlet } from "react-router";

function App() {
  return <div data-testid="app-root">{<Outlet />}</div>;
}

export default App;

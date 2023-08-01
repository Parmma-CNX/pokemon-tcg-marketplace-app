import "./App.css";
import Home from "./components/HomeComponenet/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Store from "./store/Store";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
          <Home></Home>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;

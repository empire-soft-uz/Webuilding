import "./App.css";
import { ModalsProvider } from "./components/Modals";
import Router from "./routes/routes";

function App() {
    return (
        <ModalsProvider>
            <Router />
        </ModalsProvider>
    );
}

export default App;

import "./App.css";
import Button from "./components/Button";

function App() {
    return (
        <div>
            <Button
                handleClick={(event, id) => {
                    console.log("Button clicked", event, id);
                }}
            />
        </div>
    );
}

export default App;

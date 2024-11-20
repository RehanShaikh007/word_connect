import { useState } from "react";
import Header from "./components/Header";
import WordGrid from "./components/WordGrid";
import ConfigPanel from "./components/ConfigPanel";

const App = () => {
  const [config, setConfig] = useState({ groupSize: 2, itemCount: 8, columns: 4 });
  const [attempts, setAttempts] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setAttempts(0);
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header attempts={attempts} onReset={handleReset} />
      <div className="flex flex-col md:flex-row gap-6">
        <ConfigPanel config={config} setConfig={setConfig} onReset={handleReset} />
        <WordGrid key={resetKey} config={config} setAttempts={setAttempts} />
      </div>
    </div>
  );
};

export default App;

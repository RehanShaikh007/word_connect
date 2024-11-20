import { useState, useEffect } from "react";

const WORD_GROUPS = [
  ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Mango", "Orange"],
  ["Dog", "Cat", "Horse", "Rabbit", "Fox", "Wolf", "Bear", "Lion"],
  ["Car", "Bike", "Bus", "Train", "Plane", "Ship", "Truck", "Scooter"],
];

const WordGrid = ({ config, setAttempts }) => {
  const [words, setWords] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  // Initialize words based on the config
  useEffect(() => {
    const generateWords = () => {
      const group = WORD_GROUPS[Math.floor(Math.random() * WORD_GROUPS.length)];

      // Calculate the number of unique words needed
      const pairCount = config.itemCount / 2;

      // Select the required number of unique words
      const selectedWords = group.slice(0, pairCount);

      // Create the word set with pairs and shuffle them
      const items = [...selectedWords, ...selectedWords].sort(() => Math.random() - 0.5);

      return items;
    };

    setWords(generateWords());
    setMatched([]);
    setSelected([]);
  }, [config]);

  const handleSelect = (index) => {
    // Ignore clicks if:
    // - Two cards are already selected
    // - The clicked card is already matched
    if (selected.length === 2 || matched.includes(index)) return;
  
    const newSelected = [...selected, index];
    setSelected(newSelected);
  
    // Check if two cards are selected
    if (newSelected.length === 2) {
      setTimeout(() => {
        const [first, second] = newSelected;
        setAttempts((prev) => {
          const updatedAttempts = prev + 1;
  
          if (words[first] === words[second]) {
            // Update matched list for correct pairs
            setMatched((prevMatched) => [...prevMatched, first, second]);
  
            // Check for game completion
            if ([...matched, first, second].length === words.length) {
              setTimeout(() => {
                alert(`Congratulations! You completed the game in ${updatedAttempts} attempts.`);
              }, 500);
            }
          }
  
          // Clear selected cards regardless of match
          setSelected([]);
          return updatedAttempts;
        });
      }, 1000);
    }
  };
  

  return (
    <div
      className={`grid gap-4 w-full`}
      style={{ gridTemplateColumns: `repeat(${config.columns}, minmax(0, 1fr))` }}
    >
      {words.map((word, index) => (
        <div
          key={index}
          onClick={() => handleSelect(index)}
          className={`p-4 border rounded text-center cursor-pointer text-sm md:text-base lg:text-lg
            ${
              matched.includes(index)
                ? "bg-green-300"
                : selected.includes(index)
                ? "bg-red-300"
                : "bg-white"
            }`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default WordGrid;

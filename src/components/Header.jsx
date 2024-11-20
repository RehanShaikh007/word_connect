const Header = ({ attempts, onReset }) => (
    <header className="text-center mb-6">
      <h1 className="text-2xl font-bold mb-4">Word Connect Game</h1>
      <p className="text-lg">Attempts: {attempts}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow"
        onClick={onReset}
      >
        Reset Game
      </button>
    </header>
  );
  
  export default Header;
  
const ConfigPanel = ({ config, setConfig, onReset }) => {
    const MAX_GROUP_SIZE = 4;
    const MAX_ITEM_COUNT = 12;
    const MAX_COLUMNS = 4;
  
    const handleChange = (e) => {
      let { name, value } = e.target;
      value = parseInt(value);
  
      // Enforce maximum limits
      if (name === "groupSize" && value > MAX_GROUP_SIZE) value = MAX_GROUP_SIZE;
      if (name === "itemCount" && value > MAX_ITEM_COUNT) value = MAX_ITEM_COUNT;
      if (name === "columns" && value > MAX_COLUMNS) value = MAX_COLUMNS;
  
      setConfig({ ...config, [name]: value });
    };
  
    return (
      <div className="bg-white p-4 rounded shadow w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-lg font-bold">Settings</h2>
        <div className="flex flex-col gap-4">
          <label>
            Group Size (Max {MAX_GROUP_SIZE}):
            <select
              name="groupSize"
              value={config.groupSize}
              onChange={handleChange}
              className="ml-2 p-1 border rounded w-full"
            >
              {Array.from({ length: MAX_GROUP_SIZE }, (_, i) => i + 2).map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <label>
            Item Count (Max {MAX_ITEM_COUNT}):
            <input
              type="number"
              name="itemCount"
              value={config.itemCount}
              onChange={handleChange}
              className="ml-2 p-1 border rounded w-full"
              max={MAX_ITEM_COUNT}
            />
          </label>
          <label>
            Columns (Max {MAX_COLUMNS}):
            <input
              type="number"
              name="columns"
              value={config.columns}
              onChange={handleChange}
              className="ml-2 p-1 border rounded w-full"
              max={MAX_COLUMNS}
            />
          </label>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow"
          onClick={onReset}
        >
          Apply & Reset
        </button>
      </div>
    );
  };
  
  export default ConfigPanel;
  
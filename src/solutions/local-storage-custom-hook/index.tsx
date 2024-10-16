import { useLocalStorage } from "./hooks/useLocalStorage";

const LocalStorageCustomHook = () => {
  const [storedValue, setStoredValue] = useLocalStorage("theme", "light");

  return (
    <div>
      <p>LocalStorageCustomHook {storedValue}</p>
      <select value={storedValue} onChange={onChange}>
        <option value={"light"}>Light</option>
        <option value={"dark"}>Dark</option>
      </select>
    </div>
  );

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setStoredValue(event.target.value);
  }
};

export default LocalStorageCustomHook;

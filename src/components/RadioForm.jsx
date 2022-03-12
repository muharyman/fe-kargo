export default function RadioForm({ label, values, setUser }) {
  return (
    <div className="flex space-x-8 items-start w-full">
      <label className="font-sans text-base font-semibold">{label}</label>
      <ul className="flex flex-col items-center space-y-4">
        {values.map((item, i) => (
          <li
            key={i}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            className="flex items-center w-full space-x-3"
          >
            <input type="radio" id={item} name={"login"} value={item} />
            <label className="px-2 text-sm capitalize" htmlFor={item}>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

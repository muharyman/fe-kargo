export default function SelectForm(props) {
  return (
    <div className="flex space-x-3 items-center ">
      <label className="w-1/6 font-sans text-sm text-black font-semibold">
        {props.label}{" "}
      </label>
      <div className="w-4/6 mt-2 box">
        <select
          className="w-full p-2 outline-none capitalize font-sans text-gray-500 text-xs"
          name={props.name}
          id={props.name}
          onChange={props.onChange}
          value={props.value}
        >
          {props.values.map((item, i) => (
            <option key={i} className="capitalize px-2" value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <style jsx>
        {`
          .box {
            background: #ffffff;
            border: 1px solid #eeeeee;
            box-sizing: border-box;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
}

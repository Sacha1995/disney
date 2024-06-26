const FormElements = ({
  callback,
  type,
  id,
  options,
  placeholder,
  searchTermRef,
  name,
  label,
  value,
  onInput,
}) => {
  switch (type) {
    case "text" || "number":
      return (
        <input
          type={type}
          onInput={callback}
          id={id}
          placeholder={placeholder}
          ref={searchTermRef}
          value={value}
        />
      );

    case "select":
      return (
        <>
          <label htmlFor={id}>{label} </label>
          <select id={id} name={name} onChange={callback}>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </>
      );
    default:
      console.log("something went wrong with creating a form element");
      break;
  }
};

export default FormElements;

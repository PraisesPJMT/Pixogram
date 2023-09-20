import { useState } from "react";
import { BiCheck, BiHealth } from "react-icons/bi";
import "./InputField.scss";

const defaultAction = () => {};

const InputField = ({
  name = "",
  value,
  placeholder = "",
  handleChange,
  label = null,
  error = "Error",
  type = "text",
  required = false,
  validateField = defaultAction,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="field">
      <label
        className={`${focus ? "active" : ""} ${
          focus || value.length > 0 ? "indicate" : ""
        } ${error.length > 0 ? "error" : ""}`}
      >
        <span
          className={`${!focus && value.length > 0 ? "blue" : ""} ${
            !focus && error.length > 0 ? "red" : ""
          }`}
        >
          {label}
          {required && (
            <>
              {validateField(value) ? (
                <BiCheck className="check w-6 h-6 text-green font-black" />
              ) : (
                <BiHealth className="ex w-3 h-3 text-red" />
              )}
            </>
          )}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </label>
      {error.length > 0 && <p className="error">{error}</p>}
    </div>
  );
};

export default InputField;

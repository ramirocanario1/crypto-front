import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import useEditAttribute from "./useEditAttribute";
import FieldError from "../utils/FieldError";
import FieldSuccess from "../utils/FieldSuccess";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function EditableField({ value, setter, type = "text", label, name, id}) {

  const [formRef] = useAutoAnimate()

  const [isEditing, setIsEditing] = useState(false);
  const {isLoading, isError, editAttribute, successMessage, errorMessage, isSuccess} = useEditAttribute();

  const handleEdit = () => {
    setIsEditing(true);

    if (type === "password") {
      setter("");
    }
  };

  useEffect(() => {
    console.log(isSuccess)
  }, [isSuccess])
  

  const handleSave = async () => {
    const success = await editAttribute(id, name, value);
    if (success) {
      setIsEditing(false);
    }
  };

  return (
    <fieldset className="flex flex-col" ref={formRef}>
      <label>{label}</label>
      <div className="flex gap-2">
        <input
          type={type}
          value={value}
          onChange={(e) => setter(e.target.value)}
          className="rounded shadow-md py-2 px-2 text-black outline-none w-full"
          disabled={!isEditing}
        />
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 grid place-content-center w-10 rounded"
          >
            <FaSave />
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-green-500 grid place-content-center w-10 rounded"
          >
            <FaPencilAlt />
          </button>
        )}
      </div>
      {/* //TODO: cambiar loading por un spinner o algo mejor */}
      {isLoading && <div>Loading...</div>} 
      {isError && <FieldError>{errorMessage}</FieldError>}
      {isSuccess && <FieldSuccess>{successMessage}</FieldSuccess>}

    </fieldset>
  );
}

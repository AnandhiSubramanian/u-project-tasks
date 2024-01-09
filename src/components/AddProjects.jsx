import { useRef } from "react";
import InputField from "./InputField";
import Modal from "./Modal";

export default function AddProjects({ onAdd, onCancel }) {
  const modalRef = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const titleVal = title.current.value;
    const descVal = description.current.value;
    const dueDateVal = dueDate.current.value;

    if (
      titleVal.trim() === "" ||
      descVal.trim() === "" ||
      dueDateVal.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    const projectDetails = {
      title: titleVal,
      description: descVal,
      date: dueDateVal,
    };

    onAdd(projectDetails);
  }

  return (
    <div className="w-2/4">
      <Modal ref={modalRef} buttonLabel="Ok">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Ooops. You forgot to add a value</p>
      </Modal>
      <menu className="mt-10 flex items-center justify-end gap-4 mt-10">
        <button
          className="text-stone-800 hover:text-stone-950 px-1 py-1 rounded-lg mx-1"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-20 px-3 py-1 rounded-lg mx-3"
        >
          Save
        </button>
      </menu>
      <ul className="mx-10">
        <InputField type="text" ref={title} label="Title"></InputField>
        <InputField ref={description} label="Description" textarea></InputField>
        <InputField type="date" ref={dueDate} label="Due Date"></InputField>
      </ul>
    </div>
  );
}

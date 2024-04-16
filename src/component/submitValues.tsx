import React from "react";
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md";
import './Description';
import './Title';
import '../App'



interface SubmitValuesProps {
    
  submittedValues: {
    isDone: boolean; title: string; description: string ;id: string;}[];
    onDelete: (index: number) => void;
    setSubmittedValues: React.Dispatch<React.SetStateAction<{ title: string; description: string; isDone: boolean;id: string; }[]>>; 
    onDone: (index: number, title: string, description: string) => void;
    
}


const SubmitValues: React.FC<SubmitValuesProps> = ({ submittedValues,onDelete,setSubmittedValues,onDone }) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData("text/plain", index.toString());
      };

      const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
      };

      const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        const draggedIndex = Number(e.dataTransfer.getData("text/plain"));
        const newSubmittedValues = [...submittedValues];
        const draggedItem = newSubmittedValues[draggedIndex];
        newSubmittedValues.splice(draggedIndex, 1);
        newSubmittedValues.splice(index, 0, draggedItem);
        setSubmittedValues(newSubmittedValues);
      };

    const handleEdit = (index: number,title: string, description: string) => {
        onDone(index, title, description);
        
      };
    
     
    
      const handleDone = (index: number) => {
        const updatedValues = [...submittedValues];
        updatedValues[index].isDone = !updatedValues[index].isDone;
        setSubmittedValues(updatedValues);
      };
      
      

   

  return (
    <div className="submittedValues">
      <h2 className="myToDo"> My ToDo List </h2>
      {submittedValues.map((value, index) => (
        <div
          key={value.id}
          className={`submitted-task ${value.isDone ? 'done' : ''}`}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
        >
          <p>Title: {value.title}</p>
          <p>Description: {value.description}</p>
          <div className="icon-container">
          <span className="icon" onClick={() => handleEdit(index,value.title, value.description)}>
            <AiFillEdit />
          </span>
          <span className="icon" onClick={() => onDelete(index)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={() => handleDone(index)}>
            <MdDone />
          </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubmitValues;
    
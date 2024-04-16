import React, { useState } from 'react';
import './App.css';
import {TitleInput} from './component/Title';
import { DescriptionInput } from './component/Description';
import SubmitValues from './component/submitValues';
import { v4 as uuidv4 } from 'uuid'; 


const App:React.FC=()=> {
  const[title,setTitle]=useState<string>("");
  const[description,setDescription]=useState<string>("")
  const [submittedValues, setSubmittedValues] = useState<{ title: string, description: string, isDone: boolean, id: string;}[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (editingIndex !== null) {
    const updatedValues = [...submittedValues];
    updatedValues[editingIndex] = { title, description, isDone: false,id:uuidv4()};
    setSubmittedValues(updatedValues);
    setEditingIndex(null);
  } else {
    setSubmittedValues([...submittedValues, { title, description, isDone: false ,id:uuidv4()}]);
  }
  setTitle("");
  setDescription("");
};

  const handleDelete = (index: number) => {
    const updatedValues = [...submittedValues];
    updatedValues.splice(index, 1);
    setSubmittedValues(updatedValues);
  };
  const handleEdit = (index: number, title: string, description: string) => {
    setEditingIndex(index);
    setTitle(title);
    setDescription(description);
  };

  return (
    <div className="App">
      <div className='header'>
        Doo Doo Ditty
      </div>
      <div className='container'>
        
        <div className='task-container'>
          <div className='inputTodos'>
            <span className='sub-head'>Get organized and set your to-dos here!</span>
            <div className='title'>
              <TitleInput title={title} setTitle={setTitle}/> 
            </div>
          <div className='discription'>
            <DescriptionInput description={description} setDescription={setDescription}/>
          </div>
          <button className='submit' type='submit'onClick={handleSubmit}>Go</button>
        </div>
      </div>
      <SubmitValues  submittedValues={submittedValues} onDelete={handleDelete} setSubmittedValues={setSubmittedValues} onDone={handleEdit}/> 
      </div>
    </div>

        );
}

export default App;
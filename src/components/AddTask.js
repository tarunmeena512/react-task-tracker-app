import React from "react";
import {useState} from "react";

const AddTaskComponent = ({onAdd}) => {
    const[text,setText] = useState('');
    const[day,setDay] = useState('');
    const[reminder,setReminder] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault();
        if( !text || !day ){
          alert('Fields Requird.');
          return;
        }
        onAdd({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false);
        let x = document.getElementById("reminder");
        x.checked = false; 
    }
    return (
        <form className="form-horizontal" onSubmit={onSubmit}>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="Enter Task Name"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input type="text" className="form-control"  placeholder="Enter Day & Time"
             value={day}
             onChange={(e)=> setDay(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <div className="checkbox">
        <label><input type="checkbox"  id="reminder"
         value={reminder}
         onChange={(e)=> setReminder(e.currentTarget.checked)}
        /> Set Reminder</label>
      </div>
    </div>
    </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Save Task</button>
          </div>
        </div>
      </form>
      );
}
 
export default AddTaskComponent;

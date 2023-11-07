import React, { useState } from "react";
import { useEffect } from "react";
import Alert1 from "./Alert";
import  "../styles/Table.css";


function EventTable(props) {
  // Creating style object
  

  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState([{}]);

     useEffect(() => {
     const id = 1;//props.saveduser[0].id;    
     fetch(`http://localhost:8080/events/${id}`)
       .then((res) => res.json())
       .then((data) => {
        console.log("see the data",data.message[0]);

        setRows([data.message[0]]);
       })
       .catch((err) => {
         <Alert1
           message={"Error Occured, while fetching Events"}
           Type={"error"}
         />;
       });
   }, []);
  
  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(true);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For closing the alert snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        event_name: "",
        date: "1900-01-01",
        description: "",
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e, index) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    console.log("I got here now");
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };
  
  
  return (
    <div>
    <table className="table">
    
    <tr>
      <th  className="table-header">ID</th>
      <th >Event Name</th>
      <th >Date</th>
      <th >Description</th>
      <th>EDIT</th>
    </tr>
  
  
   {

      rows.map((row, i) => {
       
        return (
          <tr>
            {isEdit ? (
              <>
                <td>{row.id}</td>
                <td padding="none">
                  <input
                    value={row.event_name}
                    name="firstname"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </td>
                <td padding="none">
                  <input
                    value={row.date}
                    name="date"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </td>
                <td padding="none">
                  <input
                    name="description"
                    value={row.description}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </td>
                <td align="center">
                  {isEdit ? (
                    <button  onClick={handleConfirm}>UPDATE</button>
                  ) : (
                    <button onClick={handleConfirm}>EDIT</button>
                  )}
                </td>
              </>
            ) : (
              <>
                <td>{row.id}</td>
                <td>{row.event_name}</td>
                <td>{row.date}</td>
                <td align="center">{row.description}</td>
                <td align="center">
                  {isEdit ? (
                    <button onClick={handleConfirm}>UPDATE</button>
                  ) : (
                    <button onClick={handleConfirm}>EDIT</button>
                  )}
                </td>
              </>
            )}
          </tr>
        );  

      })
    }
  
</table>
  </div>)
}
export default EventTable;

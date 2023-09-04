// import TableData from "./TableData";

import axios from "axios";
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import TableContainer from '@mui/material/TableContainer';
import {
  
  Box,
  
  
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TableRow,
  
  Paper
} from '@mui/material';
import { Scrollbar } from '../components/scrollbar';

function DynamicTable({ TableData ,url}) {
  //dynamic object to store edit variable values
  var [obj, setobj] = useState(TableData);

  const initial = TableData;


  const handleCancel = () => {
    setobj(initial);
    setedit(null);
    console.log("cancel", initial);
 }
 
  //sets edit instance
  const [edit, setedit] = useState(null);

  // get table column names
  const temp = Object.keys(TableData[0]);
  temp.shift();
  temp.pop();
  const column = ['INDEX', ...temp];

  // get table heading data
  const ThData = () => {

    return column.map((data) => {
      return <TableCell key={data}>{data.toUpperCase()}</TableCell>
    }
    )
  }

  //handle delete function
  const deleteUser = (_id) => {
    console.log(_id)
    axios
    .delete(
  url + _id)
    .then((res) => {
      if (res.status === 200) {
      alert("User successfully deleted");
      window.location.reload();
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
  };

  //handle on change field values
  const handleFormChange = (event,index) => {
    obj[index][event.target.name] = event.target.value;
    setobj({...obj})
    console.log("changed",obj)
 }

  //sends post api to url in order to update
  const updateUser = (_id,data) => {
    console.log("updated",data)
    console.log("updated",_id)
    setedit(false);
    axios
	.put(
		url +
		_id,
		data
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
    window.location.reload();
		
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
  };

  // get table row datas
  const tdData = () => {
    return TableData.map((data,index) => {
      return (
        <TableRow hover>
          <TableCell key="INDEX"> {index}</TableCell>
          {
            temp.map((v) => {
              return <TableCell>
                {edit === index ? (
              <TextField
              name={v}
              
              placeholder={data[v]}
              value={obj[index][v]}
              onChange={event => handleFormChange( event,index)}
              multiline
              variant="standard"
            />   
            ) : (
              data[v]
            )}
                </TableCell>
            
          
          
          })
          }
          {
            edit !== index?<TableCell>
               <IconButton  size="small" onClick={() => setedit(index)} >
                    <EditIcon  sx={{ "&:hover": { color: "green" } }} fontSize="small"/>
                  </IconButton>
                  &nbsp;
                  
                  <IconButton aria-label="delete" size="small" onClick={() => deleteUser(data._id)}>
                    <DeleteIcon sx={{ "&:hover": { color: "red" } }} fontSize="small"/>
                  </IconButton>
            
          </TableCell>:<><TableCell>
          <IconButton  size="small"  onClick={() => handleCancel()}>
                    <CancelIcon sx={{ "&:hover": { color: "red" } }} fontSize="small"/>
                  </IconButton>
                  &nbsp;
                  <IconButton  size="small"  onClick={() => updateUser(data._id, obj[index])}>
                    <CheckIcon sx={{ "&:hover": { color: "green" } }} fontSize="small"/>
                  </IconButton>
                
              </TableCell>
              <TableCell>
                 
                </TableCell></>
          }
          
          
        </TableRow>
      )
    })
  }

  

  return (
    <><Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>

        <Box sx={{ minWidth: 800 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow    >
                {ThData()}
                <TableCell>Acitons</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {tdData()}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Paper><br></br></>
      

  )
}
export default DynamicTable;
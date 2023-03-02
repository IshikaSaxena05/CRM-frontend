import { Button, CardMedia, Checkbox, Fade, FormLabel, Modal, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { Box, display } from '@mui/system';
import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import { connect } from 'react-redux';
import { useLocation } from 'react-router'
import { employeesDetails, Addtask, taskList, deleteTask, EditTask } from '../../redux/action/Employees';
import { EnhancedTableHead } from '../Custom/Table/TableHeader';
const schema = yup.object().shape({
  task: yup.string().required("Please enter Task"),
  estimateTime: yup.string().required("Please enter Due Date"),
});
const EmployeeDetail = ({ employeesDetails, Addtask, taskList, deleteTask, EditTask }) => {
  const [data, setData] = useState({
    task: "",
    estimateTime: ""
  })
  const [employee_data, setEmployee_data] = useState({})
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = useState(false)
  const [pages, setPages] = useState(0);
  const [page, setPage] = React.useState(1);
  const [update_id, setUpdate_id] = React.useState('');
  const [empty, setEmpty] = React.useState(false);
  const location = useLocation();
  let length = 7;
  let pagination_data = {
    page: page,
    limit: length,
  };
  console.log(location);
  useEffect(() => {
    EmployeeDetail()
    tasksList()
  }, [])
  const EmployeeDetail = () => {
    let data = { id: location.state }
    employeesDetails(data).then((res) => {
     
      if (res.data.status) {
        console.log(res);
        setEmployee_data(res.data.user)
        
      } else {
        console.log(res);
      }
    })
  }
  const tasksList = () => {
    Object.assign(pagination_data,{user_id:location.state})
    taskList(pagination_data).then((res) => {
      if (res.data.totalRecords === 0) {
        setEmpty(true)
      }
      if (res.data.status) {
        console.log(res.data);
        setRows(res.data.TasksList)
      }
    })
  }
  const formik = useFormik({
    initialValues: data,
    validationSchema: schema,
    onSubmit: (value) => {
      handleSubmit(value);
    },
    enableReinitialize: true,
  });
  const handleSubmit = (value) => {
    Object.assign(value, { status: "pending", assigned_by: localStorage.getItem("user"), user_id: location.state })
    if(update_id){
      Object.assign(value,{task_id:update_id})
    }
    console.log(value);
    delete value.firstName
    delete value.lastName
    delete value.email
    delete value.dob
    delete value.designation
    delete value.experience
    delete value.password
    delete value.gender
    delete value.role

    Addtask(value).then((res) => {
      if (res.data.status) {
        setOpen(false)
        setData({})
        tasksList()
      }
    })
  }
  const handleDelete = (id) => {
    let delete_data = { id: id, user_id: location.state }
    deleteTask(delete_data).then((res) => {
      if (res.data.status) {
        tasksList()
      }
    })
  }
  const handleEdit = (id) => {
    let edit_data = { id: id, user_id: location.state }
    setUpdate_id(id)
    setOpen(true)
    EditTask(edit_data).then((res) => {
      if (res.data.status) {
        setData({
          task:res.data.task.task,
          estimateTime:res.data.task.estimateTime
        })
        tasksList()
      }
    })
  }
  return (
    <Box>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              onSubmit={formik.handleSubmit}
            >
              <FormLabel >
                Task
                <span style={{
                  color: 'red'
                }}>*</span>
              </FormLabel>

              <TextField
                name="task"
                value={formik.values.task}
                onChange={formik.handleChange}
                type="text"
                variant="filled"
                InputProps={{ disableUnderline: true, pt: "10px" }}
                inputProps={{
                  style: {
                    paddingTop: "16px",
                    paddingBottom: "15px",
                  },
                }}
                color="primary"
                placeholder="Enter Task here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
                autoComplete="false"
              />
              {formik.errors.task && formik.touched.task ? (
                <p style={{ color: 'red' }}>
                  {formik.errors.task}
                </p>
              ) : null}
              <FormLabel >
                Estimate Time
                <span style={{
                  color: 'red'
                }}>*</span>
              </FormLabel>

              <TextField
                name="estimateTime"
                value={formik.values.estimateTime}
                onChange={formik.handleChange}
                type="number"
                variant="filled"
                InputProps={{ disableUnderline: true, pt: "10px" }}
                inputProps={{
                  style: {
                    paddingTop: "16px",
                    paddingBottom: "15px",
                  },
                }}
                color="primary"
                placeholder="Enter Estimate Time here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
                autoComplete="false"
              />
              {formik.errors.estimateTime && formik.touched.estimateTime ? (
                <p style={{ color: 'red' }}>
                  {formik.errors.estimateTime}
                </p>
              ) : null}
              <Box sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',

              }}>
                <Button sx={{
                  bgcolor: 'red',
                  color: 'white',
                  mt: 3,
                  mr: 2,
                  textTransform: 'none'
                }}
                  onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button sx={{
                  bgcolor: 'green',
                  color: 'white',
                  mt: 3,
                  textTransform: 'none'
                }}
                  type="submit"
                >
                  Add
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Box sx={{
        display: 'flex',
        width: '100%'
      }}>
        <Box sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }} >
          <Box sx={{
            display: "flex",
          }}>
            <Typography>Name :</Typography>
            <Typography>{employee_data.firstName + " " + employee_data.lastName}</Typography>
          </Box>
          <Box sx={{
            display: "flex",
          }}>
            <Typography>Email :</Typography>
            <Typography>{employee_data.email}</Typography>
          </Box>
          <Box sx={{
            display: "flex",
          }}>
            <Typography>Gender :</Typography>
            <Typography>{employee_data.gender}</Typography>
          </Box>
          <Box sx={{
            display: "flex",
          }}>
            <Typography>Designation :</Typography>
            <Typography>{employee_data.designation}</Typography>
          </Box>
        </Box>
        <Box sx={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box sx={{
            width: '50%',
            border: '1px solid gray',
            height: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center"
          }}>
            <CardMedia
              sx={{ height: "90%", width: '90%' }}
              image={require('../../assets/maleEmployee.jpg')}
              title="green iguana"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{
        width: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}>
          <Button
            onClick={() => setOpen(true)}
            sx={{
              mt: 3,
              border: '1px solid green'
            }}
          >
            Add Task
          </Button>
        </Box>
        {empty &&
          <Box>
            <Typography sx={{
              display: "flex",
              justifyContent: "center",
              pt: 20,
              pb: 20,
              fontSize: "35px",
              color: "#A8A8A8",
              fontWeight: "700",
            }}>
              No Tasks
            </Typography>
          </Box>
        }
        {!empty &&
          <Box
            sx={{
              overflow: "auto"
            }}
          >

            <Table
              sx={{
                width: { lg: "100%", xs: "1000px" },
              }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                totalColumn={[
                  "Tasks",
                  "Status",
                  "Estimate Time",
                  "Assigned By",
                  "Action"
                ]}
                //   order={order}
                // orderBy={orderBy}
                // onRequestSort={handleRequestSort}
                rowCount={rows.length}
                checkbox={true}

              />
              <TableBody>
                {rows.map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                      sx={{ bgcolor: index % 2 === 0 ? "#FFFFFF" : "#FFFAF3" }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{ width: "200px", pl: 2.5 }}
                      >

                        {row.task}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{ width: "200px", pl: 2.5 }}
                      >

                        {row.status}
                      </TableCell>
                      <TableCell>
                        {row.estimateTime + " hours"}
                      </TableCell>
                      <TableCell>
                        {row.assigned_by}
                      </TableCell>
                      <TableCell >
                        <img
                          alt="logo"
                          src={require("../../assets/edit.png")}
                          style={{
                            width: "18px",
                            height: "18px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleEdit(row._id);
                          }}
                        />
                        <img
                          alt="logo"
                          src={require("../../assets/delete.jpg")}
                          style={{
                            width: "18px",
                            height: "18px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleDelete(row._id);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        }
      </Box>
    </Box>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    employeesDetails: (item) => dispatch(employeesDetails(item)),
    taskList: (item) => dispatch(taskList(item)),
    Addtask: (item) => dispatch(Addtask(item)),
    deleteTask: (item) => dispatch(deleteTask(item)),
    EditTask: (item) => dispatch(EditTask(item))
  };
}
export default connect(null, mapDispatchToProps)(EmployeeDetail);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

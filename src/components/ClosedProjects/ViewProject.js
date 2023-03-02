import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { reopenProject,viewProject,getMilestone } from "../../redux/action/closedProject/index"
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function createData(Project_Name, Technology, Delivery, Type) {
  return { Project_Name, Technology, Delivery, Type };
}

 function ClosedProjectListing({reopenProject,viewProject,getMilestone}) {
  const [pages, setPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [start, setStart] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [proj_data, setProj_data] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [empty , setEmpty] = React.useState(false)
  const location = useLocation()
  let length = 2;
  let data = {
      page: page,
      limit: length,
      sort: "",
      search: ""
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    handleview();
}, []);

const handleReopen = (id) =>{
  let data = {
   project_id:id,
   status:"ongoing"
  }
  reopenProject(data).then((res)=>{
    if(res.data.status){
        handleview()
    }
  })
}

const handleview = () =>{
  let data = {
   project_id:location.state,
  }
  viewProject(data).then((res)=>{
    if(res.data.status){
        setProj_data(res.data.project)
    }
    
  })
  getMilestone(data).then((res)=>{
    if(res.data.status){
        setRows(res.data.Milestone)
    }
    
  })
}
  return (
    <>
     <Box sx={{
        display:'flex',
        width:'100%'
     }}>
        <Typography>name:</Typography>
        <Typography>{proj_data.name}</Typography>
     </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#1f6abf" }}>
              <TableCell sx={{ color: "white" }}>Project Name</TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Technology
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Delivery Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Type
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Action
              </TableCell>
               {/* <TableCell align="right">Protein&nbsp;(g)</TableCell>  */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 }, height: "120px" }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.technology}</TableCell>

                <TableCell align="center">{row.delivery_date}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">
                    <Button
                    onClick={()=>handleReopen(row._id)}>
                        Reopen
                    </Button>
                    <Button
                    onClick={()=>handleview(row._id)}>
                        View
                    </Button>
                    </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer> 
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    viewProject: (data) => dispatch(viewProject(data)),
    reopenProject: (data) => dispatch(reopenProject(data)),
    getMilestone: (data) => dispatch(getMilestone(data)),

  };
};

export default connect(null, mapDispatchToProps)(ClosedProjectListing);
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { ProjectList,closeProject } from "../../redux/action/ongoingProjects/index"
import { connect } from "react-redux";

function createData(Project_Name, Technology, Delivery, Type) {
  return { Project_Name, Technology, Delivery, Type };
}

const rows = [
  createData("Ball & Dogget", "PHP", "Jan 2023", "App & Web"),
  createData("School lunch", "PHP", "Dec 2022", "Web"),
  createData("Vformity", "Laravel & Flutter", "July 2022", "App & Web"),
  createData("Gopher", "React & Laravel", "Feb 2023", "Web"),
  createData("Lifestyle clinic", "Laravel", "Dec 2023", "Web"),
];

 function OngoingProjectList({ProjectList,closeProject}) {
  const [pages, setPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [start, setStart] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [empty , setEmpty] = React.useState(false)
  let length = 2;
  let data = {
      page: page,
      limit: length,
      sort: "",
      search: ""
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    getProjectList();
}, []);
const getProjectList = () => {
  ProjectList(data).then((res) => {
      setLoading(false);
      //   if (res?.data?.data?.total_records === 0) {
      //     setRows(res.data.data.orders_list);
      //     setPages(1);
      //     setEmpty(true);
      //     setLoading(false);
      //   }
      if (res.data.status) {
          setEmpty(false);
          setPages(res.data.pages);
          setRows(res.data.ProjectList);
          setLoading(false);
      } else {
          setLoading(false);
      }
  });
};
const handleReopen = (id) =>{
    let data = {
     project_id:id,
     status:"completed"
    }
    closeProject(data).then((res)=>{
        if(res.data.status){
            getProjectList()
          }
    })
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "600", pt: 5, pb: 5 }}>Ongoing Projects List</Typography>
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
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
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
                        Close
                    </Button>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    ProjectList: (data) => dispatch(ProjectList(data)),
    closeProject: (data) => dispatch(closeProject(data)),
  };
};

export default connect(null, mapDispatchToProps)(OngoingProjectList);
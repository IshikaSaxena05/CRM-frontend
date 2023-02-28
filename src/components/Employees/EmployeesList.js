import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from '../Sidebar';
import UserNav from '../UserNav';
import { Box, Pagination, TextField } from '@mui/material';
import female from '../../assets/femaleEmployee.png'
import male from '../../assets/maleEmployee.jpg'
import { useNavigate } from 'react-router-dom';
import cogoToast from "cogo-toast";
import { connect } from 'react-redux';
import {employeesList} from '../../redux/action/Employees/index'

const Employees=({ employeesList }) => {
  const [employee, setEmployee] = React.useState([])
  const [pages, setPages] = React.useState(0);
  const [page, setPage] = React.useState(1);
  let length = 8;
  let data = {
    page:page,
    limit: length,
    sort:"",
    search:""
  };
  const navigate = useNavigate()
  React.useEffect(() => {
    // setEmployee(employees)
    EmployeeList()
  }, [])
  const EmployeeList = () =>{
    console.log(data);
    employeesList(data).then((res) => {
      if (res.data.status) {
        setEmployee(res.data.employeeList)
        setPages(res.data.pages)
      } else {
        console.log(res);
      }
    })
  }
  const handlePageChange = (event, value) => {
    data = {
      page:value,
      limit: length,
      sort:"",
      search:""
    };
    console.log(data);
    // if (order && orderBy) {
    //   let sort_column = { sort_column: orderBy };
    //   let sort = { sort_by: order };
    //   Object.assign(data, sort_column, sort);
    // }
    // if (search_val) {
    //   let searchVal = { search_val: search_val };
    //   Object.assign(data, searchVal);
    // }
    // setSelected([]);
    EmployeeList();
  };
  return (
    <>
      {/* <main className="d-flex m-0"> */}
      <div className=" d-flex flex-column">
        <Typography sx={{
          width: "100%",
          display: 'flex',
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: 700,
        }}>
          Employees
        </Typography>
        <Box sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "flex-end" },
          // width: {xs:"100%",md:"60%",lg:"48%",xl:"42%"}, 
        }}>
          <TextField
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: "5px",
                fontSize: "16px",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #3D2E57",
                },
                width: { xs: '30vw', sm: '30vw', md: '210px', lg: '262px', xl: "262px" },
                height: "40px", mr: 2,
              }
              ,
            }}
          // onChange={handleSearch}
          // onKeyDown={handleEnter}
          />
          <Button variant="contained"
          // onClick={()=>{onSubmit(search_val)}}
          >
            Search
          </Button>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}>

          {employee.map((data) => (
            <Card sx={{ width: '23%', ml: 2, mt: 4 }} onClick={() => navigate('/employees/detail',{state:data._id})}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <CardMedia
                  sx={{ height: 120, borderRadius: '50%', border: '2px solid black', width: '45%', mt: 5 }}
                  image={require('../../assets/maleEmployee.jpg')}
                  title="green iguana"
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.firstName +" "+ data.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.designation}
                </Typography>
              </CardContent>
              
            </Card>
          ))}

        </Box>
        <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    p: { xs: 0, md: 3 },
                }}
            >
                {pages > 1 && (
                    <Pagination
                        count={pages}
                        page={page}
                        boundaryCount={1}
                        onChange={handlePageChange}
                        sx={{
                            button: { fontSize: "16px" },
                            "&.root.Mui-disabled": {
                                fontSize: "28px",
                            },
                        }}
                        siblingCount={1}
                    />
                )}
                {/* </Paper> */}
            </Box>
      </div>
      {/* </main> */}
    </>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    employeesList: (item) => dispatch(employeesList(item)),
  };
}
export default connect(null, mapDispatchToProps)(Employees);
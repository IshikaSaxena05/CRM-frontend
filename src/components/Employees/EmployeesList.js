import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from '../Sidebar';
import UserNav from '../UserNav';
import { Box, TextField } from '@mui/material';
import female from '../../assets/femaleEmployee.png'
import male from '../../assets/maleEmployee.jpg'
import { useNavigate } from 'react-router-dom';
import cogoToast from "cogo-toast";
import axios from 'axios';
// import {employeesList} from '../../redux/action/Employees/index'
const employees = [
  {
    name: "Riya",
    photo: female,
    Profession: "MERN Developer",
    gender: 'Female',
    experience: 2
  },
  {
    name: "Sam",
    photo: male,
    Profession: "PHP Developer",
    gender: 'Male',
    experience: 2
  },
  {
    name: "Pia",
    photo: female,
    Profession: "Business Developer",
    gender: 'Female',
    experience: 2
  },
  {
    name: "Hritik",
    photo: male,
    Profession: "Manger",
    gender: 'Male',
    experience: 2
  },
  {
    name: "Riya",
    photo: female,
    Profession: "MERN Developer",
    gender: 'Female',
    experience: 2
  },
  {
    name: "Sam",
    photo: male,
    Profession: "PHP Developer",
    gender: 'Male',
    experience: 2
  },
  {
    name: "Pia",
    photo: female,
    Profession: "Business Developer",
    gender: 'Female',
    experience: 2
  },
  {
    name: "Hritik",
    photo: male,
    Profession: "Manger",
    gender: 'Male',
    experience: 2
  },
]
export default function Employees({employeesList}) {
  const [employee, setEmployee] = React.useState([])
  const navigate = useNavigate()
  React.useEffect(() => {
    setEmployee(employees)
    try {
      // const response = server.post("/api/users");
      employeesList().then(()=>{

      })
    }catch (error) {
      cogoToast.error(error.response.data.message);
      console.log(error);
    } finally {
    }
  }, [])
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
        justifyContent: {xs:"space-between",md:"flex-end"},
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
              width: {xs:'30vw',sm:'30vw',md:'210px',lg:'262px',xl:"262px"},
              height: "40px",mr:2,
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
          display:'flex',
          justifyContent:'space-evenly',
            flexWrap:'wrap'
        }}>
         
          {employee.map((data) => (
            <Card sx={{ width: '23%',ml:2,mt:4 }} onClick={()=>navigate('/employees/detail')}>
              <Box sx={{
                display:'flex',
                justifyContent:'center'
              }}>
              <CardMedia
                sx={{ height: 120, borderRadius:'50%',border:'2px solid black',width:'45%',mt:5 }}
                image={data.photo}
                title="green iguana"
              />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {data.Profession}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}

        </Box>
      </div>
    {/* </main> */}
    </>
  );
}
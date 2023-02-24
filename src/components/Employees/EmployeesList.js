import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from '../Sidebar';
import UserNav from '../UserNav';
import { Box } from '@mui/material';
import female from '../../assets/femaleEmployee.png'
import male from '../../assets/maleEmployee.jpg'
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
export default function Employees() {
  const [employee, setEmployee] = React.useState([])
  React.useEffect(() => {
    setEmployee(employees)
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
          display:'flex',
          justifyContent:'space-evenly',
            flexWrap:'wrap'
        }}>
         
          {employee.map((data) => (
            <Card sx={{ width: '23%',ml:2,mt:4 }}>
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
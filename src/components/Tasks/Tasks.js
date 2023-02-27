import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { borderRadius, Box, height } from '@mui/system'
import React, { useState } from 'react'

const Tasks = () => {
  const [open,setOpen] = useState()
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-evenly',
    }}>
       <Dialog
        open={open}
        // onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
        <DialogTitle
          sx={{ fontSize: "18px", color: "#3D2E57",width:500 }}
          id="alert-dialog-title"
        >
          Update Status
        </DialogTitle>
        <DialogContent >
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue={defaultValue}
        // value={value}
        name="radio-buttons-group"
        // onChange={handleChange}
      >
        <FormControlLabel value={"To Do"} control={<Radio />} label={"To Do"} />
        <FormControlLabel value={"InProgress"} control={<Radio />} label={"In Progress"} />
        <FormControlLabel value={"Complete"} control={<Radio />} label={"Complete"} />
      </RadioGroup>
    </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#EB5757",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#EB5757",
              },
            }}
            onClick={()=>setOpen(false)}
          >
            Cancel
          </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#27AE60",
                  textTransform: "none",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#27AE60",
                  },
                }}
                // onClick={onClickButton}
              >
                Confirm
              </Button>
        </DialogActions>
      </Dialog>
      {column.map((col) => (
        <Box sx={{
          border: '1px solid gray',
          width: '30%',
          boxShadow: '2px solid gray',
          // height: '500px',
          bgcolor:'#dcdde3'
        }}>
          <Typography sx={{
            fontSize: '20px',
            p:1
          }}>{col.title}</Typography>
          <Box>
            {list.map((task)=>(
            <Box sx={{
              border: '1px solid gray',
              boxShadow: '2px solid gray',
              bgcolor:'white',
              borderRadius:'5px',
              m:1,
              p:5
            }}
            onClick={()=>setOpen(true)}>
              <Typography>{task.title}</Typography>
            </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Tasks
const column = [
  {
    title: 'To Do'
  },
  {
    title: 'In Progress'
  },
  {
    title: 'Completed'
  }
]

const list = [
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
]
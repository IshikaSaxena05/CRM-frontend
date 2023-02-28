/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as yup from "yup";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import {
  Button,
  Skeleton,
  Typography,
  TextField,
  FormLabel,
  Box,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getemployeedata,saveEmployee } from "../../redux/action/Employees";
const schema = yup.object().shape({
  first_name: yup.string().required("Please enter your first name"),
  last_name: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter valid email"),
    wedding_date:yup.string().required("Please enter your Wedding date"),
    phone: yup.string().required("Please enter your Phone Number")
  .matches(/^[0-9]*$/, "Please enter valid phone number"),
  dob: yup.string().required("Please enter your Date of birth"),
  validate_Password: yup.boolean(),
  password: yup.string().when("validate_Password", {
    is: true,
    then: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  }),
  confirm_password: yup.string().when("validate_Password", {
    is: true,
    then: yup
      .string()
      .required("Confirm your password.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  }),
});

const AddEmployee = ({getemployeedata,saveEmployee }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
  });
  const navigate = useNavigate();
//   let id = { users_id: users_id };
  const editUser = () => {
        // setLoading(true);
        getemployeedata().then((res) => {
      setLoading(false);
      if (res) {
        const result = res.data.data;
        setUserData();
      } else {
      }
    });
  };
  useEffect(() => {
        setUserData({...userData})
  }, []);
  
  const formik = useFormik({
    initialValues: userData,
    validationSchema: schema,
    onSubmit: (value) => {
      setUserData(value);
      onSubmit(value);
    },
    enableReinitialize: true,
  });
  const onSubmit = (value) => {
    setLoading(true);
    // Object.assign(value, id);
    saveEmployee(value).then((res) => {
      setLoading(false);
      if (res.data.status) {
      } else {
      }
    });
  };

  return (
    <form name="RegisterForm" onSubmit={formik.handleSubmit}>
      <Typography 
      component={'span'}
      sx={Style.typographyStyle}>{false?"Edit User":"Add New User"}</Typography>
      <Box
        sx={{
          width: "100%",
          height: "30%",
          borderRadius: 2,
        }}
      >
        <Box sx={Style.rowBoxStyle}>
          {loading && (
            <Skeleton sx={Style.inputStyle} variant="rectangular" height={50} />
          )}
          {!loading && (
            <Box sx={Style.inputStyle}>
              <FormLabel sx={Style.label}>
                First Name
                <span style={Style.star}>*</span>
              </FormLabel>

              <TextField
                name="first_name"
                value={formik.values.first_name}
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
                placeholder="Enter First Name here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
                autoComplete="false"
              />
              {formik.errors.first_name && formik.touched.first_name ? (
                <p style={Style.validationStyle}>{formik.errors.first_name}</p>
              ) : null}
            </Box>
          )}
          {loading && (
            <Skeleton sx={Style.inputStyle} variant="rectangular" height={50} />
          )}
          {!loading && (
            <Box sx={Style.inputStyle}>
              <FormLabel sx={Style.label}>
                Last Name
                <span style={Style.star}>*</span>
              </FormLabel>

              <TextField
                name="last_name"
                value={formik.values.last_name}
                id="last_name"
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
                autoComplete="false"
                color="primary"
                placeholder="Enter Last Name here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
              />
              {formik.errors.last_name && formik.touched.last_name ? (
                <p style={Style.validationStyle}>{formik.errors.last_name}</p>
              ) : null}
            </Box>
          )}
        </Box>
        <Box sx={Style.rowBoxStyle}>
          {loading && (
            <Skeleton sx={Style.inputStyle} variant="rectangular" height={50} />
          )}
          {!loading && (
            <Box sx={Style.inputStyle}>
              <FormLabel sx={Style.label}>
                Date of Birth
                <span style={Style.star}>*</span>
              </FormLabel>
              <TextField
                name="dob"
                value={formik.values.dob}
                id="dob"
                onChange={formik.handleChange}
                type="date"
                variant="filled"
                InputProps={{ disableUnderline: true, pt: "10px" }}
                autoComplete="false"
                inputProps={{
                  max: new Date().toISOString().split("T")[0],
                  display: true,
                  disableRipple: true,
                  dispatch: true,
                  style: {
                    paddingTop: "16px",
                    paddingBottom: "15px",
                  },
                }}
                color="primary"
                placeholder="Enter username here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
              />

              {formik.errors.dob && formik.touched.dob ? (
                <p style={Style.validationStyle}>{formik.errors.dob}</p>
              ) : null}
            </Box>
          )}
          {loading && (
            <Skeleton sx={Style.inputStyle} variant="rectangular" height={50} />
          )}
          {!loading && (
            <Box sx={Style.inputStyle}>
              <FormLabel sx={Style.label}>
                Email
                <span style={Style.star}>*</span>
              </FormLabel>
              <TextField
                name="email"
                value={formik.values.email}
                id="email"
                autoComplete="false"
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
                placeholder="Enter Email here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
              />
              {formik.errors.email && formik.touched.email ? (
                <p style={Style.validationStyle}>{formik.errors.email}</p>
              ) : null}
            </Box>
          )}
        </Box>
        <Box sx={Style.rowBoxStyle}>
          {loading && (
            <Skeleton sx={Style.inputStyle} variant="rectangular" height={50} />
          )}
          {!loading && (
            <Box sx={Style.inputStyle}>
              <FormLabel sx={Style.label}>
              Designation
                <span style={Style.star}>*</span>
              </FormLabel>
              <TextField
                name="designation"
                value={formik.values.designation}
                id="designation"
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
                autoComplete="false"
                color="primary"
                placeholder="Enter Phone Number here"
                sx={{
                  width: "100%",
                  border: "none",
                }}
              />
              {formik.errors.designation && formik.touched.designation ? (
                <p style={Style.validationStyle}>{formik.errors.designation}</p>
              ) : null}
            </Box>
          )}
          {loading && (
                  <Skeleton
                    sx={Style.inputStyle}
                    variant="rectangular"
                    height={50}
                  />
                )} 
                   {!loading && (
                    <Box sx={Style.inputStyle} >
                       <InputLabel
                      // helperText={errors?.recipient_country?.message}
                      // errors={!!errors.recipient_country}
                      id="demo-simple-select-standard-label"
                      placeholder="Select country"
                      sx={{
                        fontSize: "24px",
                        color: "#333333",
                      }}
                    >
                      Gender
                      <span style={{ color: "red" }}>*</span>
                    </InputLabel>
                    <Select
                      sx={{
                        width: "100%",
                        height: "53px",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: "none",
                          bgcolor: "rgba(0, 0, 0, 0.06)",
                        },
                      }}
                      MenuProps={{ disableScrollLock: true }}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      // defaultValue="select"
                      value={""}
                    //   onChange={handleChange}
                      label="gender"
                    >
                      {/* {country_names &&editAddressId&&
                        country_names.map((item, index) => (
                          <MenuItem value={formik.values.recipient_country}>{formik.values.recipient_country}</MenuItem>
                        ))} */}
                      <MenuItem value={""}>{""}</MenuItem>

                      {
                        ["Male","Female","Others"] .map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                    </Select>
                    {formik.errors.gender &&
                    formik.touched.gender ? (
                      <p style={{ color: "red" }}>
                        {formik.errors.gender}
                      </p>
                    ) : null}
                    </Box>
                  )}

        </Box>
        { false && <Typography sx={{ mb: 2 }}>
            <input
              type="checkbox"
              name="validate_Password"
              id="validate_Password"
              onChange={formik.handleChange}
              value={formik.values.validate_Password}
            />
            Do you want to change the password?
          </Typography> }
          {(formik.values.validate_Password || !false) && (
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "24px" },
                  fontWeight: { xs: "500", md: "400" },
                  color: "#3D2E57",
                  mb: 2,
                }}
              >
                Create Password
              </Typography>

              <Box sx={Style.rowBoxStyle}>
                {loading && (
                  <Skeleton
                    sx={Style.inputStyle}
                    variant="rectangular"
                    height={50}
                  />
                )}
                {!loading && (
                  <Box sx={Style.inputStyle}>
                    <FormLabel sx={Style.label}>
                      New Password
                      <span style={Style.star}>*</span>
                    </FormLabel>
                    <TextField
                      name="password"
                      value={formik.values.password}
                      id="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="password"
                      variant="filled"
                      InputProps={{ disableUnderline: true, pt: "10px" }}
                      inputProps={{
                        style: {
                          paddingTop: "16px",
                          paddingBottom: "15px",
                        },
                      }}
                      autoComplete="off"
                      color="primary"
                      placeholder="Enter Password here"
                      sx={{
                        width: "100%",
                        border: "none",
                      }}
                    />
                    <p style={Style.validationStyle}>
                      {formik.errors.password}
                    </p>
                  </Box>
                )}
                {loading && (
                  <Skeleton
                    sx={Style.inputStyle}
                    variant="rectangular"
                    height={50}
                  />
                )}
                {!loading && (
                  <Box sx={Style.inputStyle}>
                    <FormLabel sx={Style.label}>
                      Confirm Password
                      <span style={Style.star}>*</span>
                    </FormLabel>
                    <TextField
                      name="confirm_password"
                      value={formik.values.confirm_password}
                      id="confirm_password"
                      onChange={formik.handleChange}
                      type="password"
                      variant="filled"
                      autoComplete="false"
                      InputProps={{ disableUnderline: true, pt: "10px" }}
                      inputProps={{
                        style: {
                          paddingTop: "16px",
                          paddingBottom: "15px",
                        },
                      }}
                      color="primary"
                      placeholder="Enter confirm password here"
                      sx={{
                        width: "100%",
                        border: "none",
                      }}
                    />
                    <p style={Style.validationStyle}>
                      {formik.errors.confirm_password}
                    </p>
                  </Box>
                )}
              </Box>
            </Box>
          )}
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "35%", lg: "40%" },
          float: "right",
          display: "flex",
          justifyContent: {xs: "space-between",md:"flex-end"},
          pt: 4
        }}
      >
        <Button
          disableRipple
          sx={{
            mr: {md:3},
            pl: "25px", pr: "25px", pt:"10px", pb: "10px",
            fontSize: "18px",
            lineHeight: "21px",
            fontWeight: 400,
            borderRadius: "5px",
            textTransform: "none",
            border: "1px solid #EB5757",
            bgcolor: "#EB5757",
            color: "white",
            "&.MuiButtonBase-root:hover": {
              border: "1px solid #EB5757",
              bgcolor: "#EB5757",
              color: "white",
            },
          }}
          variant="outlined"
          className="btn"
          onClick={() => {
            navigate("/Users");
          }}
        >
          Cancel
        </Button>
        <Button
          disableRipple
          sx={{
            pl: "25px", pr: "25px", pt:"10px", pb: "10px",
            fontSize: "18px",
            lineHeight: "21px",
            fontWeight: 400,
            borderRadius: "5px",
            textTransform: "none",
            color: "white",
            bgcolor: "#27AE60",
            border: "1px solid #27AE60",
            "&.MuiButtonBase-root:hover": {
              border: "1px solid #27AE60",
              color: "white",
              bgcolor: "#27AE60",
            },
          }}
          variant="outlined"
          className="btn"
          type="submit"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getemployeedata: (data) => dispatch(getemployeedata(data)),
    saveEmployee: (data) => dispatch(saveEmployee(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddEmployee);
const Style = {
  label: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    color: "#333333",
  },
  typographyStyle: {
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: { xs: "29px", md: "42px" },
    letterSpacing: "0em",
    textAlign: "center",
    color: "#3D2E57",
    display: "flex",
    pb: 3,
  },
  inputStyle: {
    width: {
      xs: "100%",
      sm: "100%",
      md: "48%",
      lg: "49%",
      xl: "49%",
    },
    mb: 2,
  },
  star: {
    color: "red",
  },
  rowBoxStyle: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
  },
  validationStyle: {
    color: "red",
    margin: "10px",
  },
};

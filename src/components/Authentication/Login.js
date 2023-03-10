import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import cogoToast from "cogo-toast";

import "./Login.css";

import HomeNav from "../HomeNav";
import Footer from "../Footer";
import TextError from "./TextError";
import { Typography } from "@mui/material";
import { getLogin } from "../../redux/action/login/index"
const Login = ({ getLogin }) => {
  const navigate = useNavigate();

  const style = {
    textDecoration: "none",
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      getLogin(values).then((res) => {
        if (res.data.status) {
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("user",res.data.user);
          localStorage.setItem("token", res.data.token);
          cogoToast.success("Login Successful!");
          navigate("/dashboard");
        }
      })
    } catch (error) {
      cogoToast.error(error.response.data.message);
      console.log(error);
    } finally {
      resetForm();
    }
  };

  return (
    <>
      <HomeNav />
      <main className="bg-dark login-page">
        <div className="container">
          <div className="row justify-content-center p-3">
            <div className="col-md-7">
              <div className="card shadow-lg border-0 rounded-lg">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">Login</h3>
                </div>
                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <div className="form-floating mb-3">
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="name@example.com"
                              autoComplete="off"
                            />
                            <label htmlFor="email">Email address</label>
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div className="form-floating mb-3">
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              autoComplete="off"
                            />
                            <label htmlFor="password">Password</label>
                            <ErrorMessage
                              name="password"
                              component={TextError}
                            />
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inputRememberPassword"
                            >
                              Remember Password
                            </label>
                          </div>
                          <div
                            className="
                          d-flex
                          align-items-center
                          justify-content-between
                          mt-4
                          mb-0
                        "
                          >
                            <Link
                              to="/forget-password"
                              className="small"
                              style={style}
                            >
                              Forgot Password
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-primary px-4"
                              disabled={!formik.isValid}
                            >
                              Login
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="small">
                    <Link to="/register">Need an account? Sign up!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
    // <Typography>
    //   Hii
    // </Typography>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getLogin: (item) => dispatch(getLogin(item)),
  };
}
export default connect(null, mapDispatchToProps)(Login);
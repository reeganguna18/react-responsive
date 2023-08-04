import React from "react";
import "./SignUp.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  firstName: "",
  LastName: "",
  email: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const onSubmit = (values) => {
  console.log(values);
};
function SignUp() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div>
            <section className="h-100 bg-dark">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col">
                    <div className="card card-registration my-4">
                      <div className="row g-0">
                        <div className="col-xl-6 d-none d-xl-block">
                          <img
                            src="https://wallpapers.com/images/hd/pixel-nature-b7p28eytg7ulkmb6.jpg"
                            //   src="https://p4.wallpaperbetter.com/wallpaper/277/155/700/ai-art-landscape-trees-concept-art-river-hd-wallpaper-preview.jpg"
                            // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                            // src="https://st.focusedcollection.com/13873228/i/650/focused_218688664-stock-photo-young-woman-working-modern-office.jpg"
                            alt="front"
                            className="img-fluid"
                            style={{
                              borderTopLeftRadius: ".25rem",
                              borderBottomLeftRadius: ".25rem",
                            }}
                          />
                        </div>
                        <div className="col-xl-6">
                          <div className="card-body p-md-5 text-black">
                            <h3
                              className="mb-5 text-uppercase"
                              style={{ color: "#db64cd" }}
                            >
                              SIGN UP
                            </h3>

                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <Field
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control form-control-lg"
                                  />
                                  <ErrorMessage
                                    name="firstName"
                                    component="div"
                                  />
                                  <label
                                    className="form-label"
                                    for="form3Example1m"
                                  >
                                    First name
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <Field
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-control form-control-lg"
                                  />
                                  <ErrorMessage
                                    name="lastName"
                                    component="div"
                                  />
                                  <label
                                    className="form-label"
                                    for="form3Example1n"
                                  >
                                    Last name
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="form3Example8"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" for="form3Example8">
                                User Name
                              </label>
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" for="form3Example8">
                                Password
                              </label>
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password "
                                id="confirm password"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" for="form3Example8">
                                Confirm Password
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="form3Example97"
                                className="form-control form-control-lg"
                              />
                              <ErrorMessage name="email" component="div" />
                              <label
                                className="form-label"
                                for="form3Example97"
                              >
                                Email ID
                              </label>
                            </div>

                            <div className="d-flex justify-content-end pt-3">
                              <button
                                type="button"
                                className="btn btn-light btn-lg"
                              >
                                Reset all
                              </button>
                              <button
                                type="submit"
                                className="btn btn-warning btn-lg ms-2"
                              >
                                Submit form
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;

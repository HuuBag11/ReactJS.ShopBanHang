import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Pricing() {
  return (
    <MDBContainer className="pb-5">
      <MDBCard className="border overflow-hidden">
        <MDBCardBody className="px-0 py-0">
          <MDBRow>
            <MDBCol md="8" className="py-2 bg-white border">
              <div className="mx-4 my-4">
                <p className="h3 mb-3">
                  <strong>Lifetime Membership</strong>
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate quae deserunt excepturi nihil nobis. Hic dolores
                  architecto quod dicta, iusto odio, sit quae cum, quos alias
                  eveniet corrupti ab pariatur.
                </p>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBTypography listUnStyled className="mb-0 pt-0 pb-0">
                      <li className="mb-3">
                        <i className="fa fa-solid fa-check me-1 mr-2"></i>
                        <small>Lorem Ipsum</small>
                      </li>
                      <li className="mb-3">
                        <i className="fa fa-solid fa-check me-1 mr-2"></i>
                        <small>Lorem Ipsum</small>
                      </li>
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBTypography listUnStyled className="mb-0 pt-0 pb-0">
                      <li className="mb-3">
                        <i className="fa fa-solid fa-check me-1 mr-2"></i>
                        <small>Lorem Ipsum</small>
                      </li>
                      <li className="mb-3">
                        <i className="fa fa-solid fa-check me-1 mr-2"></i>
                        <small>Lorem Ipsum</small>
                      </li>
                    </MDBTypography>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
            <MDBCol
              md="4"
              className="text-center"
              style={{
                backgroundColor: "#F9FAFB",
                boxShadow: "0px 0px 10px 1px #aaaaaa",
              }}
            >
              <div className="mt-5 pt-4 me-4">
                <p className="h5">Let's a membership, having voucher shipping</p>
                <p
                  className="h2 fw-bold text-black"
                  style={{ fontSize: "40px" }}
                >
                  $20
                  <small class="text-muted ms-2" style={{ fontSize: "15px" }}>
                    USD
                  </small>
                </p>
                <p
                  className="text-decoration-underline text-black-50 "
                  style={{ fontSize: "15px" }}
                >
                  Learn more about our policy
                </p>
                <a
                  href="#"
                  className="btn btn-dark d-block mb-2 mt-3 text-capitalize"
                >
                  Get Access
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
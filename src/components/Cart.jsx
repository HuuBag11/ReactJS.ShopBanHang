import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
  import React from "react";
  import {NavLink} from "react-router-dom";
  
  export default function Cart() {
  return (
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol lg="7">
                  <MDBTypography tag="h5">
                    <NavLink to="/products" className="text-body">
                      <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                      shopping
                    </NavLink>
                  </MDBTypography>
  
                  <hr />
  
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have 4 items in your cart</p>
                    </div>
                    <div>
                      
                    </div>
                  </div>
  
                  <MDBCard className="mb-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                              Iphone 11 pro
                            </MDBTypography>
                            <p className="small mb-0">256GB, Navy Blue</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                              2
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                              $900
                            </MDBTypography>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
  
                  <MDBCard className="mb-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                              Samsung galaxy Note 10
                            </MDBTypography>
                            <p className="small mb-0">256GB, Navy Blue</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                              2
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                              $900
                            </MDBTypography>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
  
                  <MDBCard className="mb-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                              Canon EOS M50
                            </MDBTypography>
                            <p className="small mb-0">Onyx Black</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                              1
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                              $1199
                            </MDBTypography>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
  
                  <MDBCard className="mb-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                              fluid className="rounded-3" style={{ width: "65px" }}
                              alt="Shopping item" />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                              MacBook Pro
                            </MDBTypography>
                            <p className="small mb-0">1TB, Graphite</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                              1
                            </MDBTypography>
                          </div>
                          <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                              $1799
                            </MDBTypography>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
  
                <MDBCol lg="5">
                  <MDBCard className="bg-secondary text-white rounded-3">
                    <MDBCardBody>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBTypography tag="h5" className="mb-0">
                          Enter your information
                        </MDBTypography>
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                      </div>
                      <form className="mt-4">
                        <MDBInput className="mb-4" label="Your name" type="text" size="lg"
                          placeholder="Enter your Name" contrast />
  
                        <MDBInput className="mb-4" label="Your Number" type="text" size="lg"
                          minLength="19" maxLength="19" placeholder="+(84) 000 000 000" contrast />
  
                        <MDBRow className="mb-4">
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                              minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                          </MDBCol>
                          <MDBCol md="6">
                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                              maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                          </MDBCol>
                        </MDBRow>
                      </form>
  
                      <hr />
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">$4798.00</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
                      </div>
  
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">$4818.00</p>
                      </div>
  
                      <MDBBtn color="light" block size="lg">
                        <div className="d-flex justify-content-between">
                          <span>
                            Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                          </span>
                        </div>
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  );
}
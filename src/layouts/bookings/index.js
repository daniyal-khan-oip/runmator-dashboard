/**
=========================================================
*  
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import bookingsData from "layouts/bookings/data/bookingsData";
import { useEffect, useState } from "react";
import * as actions from "../../store/Actions/index";
import { connect } from "react-redux";
import MDAlert from "components/MDAlert";

function Bookings() {
  const { columns, rows, isLoading } = bookingsData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Bookings
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {isLoading ? (
                  <div className="loading-div">
                    <MDTypography
                      variant="button"
                      fontWeight="bold"
                      display="block"
                      color="info"
                      textGradient
                    >
                      Please Wait
                    </MDTypography>
                  </div>
                ) : rows?.length > 0 ? (
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                ) : (
                  <div className="loading-div">
                    <MDTypography
                      variant="button"
                      fontWeight="bold"
                      display="block"
                      color="info"
                      textGradient
                    >
                      No Data 
                    </MDTypography>
                  </div>
                )}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

const mapStateToProps = ({ userAuthReducer }) => {
  return { userAuthReducer };
};
export default connect(mapStateToProps, actions)(Bookings);

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
import servicesData from "layouts/services/data/servicesData";
import { useEffect, useState } from "react";
import * as actions from "../../store/Actions/index";
import { connect } from "react-redux";
import MDAlert from "components/MDAlert";
import EditServiceModal from "components/EditServiceModal";
import MDButton from "components/MDButton";

function Services() {
  const {
    columns,
    rows,
    showEditModal,
    setShowEditModal,
    showAddModal,
    setShowAddModal,
    selectedItem,
    onSubmitEdit,
    onSubmitAdd,
    isLoading,
  } = servicesData();

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
                  Services Provided
                </MDTypography>
              </MDBox>
              <MDBox
                mt={3}
                ml={3}
                onClick={() => {
                  setShowAddModal(true);
                }}
              >
                <MDButton variant="gradient" color="secondary">
                  Add Service
                </MDButton>
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
        {showEditModal && (
          <EditServiceModal
            title="Edit Service"
            isModalVisible={showEditModal}
            setIsModalVisible={setShowEditModal}
            selectedItem={selectedItem}
            isLoading={isLoading}
            onSubmit={onSubmitEdit}
          />
        )}
        {showAddModal && (
          <EditServiceModal
            title="Add Service"
            isModalVisible={showAddModal}
            setIsModalVisible={setShowAddModal}
            selectedItem={selectedItem}
            isLoading={isLoading}
            onSubmit={onSubmitAdd}
          />
        )}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

const mapStateToProps = ({ userAuthReducer }) => {
  return { userAuthReducer };
};
export default connect(mapStateToProps, actions)(Services);

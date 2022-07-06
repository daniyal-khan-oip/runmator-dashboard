/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team2 from "assets/images/accident.png";
import team3 from "assets/images/battery.png";
import team4 from "assets/images/flattyre.png";
import team5 from "assets/images/fuelout.png";
import team6 from "assets/images/towing.png";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllServices } from "store/Actions";
import { deactivateService } from "store/Actions";
import { activateService } from "store/Actions";
import { updateService } from "store/Actions";

function bookingsData() {
  const [services, setServices] = useState([]);
  const userAuthReducer = useSelector((state) => state?.userAuthReducer);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = "16|NeLmmgHSYJdPFN3bwlsSAi2yG8octgtBoJYEzbgv";
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  useEffect(() => {
    // setIsLoading(true);
    // dispatch(getAllServices()).then(() => {
    //   setIsLoading(false);
    // });
  }, []);

  useEffect(() => {
    if (userAuthReducer?.services?.length > 0) {
      setServices(userAuthReducer?.services);
    }
  }, [userAuthReducer?.services]);

  const _onClickAction = (ele) => {
    setIsLoading(true);

    if (ele?.services_status == 1) {
      dispatch(deactivateService(accessToken, ele?.id)).then(() => {
        dispatch(getAllServices()).then(() => {
          setIsLoading(false);
        });
      });
    }
    if (ele?.services_status == 0) {
      dispatch(activateService(accessToken, ele?.id)).then(() => {
        dispatch(getAllServices()).then(() => {
          setIsLoading(false);
        });
      });
    }
  };

  const _onSubmitUpload = async (serviceName, serviceIcon) => {
    const formData = new FormData();
    formData.append("services_name", serviceName);
    formData.append("services_icon", serviceIcon);

    setIsLoading(true);

    dispatch(updateService(accessToken, formData, selectedItem?.id)).then(
      () => {
        dispatch(getAllServices()).then(() => {
          setIsLoading(false);
          setSelectedItem(null);
        });
      }
    );
  };

  useEffect(() => {
    if (selectedItem !== null) {
      setShowEditModal(true);
    }
  }, [selectedItem]);
  return {
    columns: [
      { Header: "service", accessor: "service", width: "30%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "activity", accessor: "activity", align: "center" },
    ],

    rows: services?.map((ele) => {
      return {
        service: <Author image={team2} name={ele.services_name} email="" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={ele?.services_status === 0 ? "INACTIVE" : "ACTIVE"}
              color={ele?.services_status === 0 ? "dark" : "success"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),

        action: (
          <MDBox
            onClick={() => {
              setSelectedItem(ele);
            }}
          >
            <MDButton variant="gradient" color="secondary">
              Edit Details
            </MDButton>
          </MDBox>
        ),

        activity: isLoading ? (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Please Wait
          </MDTypography>
        ) : (
          <MDBox
            onClick={() => {
              setIsLoading(true);
              _onClickAction(ele);
            }}
          >
            <MDButton variant="gradient" color="secondary">
              {ele?.services_status === 1 ? "Deactivate Now" : "Activate Now"}
            </MDButton>
          </MDBox>
        ),
      };
    }),

    isLoading: isLoading,
  };
}

// const mapStateToProps = ({ userAuthReducer }) => {
//   return { userAuthReducer };
// };

// export default connect(null, null)(servicesData);
export default bookingsData;

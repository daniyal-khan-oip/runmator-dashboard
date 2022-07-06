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
import team2 from "assets/images/team-2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "store/Actions";
import { useEffect, useState } from "react";
import moment from "moment";
import { activateUser } from "store/Actions";
import { deactivateUser } from "store/Actions";
import { imageUrl } from "configuration/config";

function usersData() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const userAuthReducer = useSelector((state) => state?.userAuthReducer);
  const accessToken = "1|1LhlQ5V0qnkAogHuEG70UAYK2eiUBUU6HBfhicRu";
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

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllUsers()).then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (userAuthReducer?.users?.length > 0) {
      setUsers(userAuthReducer?.users);
    }
  }, [userAuthReducer?.users]);

  const _onClickAction = (ele) => {
    setIsLoading(true);

    if (ele?.status == "active") {
      dispatch(deactivateUser(accessToken, ele?.id)).then(() => {
        dispatch(getAllUsers()).then(() => {
          setIsLoading(false);
        });
      });
    }
    if (ele?.status == "inactive") {
      dispatch(activateUser(accessToken, ele?.id)).then(() => {
        dispatch(getAllUsers()).then(() => {
          setIsLoading(false);
        });
      });
    }
  };
  return {
    columns: [
      { Header: "user", accessor: "user", width: "45%", align: "left" },
      { Header: "usertype", accessor: "usertype", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "JOINED", accessor: "JOINED", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: users?.map((ele) => {
      return {
        user: (
          <Author
            image={`${imageUrl}${ele?.profile_image}/${ele?.profile_image}`}
            name={ele?.name || "No Name"}
            email={ele?.email || "No E-mail Address"}
          />
        ),
        usertype: (
          <Job
            title={ele?.role_id == 2 ? "Client" : "Service Provider"}
            description=""
          />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={ele?.status || "No Status"}
              color={
                ele?.status === "active"
                  ? "success"
                  : ele?.status === "inactive" || ele?.status === "block"
                  ? "dark"
                  : "dark"
              }
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        JOINED: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {moment(ele.created_at).format("DD-MMM-YYYY hh:mm:s A")}
          </MDTypography>
        ),
        action: isLoading ? (
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
              {ele?.status === "active" ? "Deactivate Now" : "Activate Now"}
            </MDButton>
          </MDBox>
        ),
      };
    }),
    isLoading: isLoading,
  };
}

export default usersData;

/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

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

export default function data() {
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

  return {
    columns: [
      { Header: "service", accessor: "service", width: "30%", align: "left" },
      { Header: "service_icon", accessor: "service_icon", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        service: <Author image={team2} name="Towing" email="" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ACTIVE"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        service_icon: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            23/04/18
          </MDTypography>
        ),
        price: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            $50.00
          </MDTypography>
        ),
        action: (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Edit
          </MDTypography>
        ),
      },
      {
        service: <Author image={team3} name="Wheel Balancing" email="" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="INACTIVE"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        service_icon: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            11/01/19
          </MDTypography>
        ),
        price: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            $50.00
          </MDTypography>
        ),
        action: (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Edit
          </MDTypography>
        ),
      },
      {
        service: <Author image={team4} name="Engine Repair" email="" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ACTIVE"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        service_icon: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            19/09/17
          </MDTypography>
        ),
        price: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            $100.00
          </MDTypography>
        ),
        action: (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Edit
          </MDTypography>
        ),
      },
      {
        service: <Author image={team5} name="Inter Cleaning" email="" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="ACTIVE"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        service_icon: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            24/12/08
          </MDTypography>
        ),
        price: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            $13.00
          </MDTypography>
        ),
        action: (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Edit
          </MDTypography>
        ),
      },
      {
        service: <Author image={team6} name="Brakes & Clutches" email="" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="INACTIVE"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        service_icon: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            04/10/21
          </MDTypography>
        ),
        price: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            $45.00
          </MDTypography>
        ),
        action: (
          <MDTypography
            variant="button"
            fontWeight="regular"
            display="block"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}

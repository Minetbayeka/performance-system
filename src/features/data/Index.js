import image1 from "../../assets/images/girl.jpeg";
import image2 from "../../assets/images/baet.jpeg";
// import image3 from "../../assets/images/girl.jpeg";
import image4 from "../../assets/images/baet.jpeg";
// import image5 from "../../assets/images/girl.jpeg";
import image6 from "../../assets/images/baet.jpeg";
// import image7 from "../../assets/images/girl.jpeg";

export const interns = [
  {
    id: 1,
    name: "Olivia Rhye",
    imgUrl: image1,
    performance: "Excellent",
    departments: "Product Designer",
    supervisor: "Johanna Skilles",
    internshipdur: "3 months",
    profile: "View profile",
  },

  {
    id: 2,
    name: "Phoenix Baker",
    imgUrl: image2,
    performance: "Bad",
    departments: "Product Manager",
    supervisor: "Danielle McClure",
    internshipdur: "1 months",
    profile: "View profile",
  },
  {
    id: 3,
    name: "Lana Steiner",
    imgUrl: image1,
    performance: "Good",
    departments: "Frontend Developer",
    supervisor: "Brandon Hara",
    internshipdur: "2 months",
    profile: "View profile",
  },

  {
    id: 4,
    name: "Demi Wikinson",
    imgUrl: image4,
    performance: "Fair",
    departments: "Backend Developer",
    supervisor: "Stacy Schulz",
    internshipdur: "6 months",
    profile: "View profile",
  },

  {
    id: 5,
    name: "Candice Wu",
    imgUrl: image1,
    performance: "Poor",
    departments: "Fullstack Developer",
    supervisor: "Ronnie Oison",
    internshipdur: "3 months",
    profile: "View profile",
  },

  {
    id: 6,
    name: "Natall Craig",
    imgUrl: image6,
    performance: "Average",
    departments: "Ux Designer",
    supervisor: "Christle Bartoletti",
    internshipdur: "3 months",
    profile: "View profile",
  },
  {
    id: 7,
    name: "Drew Cano",
    imgUrl: image1,
    performance: "Poor",
    departments: "Ux Copywriter",
    supervisor: "Brain Thiel",
    internshipdur: "3 months",
    profile: "View profile",
  },
];

export default interns;

export const users = [
  {
    id: 1,
    name: "Natall Craig",
    role: "Administator",
    imgUrl: image1,
    department: "Ux Designer",
    email: "example@gmail.com",
    last: "12am",
  },

  {
    id: 2,
    name: "Olivia Rhye",
    role: "Administator",
    imgUrl: image1,
    department: "Product Designer",
    email: "example@gmail.com",
    last: "12am",
  },

  {
    id: 3,
    name: "Olivia Rhye",
    role: "Supervisor",
    imgUrl: image1,
    department: "Frontend",
    email: "example@gmail.com",
    last: "12am",
  },

  {
    id: 4,
    name: "Bih Rhye",
    role: "Editor",
    imgUrl: image1,
    department: "Fullstack",
    email: "example@gmail.com",
    last: "12am",
  },
];

export const permissionsList = [
  {
    id:1,
    label: "Create",
    description: "Allows users to add new content or resources",
  },
  {
    id:2,
    label: "Read",
    description: "Permit user to view existing content without making changes",
  },
  {
    id:3,
    label: "Update",
    description: "User can edit and make changes to existing content",
  },
  {
    id:4,
    label: "Cancer Report publishing",
    description:"Provides authority for removing content from the system entirely",
  },
  {
    id:5,
    key: "articlePublishing",
    label: "Article publishing",
    description: "Provides authority for removing content from the system entirely",
  },
  {
    id:6,
    label: "Delete",
    description:"Provides authority for removing content from the system entirely",
  },
];


// Mock data (replace with your actual users data)
export const internsData = [
  {
    id: 1,
    name: 'Olivia Rhye',
    imgUrl: image1, // Placeholder image
    priority: 'High priority',
    submittedBy: 'Johanna Skiles',
    weekNumber: 'Week 12',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Phoenix Baker',
    imgUrl: image1, // Placeholder image
    priority: 'Low priority',
    submittedBy: 'Danielle McClure',
    weekNumber: 'Week 10',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'In Review',
  },
  {
    id: 3,
    name: 'Lana Steiner',
    imgUrl: image2, // Placeholder image
    priority: 'Medium priority',
    submittedBy: 'Brandon O\'Hara',
    weekNumber: 'Week 8',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'Verified',
  },
  {
    id: 4,
    name: 'Demi Wilkinson',
    imgUrl: image4, // Placeholder image
    priority: 'Medium priority',
    submittedBy: 'Stacy Schultz',
    weekNumber: 'Week 15',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'Rejected',
  },
  {
    id: 5,
    name: 'Candice Wu',
    imgUrl: image1, // Placeholder image
    priority: 'High priority',
    submittedBy: 'Ronnie Oison',
    weekNumber: 'Week 19',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'Verified',
  },
  {
    id: 6,
    name: 'Natali Craig',
    imgUrl: image2, // Placeholder image
    priority: 'Low priority',
    submittedBy: 'Christie Bartoletti',
    weekNumber: 'Week 14',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'In Review',
  },
  {
    id: 7,
    name: 'Drew Cano',
    imgUrl: image1, // Placeholder image
    priority: 'Low priority',
    submittedBy: 'Brian Thiel',
    weekNumber: 'Week 17',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'Rejected',
  },
  {
    id: 8,
    name: 'Jasper Lee',
    imgUrl: image2, // Placeholder image
    priority: 'High priority',
    submittedBy: 'Avery Mason',
    weekNumber: 'Week 16',
    submissionDateTime: '12-05-2025, 6:00PM',
    status: 'Pending',
  },
];


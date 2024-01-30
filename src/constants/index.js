import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    admin,
    codeEditor,
    weather,
    cloudLogo,
    devops,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Coder(Problem Solver)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "cloud",
      icon: cloudLogo,
    },
    {
      name: "devops",
      icon: devops,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "XCIT Foundations",
      icon: "https://media.licdn.com/dms/image/C4D0BAQF_q7ADTpJ2lA/company-logo_200_200/0/1631306408395?e=1714608000&v=beta&t=QEAaAhI73g4OjDcXCObimKjHElJ5iprl6_1SCWvmtQU",
      iconBg: "#383E56",
      date: "March 2022 - June 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "CodeClause",
      icon: "https://media.licdn.com/dms/image/C4D0BAQFheEbgt4_U_w/company-logo_200_200/0/1661277231688/codeclause_logo?e=1714608000&v=beta&t=bzxhru2oyxbNZ9uuRgpb3AfErM58PaiA7oWzQ3mP62k",
      iconBg: "#E6DEDD",
      date: "August 2022 -  October 2022",
      points: [
        "Developing web applications using HTML,CSS,JS and other related technologies.",
        "Collaborating with cross-functional teams other developers to create good product",
        "Implementing responsive designs and ensuring speed",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Oasis Infobyte",
      icon: "https://media.licdn.com/dms/image/C4E0BAQHfk_O8amPovQ/company-logo_200_200/0/1642532597684/oasis_infobyte_logo?e=1714608000&v=beta&t=HYhPF-UQ863GS20C8lE1ERcuA7ZVBLRZBWU7DYVuOQk",
      iconBg: "#383E56",
      date: "Jan 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Focused on improving the front end skills",
        "Developed many crazy stuffs.",
        "Developed many web apps focusing on front end",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Bharat Intern",
      icon: "https://media.licdn.com/dms/image/D560BAQFV0JYJ33yONg/company-logo_200_200/0/1691701552297/bharat_intern_logo?e=1714608000&v=beta&t=ck7qXRiFnDg_R-mVdfcKHEPs-9cYx6O-PLgkNRPaKN4",
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2023",
      points: [
        "We have to develop a website for the end user",
        "I have developed my websites",
        "It was a dynamic website which contains all the necessary information",
      ],
    },
  ];

    const projects = [
      {
        name: "Weather Website",
        description:
          "Web-based platform that allows users to check the weather related information at a particular place or location and can tell the weather of the place that you have searched.",
        tags: [
          {
            name: "React JS",
            color: "blue-text-gradient",
          },
          {
            name: "Mongodb",
            color: "green-text-gradient",
          },
          {
            name: "API",
            color: "pink-text-gradient",
          },
        ],
        image: weather,
        source_code_link: "https://github.com/Amitesh-tiwari/Weather-Website",
      },
      {
        name: "Code Editor",
        description:
          "Web application that enables the user to test, review and practice their code on the Code Editor which can execute the code and can list errors if present.",
        tags: [
          {
            name: "ReactJS",
            color: "blue-text-gradient",
          },
          {
            name: "Material UI",
            color: "green-text-gradient",
          },
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
        ],
        image: codeEditor,
        source_code_link: "https://github.com/Amitesh-tiwari/Code_Clause_CodeEditor",
      },
      {
        name: "Admin Panel",
        description:
          "A comprehensive Admin Panel that delivers and showacse all the neccessary informations of the user related to its recent tasks.",
        tags: [
          {
            name: "React JS",
            color: "blue-text-gradient",
          },
          {
            name: "JSX",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
        ],
        image: admin,
        source_code_link: "https://github.com/Amitesh-tiwari/Admin-Panel",
      },
    ];
    
    export { services, technologies, experiences, projects };

import projectImg1 from "../src/images/leapin.gif";
import projectImg2 from "../src/images/teachersonw.png";
import projectImg3 from "../src/images/personalpp.png";
import projectImg4 from "../src/images/roster.png";
import node from "../src/images/nodejs.png";
import bitbucket from "../src/images/bitbucket.png";
import react from "../src/images/react.png";
import aws from "../src/images/aws.png";
import typescript from "../src/images/typescript.png";
import graphql from "../src/images/graphql.png";
import styledComp from "../src/images/styled.png";
import mongodb from "../src/images/mongodb.png";
import electronjs from "../src/images/electronjs.png";
// icons

export const sliderItem = [
    {
        id: 1,
        left_title: "Leap in!",
        left_desc: "Technology Stacks",
        left_img: projectImg1,
        // right
        right_title: "Rating mechanism",
        right_desc:
            "Build the pop-up business rating mechanism using Node API, React.js and AWS with full consideration of future projects.",
        stack_icons: [
            { id: 1, iconName: react },
            { id: 2, iconName: node },
            { id: 3, iconName: bitbucket },

            { id: 4, iconName: aws },
        ],
    },
    {
        id: 2,
        left_title: "Teachers on Wheels",
        left_desc: "Technology Stacks",
        left_img: projectImg2,

        // right
        right_title: "Blog page",
        right_desc:
            "Engineered blogging system for skillojo.com with an ADMIN interface to manage the blogs",
        stack_icons: [
            { id: 1, iconName: react },
            { id: 2, iconName: node },
            { id: 3, iconName: typescript },
            { id: 4, iconName: graphql },
        ],
    },
    {
        id: 3,
        left_title: "Personal PortFolio Website",
        left_desc: "Technology Stacks",
        left_img: projectImg3,

        // right
        right_title: "Personal Portfolio website",
        right_desc:
            "Developed React website to display the projects and personal information using Styled-components.",
        stack_icons: [
            { id: 1, iconName: react },
            { id: 2, iconName: node },
            { id: 3, iconName: styledComp },
        ],
    },
    {
        id: 4,
        left_title: "Roster Application",
        left_desc: "Technology Stacks",
        left_img: projectImg4,

        // right
        right_title: "Roster Scheduler software",
        right_desc:
            "Engineered modern CRUD scheduler to storeemployees shift on database and display on the front-end.",
        stack_icons: [
            { id: 1, iconName: react },
            { id: 2, iconName: node },
            { id: 3, iconName: mongodb },
            { id: 4, iconName: electronjs },
        ],
    },
];
// https://iconscout.com/icons/styled
// https://freefrontend.com/css-cards/

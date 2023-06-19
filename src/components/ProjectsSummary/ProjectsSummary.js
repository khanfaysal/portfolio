import { useState } from "react";
import ProjectSummaryDetails from "../ProjectsSummaryDetails/ProjectSummaryDetails";
import aiImage from "../../images/aiImage.png";
import colorGenerate from "../../images/Color-Generate.png";
import shopNyla from "../../images/Shop-Nyla.png";
import pixel from "../../images/Pixel.png";
import todo from "../../images/react-todo-dnd.png";
import CowHutAPI from "../../images/backend-cow-api.png";

const ProjectsSummary = () => {

  const projectsData = [

    {
      image: colorGenerate,
      title: "LizardUi",
      description:
        "This website is generate beautiful random color as a result we choose our desire color and copy or grab color with hex value. When our any projects need color then grab here. After copy hex code you can use directly in your project.",
      liveLink: "https://zingy-manatee-7646ba.netlify.app/",
      clientLink: "https://github.com/khanfaysal/color-generate",
      tags: "HTML,CSS3,javascript"
    },
    {
      image: pixel,
      title: "Pixel",
      description:
        "Pixel website is mainly focused on sharing photos, illustrations. Pixel images and videos may be used freely for commercial or non-commercial.",
      liveLink: "https://tailwind-project-d9330.web.app/",
      clientLink: "https://github.com/khanfaysal/tailwind-project",
      tags: "tailwind css,reactjs,react-router,firebase-auth"
    },
    
    {
      image: shopNyla,
      title: "Shop Nyla (Bootcamp team project)",
      description:
        "Users can buy products after login into the applications.Delete, increase/decrease product quantity option exists. Users select a product they can ensure which product is selected and also see the product's total price, shipping cost, vat, and total price.",
      liveLink: "https://shop-nyla.web.app/",
      clientLink: "https://github.com/mir-hussain/shop-nyla-client/branches",
      tags: "redux,reactjs,react-router,firebase-auth,emailjs"
    },
    {
      image: aiImage,
      title: "Imajine",
      description:
        "This project done by openAI API with dall-e model. Dall-e model can translate description to image. User write their own description and get desire image. And showcase their generate image also download.",
      liveLink: "https://courageous-arithmetic-fb1f4f.netlify.app/",
      clientLink: "https://github.com/khanfaysal/ai-image-generation/tree/main/client",
      serverLink: "https://github.com/khanfaysal/ai-image-generation/tree/main/server",
      tags: "reactjs,express js,openAI API,tailwind,mongoDB, mongoose"
    },
    {
      image: todo,
      title: "Todo",
      description:
        "The React drag and drop todo project is a simple web application that allows users to create, track and organize their tasks using a drag and drop interface.The project is built using React, and utilizes the React DnD (Drag and Drop) library to create the drag and drop functionality. It also uses the React Toastify library for displaying notifications.",
      liveLink: "https://main--fascinating-daifuku-1fe9ba.netlify.app/",
      clientLink: "github.com/khanfaysal/todo-dnd",
      tags: "reactjs,react-dnd,toastify,localstorage"
    },
    {
      image: CowHutAPI,
      title: "CowHutAPI",
      description:
        "Streamlined cow operations with buyer and seller involvement. Efficiently manage individual cows, including creation, update, and deletion. Seller ID references facilitate seamless transactions and ownership tracking.",
      liveLink: "https://digital-cow-hut-backend-flame.vercel.app/api/v1/cows",
      serverLink: "",
      tags: "typescript,express js,zod,mongoose"
    },
    

  ];

  const [showAll, setShowAll] = useState(false);
  const numToShow = showAll ? projectsData.length : 4;

  return (

    <section className="section-projectSummary section">
      <div className="container">
        <h2 className="page-heading data-show">Projects</h2>
        <div className="row">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {projectsData.slice(0, numToShow).map((proData) => (
              <ProjectSummaryDetails key={proData.title} proData={proData} />
            ))}
          </div>
          {projectsData.length > 4 && (
            <button className="brand-btn mt-5" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSummary;


import template_1 from "../Images/temp1.jpg";
import template_2 from "../Images/temp2.PNG";
import template_3 from "../Images/temp3.PNG";
import template_4 from "../Images/temp4.PNG";



import Template1 from "../Templates/TemplateSpades";
import Template2 from "../Templates/TemplateDiamonds";
import Template3 from "../Templates/TemplateClubs";
import Template4 from "../Templates/TemplateAce";


export const templates = [
  {
    id: 1,
    template_name: "Template-1",
    template_img: template_1,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template-2",
    template_img: template_2,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template-3",
    template_img: template_3,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template-4",
    template_img: template_4,
    template: <Template4 />,
  },

];

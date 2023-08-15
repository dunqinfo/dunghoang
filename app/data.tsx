import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
export type information = {
    icon:ReactElement;
    text:string;
    link_to:string
};
export const data:information[] = [
    {
        icon: <FontAwesomeIcon icon={faFacebook} />,
        text: "Dung Hoàng",
        link_to: "https://www.facebook.com/convocuaoikawa"
    },{
        icon: <FontAwesomeIcon icon={faInstagram} />,
        text: "hdunq201_",
        link_to: "https://www.instagram.com/hdunq201_"
    },{
        icon: <FontAwesomeIcon icon={faGithub} />,
        text: "hdunq11",
        link_to: "https://github.com/hdunq11"
    }

];
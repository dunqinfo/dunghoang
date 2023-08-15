import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
    }
];
import { faUsers, faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Link {
  id: number;
  name: string;
  path: string;
  icon: IconDefinition;
  dropdown: boolean;
}

export const links: Link[] = [
  {
    id: 1,
    name: "Users",
    path: "/dashboard/users",
    icon: faUsers,
    dropdown: true,
  },
  {
    id: 2,
    name: "Raneem",
    path: "/dashboard/raneem&nageeb",
    icon: faUser,
    dropdown: false,
  },
];

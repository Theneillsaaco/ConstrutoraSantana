export interface Client {
    name: string;
    logo: string;
    url?: string;
}

export const clients: Client[] = [
  {
    name: "SINERCON",
    logo: "/ConstrutoraSantana/Images/Clients/Company/Sinercon.avif",
    url: "https://www.sinercon.com.do",
  },
  {
    name: "MINERD",
    logo: "/ConstrutoraSantana/Images/Clients/Company/Minerd.svg",
    url: "https://www.ministeriodeeducacion.gob.do",
  },
  {
    name: "Remix",
    logo: "/ConstrutoraSantana/Images/Clients/Company/Remix.png",
    url: "https://remixsa.do/",
  },
  {
    name: "Unibe",
    logo: "/ConstrutoraSantana/Images/Clients/Company/Unibe.png",
    url: "https://www.unibe.edu.do/",
  },
  {
    name: "NexusTours",
    logo: "/ConstrutoraSantana/Images/Clients/Company/NexusTours.svg",
    url: "https://www.nexustours.com/",
  },
  {
    name: "TargetGroup",
    logo: "/ConstrutoraSantana/Images/Clients/Company/TargetGroup.png",
    url: "http://targetgroupdr.com/",
  },
  {
    name: "ContructoraDupla",
    logo: "/ConstrutoraSantana/Images/Clients/Company/Dupla.png",
    url: "https://grupodupla.com/",
  },
  {
    name: "CivilMek",
    logo: "/ConstrutoraSantana/Images/Clients/Company/CivilMek.png",
    url: "https://www.civilmek.com/",
  },
  {
    name: "AceroEstrella",
    logo: "/ConstrutoraSantana/Images/Clients/Company/AceroEstrella.png",
    url: "https://estrella.com.do/empresas/acero-estrella/",
  },
  {
    name: "Codelpa",
    logo: "/ConstrutoraSantana/Images/Clients/Company/Codelpa.png",
    url: "https://codelpa.com/",
  }
];
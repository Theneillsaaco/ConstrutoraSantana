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

];
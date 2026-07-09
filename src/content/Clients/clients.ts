export interface Client {
    name: string;
    logo: string;
    url?: string;
}

export const clients: Client[] = [
  {
    name: "SINERCON",
    logo: "/ConstrutoraSantana/Images/Clients/Sinercon.avif",
    url: "https://www.sinercon.com.do",
  },
  {
    name: "MINERD",
    logo: "/ConstrutoraSantana/Images/Clients/Minerd.svg",
    url: "https://www.ministeriodeeducacion.gob.do",
  },
  {
    name: "Remix",
    logo: "/ConstrutoraSantana/Images/Clients/Remix.png",
    url: "https://remixsa.do/",
  },

];
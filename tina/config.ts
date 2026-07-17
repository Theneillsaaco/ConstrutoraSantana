import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "content",

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "Images/Clients/Content",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "projects",
        label: "Proyectos",
        path: "src/content/projects",
        format: "md",
        ui: {
          router: () => "/"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripcion",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "type",
            label: "Tipo",
            options: [ "Residencial", "Comercial", "Institucianal", ]
          },
          {
            type: "string",
            name: "img",
            label: "Imagenes",
            fields: [
              {
                type: "image",
                name: "cover",
                label: "Foto de portada",
                required: true
              },
              {
                type: "image",
                name: "others",
                label: "Otras imagenes",
                list: true
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true
          }
        ],
      },
    ],
  },
});

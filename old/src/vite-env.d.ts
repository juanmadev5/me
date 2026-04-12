/// <reference types="vite/client" />

declare module "*.env" {
    interface ImportMetaEnv {
      VITE_EJS_SERVICE_ID: string;
      VITE_EJS_TEMPLATE_ID: string;
      VITE_EJS_USER_ID: string;
    }
  
    interface ImportMeta {
      readonly env: ImportMetaEnv;
    }
  }
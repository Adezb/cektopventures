/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORM_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

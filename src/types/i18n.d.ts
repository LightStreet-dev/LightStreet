// src/types/i18n.d.ts
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: {
        header: {
          about: string;
          ourWorks: string;
          contact: string;
          contactButton: string;
        };
        hero: {
          heroTitle1: string;
          heroTitle2: string;
          heroTitle3: string;
          heroText: string;
          heroBtn: string;
        };
        formReply: {
          reply: string;
          title: string;
          velcome: string;
          signatureOne: string;
          signatureTwo: string;
        };
      };
    };
  }
}

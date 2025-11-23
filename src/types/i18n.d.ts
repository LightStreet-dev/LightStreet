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
          team:{
            karina:string,
            dmytro:string,
            alex:string
          }
        };
        formReply: {
          reply: string;
          title: string;
          velcome: string;
          signatureOne: string;
          signatureTwo: string;
        };
        ofers: {
          landingPage: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
          site: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
          store: {
            title: string;
            features: string[];
            price: string;
            timeTitle: string;
            time: string;
          };
        };
        additionalServises: {
          Optimisation: {
            svg: string;
            serviceName: string;
            info: string;
          };
          Redesign: {
            svg: string;
            serviceName: string;
            info: string;
          };
          Copywriting: {
            svg: string;
            serviceName: string;
            info: string;
          };
          Content: {
            svg: string;
            serviceName: string;
            info: string;
          };
          SEO: {
            svg: string;
            serviceName: string;
            info: string;
          };
          Support: {
            svg: string;
            serviceName: string;
            info: string;
          };
        };
        portfolio: {
          pageNanowo: {
            name: string;
            image: string;
            transcription: string;
          };
          pageBrig: {
            name: string;
            image: string;
            transcription: string;
          };
          pageLS: {
            name: string;
            image: string;
            transcription: string;
          };
        };
      };
      formTranslation: {
        formTitle:string;
        formPlaseholders: {
          name: string;
          company: string;
          telefon: string;
          email: string;
          text: string;
          agree: string;
        };
        errors:{
          error:string;
          min:string;
          max:string;
          maxText:string
          mail:string;
          onlyLetters:string
          phone:string
        },
        button:{
send:string,
sending:string
        }
      };
    };
  }
}

import s from "./ShortFormComponent.module.css"
import {  Form, Formik } from "formik";

// import { useRef } from "react";
// import { useTranslation } from "react-i18next";
import InputComponent from "../ContactForm/InputComponent/InputComponent";

type FormValue = {
  Name: string;
  Phone: string;
};

const ShortFormComponent:React.FC = () => {
    //  const formRef = useRef<HTMLFormElement>(null);
    // const { t } = useTranslation();
const initialValues: FormValue ={
     Name: "",
     Phone: "",
}

  return <div>

    <Formik
    initialValues={initialValues} 
      onSubmit={(values) => {
        console.log(values);
      }}
    >

{()=>(
    <Form >
      <div className={s.inputWrapper}>
<InputComponent labelClassName={s.labelStyle} altDesing={s.inputStyle} name="Name" as="input" type="text" />
<InputComponent labelClassName={s.labelStyle} altDesing={s.inputStyle} name="Phone" as="input" type="number" />
</div>
    </Form>
)


}

    </Formik>
  </div>;
};

export default ShortFormComponent;

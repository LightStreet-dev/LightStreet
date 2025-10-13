import { Field, Form, Formik } from "formik";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import InputComponent from "../ContactForm/InputComponent/InputComponent";

type FormValue = {
  Name: string;
  Phone: string;
};

const ShortFormComponent:React.FC = () => {
     const formRef = useRef<HTMLFormElement>(null);
    const { t } = useTranslation();
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
    <Form>
<InputComponent name="Name" as="input" type="text" />
<InputComponent name="Phone" as="input" type="number" />
    </Form>
)


}

    </Formik>
  </div>;
};

export default ShortFormComponent;

import * as Yup from 'yup'



const mainFormSchema = Yup.object().shape({
Name: Yup.string().required(),
Company: Yup.string(),
Phone: Yup.number().required(),
Email: Yup.string().required(),
Text: Yup.string(),
checkbox: Yup.boolean(),



})

export default mainFormSchema
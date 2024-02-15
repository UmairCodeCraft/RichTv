import * as Yup from "yup";
export const FormSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(22, "Name length is greater then  22 characters")
    .required("** Name field is required **"),
  email: Yup.string().email().required("** Email field is required **"),
  password: Yup.string()
    .min(8)
    .max(16)
    .required("** Password field is required **")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\[\]\+]).{8,}$/,
      "** Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character **"
    ),
  confirm_password: Yup.string()
    .required("** Confirm Password field is required **")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\[\]\+]).{8,}$/,
      "** Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character **"
    )
    .oneOf([Yup.ref("password"), null], "** Your Password not Match **"),
  message: Yup.string().required("** Message  field is required **").min(1),
  phone: Yup.string()
    .matches(/^\d+$/, "** Phone number must contain only digits **")
    .required("**  Phone field is required **")
    .min(10, "Phone Number must be at least 10 characters")
    .max(16),
  checkbox: Yup.boolean()
    .oneOf([true], "**Checkbox must be checked**")
    .required("**Checkbox field is required**"),
});

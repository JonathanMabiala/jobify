import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    return redirect("/login");
  } catch (error) {
    console.log(error);
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper className="">
      <Form method="post" className="form" action="">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <FormRow
            type="text"
            name="name"
            labelText="name"
            defaultValue="sam"
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue="smith"
          />
          <FormRow type="text" name="location" defaultValue="earth" />
          <FormRow type="email" name="email" defaultValue="sam@gmail.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
        </div>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;

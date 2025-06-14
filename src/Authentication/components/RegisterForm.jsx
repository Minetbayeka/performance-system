
import { Link } from "react-router-dom";
import { Button } from "../../features/admin/components/DashboardButton";


function RegistrationForm() {
  return (
    <>
      <form
      onSubmit={(e) => e.preventDefault()}
  
        className="flex flex-col gap-8 w-full p-8 lg:p-0"
      >
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-medium">Create an account</p>
          <p className="font-medium"> Enter your details below </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 text-sm  border-b-2 border-gray-400 w-full"
          />
          <input
            type="text "
            placeholder="Email or Phone Number "
            className="p-2 text-sm border-b-2 border-gray-400 w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-2  border-b-2 text-sm border-gray-400 w-full"
          />
        </div>

        <div className="flex flex-col gap-4">

          <Button
          title="Create Account"
                     
          />

          <Button
          
          title="Sign Up With Google"
        
          
          
          />
         
        </div>
        <p className="font-light text-center">
          Already have an account?
          <span className="font-normal">
            <Link to="/login">Log in </Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default RegistrationForm;

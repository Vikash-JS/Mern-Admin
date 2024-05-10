import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-scren mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left Side */}
        <div className="flex-1">
          <Link className="font-bold dark:text-white text-4xl" to="/">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Get Started
            </span>
          </Link>
          <p className="text-sm mt-5">
            Protopye CRM app for admin panel. Contact for more templates
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="User Name" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="name@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Username" id="password" />
            </div>
            <Button type="submit" gradientDuoTone="purpleToPink">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

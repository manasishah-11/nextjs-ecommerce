import { cn } from "@/lib/utils";
import { KeyRound, Mail, RotateCcwKey, UserRound } from "lucide-react";
import React from "react";
import { Checkbox } from "../ui/checkbox";

type SignupContentProps = {
  signUpChosen: boolean;
  toggleSignUp: (show: boolean) => void;
};

function SignupContent({ signUpChosen, toggleSignUp }: SignupContentProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-6 transition-opacity duration-300 ease-in-out",
        signUpChosen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <h2 className="text-[22px] font-semibold text-black">Signup</h2>
      <div className="flex flex-col gap-3">
        <div className="relative">
          <UserRound
            size={20}
            className="text-black/30 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            placeholder="Enter your name"
            className="rounded-full border border-transparent w-full py-2 pl-10 pr-6 focus:outline-none text-sm font-light bg-background focus:border"
          />
        </div>
        <div className="relative">
          <Mail
            size={20}
            className="text-black/30 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-full border border-transparent w-full py-2 pl-10 pr-6 focus:outline-none text-sm font-light bg-background focus:border"
          />
        </div>
        <div className="relative">
          <KeyRound
            size={20}
            className="text-black/30 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-full border border-transparent w-full py-2 pl-10 pr-6 focus:outline-none text-sm font-light bg-background focus:border"
          />
        </div>
        <div className="relative">
          <RotateCcwKey
            size={20}
            className="text-black/30 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="rounded-full border border-transparent w-full py-2 pl-10 pr-6 focus:outline-none text-sm font-light bg-background focus:border"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox />
          <label className="text-[13px] text-black/60 font-light">
            I accept the{" "}
            <a
              className="text-black hover:underline cursor-pointer"
              onClick={() => {
                /* Handle terms and conditions click */
              }}
            >
              Terms and Conditions
            </a>
          </label>
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <button className="bg-black text-white rounded-full py-2 hover:scale-[1.02] transition-transform duration-200">
            Submit
          </button>
          <h3 className="text-black/50 text-sm text-center">
            Already have an account?{" "}
            <a
              className="cursor-pointer text-black hover:scale-110 hover:underline transition-all duration-200"
              onClick={() => toggleSignUp(false)}
            >
              Login
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SignupContent;

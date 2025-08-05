import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { KeyRound, Mail } from "lucide-react";
import SignupContent from "./signup_content";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

type SigninModalProps = {
  openModal: boolean;
  toggleModal: (open: boolean) => void;
};

function SigninModal({ openModal, toggleModal }: SigninModalProps) {
  const [signUpChosen, setSignUpChosen] = useState(false);

  return (
    <Dialog open={openModal} onOpenChange={toggleModal}>
      <DialogContent className="w-[420px]">
        <DialogTitle className="[display:none]" />
        {signUpChosen ? (
          <SignupContent
            signUpChosen={signUpChosen}
            toggleSignUp={(show) => setSignUpChosen(show)}
          />
        ) : (
          <div
            className={cn(
              "w-full flex flex-col gap-6 transition-opacity duration-300 ease-in-out",
              signUpChosen
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            )}
          >
            <h2 className="text-[22px] font-semibold text-black">Login</h2>
            <div className="flex flex-col gap-3">
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
              <div className="flex flex-col">
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
                <div className="flex justify-end">
                  <h3 className="cursor-pointer text-black/50 text-[13px] font-light hover:text-black hover:text-sm transition-all duration-200">
                    Forgot password?
                  </h3>
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer group w-fit">
                <Checkbox className="peer" />
                <span className="text-[13px] text-black/60 font-light transition-colors duration-200 group-hover:text-black peer-hover:text-black peer-focus-visible:text-black">
                  Remember me
                </span>
              </label>
              <div className="flex flex-col gap-1 mt-3">
                <button className="bg-black text-white rounded-full py-2 hover:scale-[1.02] transition-transform duration-200">
                  Sign In
                </button>
                <h3 className="text-black/50 text-sm text-center">
                  Don&apos;t have an account?{" "}
                  <a
                    className="cursor-pointer text-black hover:scale-110 hover:underline transition-all duration-200"
                    onClick={() => setSignUpChosen(true)}
                  >
                    Signup
                  </a>
                </h3>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default SigninModal;

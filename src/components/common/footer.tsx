import { Facebook, Globe, Instagram, Mail } from "lucide-react";
import React from "react";
import Image from "next/image";

const payments = [
  { name: "Visa", src: "/visa.png" },
  { name: "MasterCard", src: "/mastercard.png" },
  { name: "Paypal", src: "/paypal.png" },
  { name: "ApplePay", src: "/applepay.png" },
  { name: "GPay", src: "/gpay.png" },
];

const company_links = [
  { name: "About", href: "#" },
  { name: "Features", href: "#" },
  { name: "Works", href: "#" },
  { name: "Career", href: "#" },
];

const help_links = [
  { name: "Customer Support", href: "#" },
  { name: "Delivery Details", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const faq_links = [
  { name: "Account", href: "#" },
  { name: "Manage Deliveries", href: "#" },
  { name: "Orders", href: "#" },
  { name: "Payments", href: "#" },
];

const resources_links = [
  { name: "Free eBooks", href: "#" },
  { name: "Development Tutorials", href: "#" },
  { name: "How to - Blog", href: "#" },
  { name: "Youtube Playlist", href: "#" },
];

const social_links = [
  {
    id: "instagram",
    link: "",
    icon: (
      <Instagram
        size={15}
        className="text-black group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "facebook",
    link: "",
    icon: (
      <Facebook
        size={15}
        className="text-black group-hover:text-white transition-colors duration-200"
      />
    ),
  },
  {
    id: "globe",
    link: "",
    icon: (
      <Globe
        size={15}
        className="text-black group-hover:text-white transition-colors duration-200"
      />
    ),
  },
];

function Footer() {
  return (
    <div
      id="gray"
      className="bg-background mt-20 relative flex justify-center px-4 py-12"
    >
      {/* newsletter */}
      <div
        id="black"
        className="absolute bg-black w-[1240px] p-10 left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 rounded-[20px]"
      >
        <div className="flex items-center gap-3">
          <div className="flex-grow">
            <h2 className="text-white text-3xl font-bold w-[500px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <Mail
                size={20}
                className="text-black/30 absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full w-[350px] py-2 pl-10 pr-6 focus:outline-none text-sm font-light bg-white"
              />
            </div>
            <button className="bg-white rounded-full px-6 py-2 text-black text-sm font-semibold hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="pt-16 w-[1240px] max-w-[1240px] flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 flex flex-col gap-3">
            <h2 className="text-black text-3xl font-bold">SHOP.CO</h2>
            <p className="text-[13px] text-black/50">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-2">
              {social_links.map((link) => (
                <button
                  key={link.id}
                  className="group cursor-pointer h-8 w-8 rounded-full bg-white border border-black/10 flex justify-center items-center hover:bg-black transition-all duration-200"
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-4 gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="text-black text-[16px] font-medium">COMPANY</h3>
              {company_links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black/50 text-[13px] font-light hover:text-black hover:font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-black text-[16px] font-medium">HELP</h3>
              {help_links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black/50 text-[13px] font-light hover:text-black hover:font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-black text-[16px] font-medium">FAQ</h3>
              {faq_links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black/50 text-[13px] font-light hover:text-black hover:font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-black text-[16px] font-medium">RESOURCES</h3>
              {resources_links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black/50 text-[13px] font-light hover:text-black hover:font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-[0.5] border-black/10" />
        <div className="flex justify-between items-center">
          <p className="text-[13px] text-black/50">{`Shop.co © ${new Date().getFullYear()}, All Rights Reserved`}</p>
          <div className="flex items-center gap-2">
            {payments.map((payment) => (
              <div
                key={payment.name}
                className="bg-white p-2 rounded-md shadow-sm flex items-center justify-center h-[30px] w-[46px]"
              >
                <Image
                  src={payment.src}
                  alt={payment.name}
                  width={46}
                  height={30}
                  className="h-auto w-auto aspect-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

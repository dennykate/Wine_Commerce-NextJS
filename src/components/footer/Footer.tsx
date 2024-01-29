"use client";

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import FooterLinksTitle from "./FooterLinksTitle";
import FooterLinks from "./FooterLinks";
import Search from "./FooterSearch";
import footerData from "@/data/footerData";

const Footer = () => {
  return (
    <section className="footer w-full flex flex-wrap md:gap-0 gap-4 bg-gray-200 md:py-0 py-16">
      <div
        className="left-section md:w-[30%] w-full md:bg-gray-100 bg-transparent px-3 md:py-16 py-0
      flex flex-wrap gap-5"
      >
        <div className="flex flex-col gap-8 md:w-full sm:w-1/2 w-full">
          <div className="w-[120px]">
            <Image
              src="/assets/images/logo_footer.png"
              alt="logo"
              width={1024}
              height={512}
            />
          </div>
          <p className="text-gray-600 text-sm">
            We specialise in delivery and supply of organic food products,
            produced by local farmers.
          </p>
          <div className="contact flex gap-2 items-center">
            <FiPhoneCall size={40} className="text-[#4FB68D]" />
            <div className="">
              <p className="uppercase text-gray-600">Need Help?</p>
              <p className="font-semibold text-[22px]">
                (+800) 345 678, (+800) 123 456
              </p>
            </div>
          </div>
          <div className="icons flex gap-5">
            {footerData.icons.map(({ Icon }, i) => (
              <button name="footer-icon" key={i} className="hover:text-[#4FB68D]">
                <Icon size={20} className="text-gray-600" />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Copyright © Posthemes. All Rights Reserved.
          </p>
        </div>

        <div className="md:hidden block sm:w-1/2 w-full sm:mt-0 mt-5">
          <div className="w-full py-2">
            <FooterLinksTitle title="Information" />
            <FooterLinks data={footerData.information} />
          </div>
        </div>
      </div>

      <div className="right-section md:w-[70%] w-full sm:pl-5 pl-3 md:py-16 py-0 flex flex-col gap-5">
        <div className="flex w-full gap-5 flex-wrap">
          <div className="w-[25%] md:flex hidden gap-5">
            <div className="w-full py-2">
              <FooterLinksTitle title="Information" />
              <FooterLinks data={footerData.information} />
            </div>
          </div>

          <div className="md:w-[25%] sm:w-1/2 w-full flex gap-5">
            <div className="w-full py-2">
              <FooterLinksTitle title="Contact Links" />
              <FooterLinks data={footerData.contactLinks} />
            </div>
          </div>

          <div className="md:w-[40%] sm:w-1/2 w-full flex gap-5">
            <div className="w-full py-2">
              <FooterLinksTitle title="Newsletter" />

              <div className="py-5 flex flex-col gap-5">
                <p className="text-gray-600 text-sm">
                  Sign up for our e-mail to get latest news.
                </p>
                <Search />
                <div className="flex gap-3 mt-3">
                  <div className="w-[180px]">
                    <Image
                      src="/assets/images/app_store.png"
                      alt=""
                      width={1024}
                      height={512}
                    />
                  </div>
                  <div className="w-[180px]">
                    <Image
                      src="/assets/images/google_play.png"
                      alt=""
                      width={1024}
                      height={512}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px]">
          <Image
            src="/assets/images/payment.png"
            alt=""
            width={1024}
            height={512}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

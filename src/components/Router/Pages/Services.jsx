import React from "react";
import Cards from "./Cards";
// import Adword from "./Card_img/adword.jpg";
import Facebook from "./Card_img/facebook.jpg";
import Istock from "./Card_img/Istock.jpg";
import IstockP from "./Card_img/istockP.jpg";
import Istockph from "./Card_img/Istockphoto.jpg";
import Place from "./Card_img/place.jpg";
import seo from "./Card_img/seo.jpg";
const S_data = [
  {
    img_src: IstockP,
    title: "Job sites",
    des: "We’ve all spent plenty of time looking through job sites. Many seem like an endless scroll with no clear organization. There is always a demand for quality job boards.",
  },
  {
    img_src: Facebook,
    title: "Facebook",
    des: "Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.",
  },
  {
    img_src: Istock,
    title: "Affiliate sites",
    des: "An affiliate website offers an online store of products and resources in a specific niche. Think of them as digital boutiques catering to the tastes and interests of a select demographic.",
  },
  {
    img_src: Istockph,
    title: "Membership websites",
    des: "If you’re already blogging, creating tutorials, or are thinking about launching an online course of your own, membership websites make it easy to get paid for what you create.",
  },
  {
    img_src: Place,
    title: " E-Learning Blog",
    des: "Many bloggers also sell products and services such as online courses, consulting sessions, books, and merch. A blog functions as a space to showcase one’s expertise and share knowledge.",
  },
  {
    img_src: seo,
    title: "Seo",
    des: "Almost every SEO practitioner knows about Google’s extraordinary emphasis, in recent years, on their search algorithms being ‘intuitive’.",
  },
];
const Services = () => {
  return (
    <>
      <div className="container">
        <section className="pt-4">
          <h1 className="text-center">Our Services</h1>
          <div className="row gy-4 py-4">
            {/* <Cards/> */}
            {S_data.map((ele, ind) => {
              return (
                <Cards img_src={ele.img_src} title={ele.title} des={ele.des} />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

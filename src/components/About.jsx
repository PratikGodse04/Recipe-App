import React from 'react'
import AboutCard from './AboutCard'

export default function About() {
  const obj={
    profesional:
      "As a professional chef, you constantly strive for perfection and innovation. Our platform is designed to support your creativity while offering reliable, structured recipes as a foundation. Whether you're crafting a new dish, training a team, or planning a fast-paced service, these recipes provide clarity and flexibility. You can scale portions, substitute ingredients, and modify techniques to suit your kitchens needs. The project also allows chefs to contribute their own creations and reach a broader audience. Its not just for beginners—its a space for culinary minds to collaborate, explore new trends, and simplify processes without compromising on quality or taste.",
    profesional1:
    "Efficiency and consistency are crucial in any professional kitchen. Our project provides recipe templates that help maintain both, while still leaving room for creative adjustments. Whether you're running a restaurant, hosting a workshop, or experimenting with fusion cuisine, these recipes offer structured guidance that saves time and effort. Each entry includes preparation steps, cook times, and plating ideas, making it easy to integrate into daily operations. It’s an ideal tool for chefs managing teams, designing menus, or teaching apprentices. By using this platform, you can standardize your workflow while delivering exceptional dishes that reflect your skill and innovation.",

    housewifes:
    "This project is perfect for housewives who want to cook tasty meals without spending hours in the kitchen or needing fancy skills. Each recipe is written in simple language, uses everyday ingredients, and includes easy-to-follow steps. Whether you're cooking for your kids, your partner, or just yourself, you'll find a variety of quick, budget-friendly dishes that your family will love. From breakfast to dinner, and even snacks and sweets, our recipes are practical and delicious. With this tool, cooking becomes less of a chore and more of a joyful, stress-free activity that brings warmth and love into your home.",

    boys:
    "Never cooked before? Don’t worry—we made this project just for you. It’s packed with beginner-friendly recipes that are super easy to follow, even if you've never boiled an egg. No complex words or confusing steps—just clear instructions and pictures to guide you. You’ll learn how to make basic meals, snacks, and even cool dishes you can share with friends. Cooking doesn’t have to be scary or boring. With our recipes, you’ll gain confidence in the kitchen and maybe even discover a new hobby. Start simple, eat better, and show yourself you can do more than just order takeout!"

    
  }
  return (
    <div className='container text-white d-flex justify-content-center flex-column mt-lg-3'>
      <div className='d-flex flex-column justify-content-center align-items-center '>
   <h1><span className='text-success'>Lets Try</span> <span>New Dishes</span> <span className='text-info'>With Us</span></h1>
   <p>We are here to help you in cooking . Provided more than 13 categories and more than 100 Dishes. </p>
      </div>
      <AboutCard image={"/public/images/about1.jpg"} content={obj.profesional} class={"flex-row-reverse"} styles={"#48A6A7"}/>
      <AboutCard image={"/public/images/about2.jpg"} content={obj.profesional1} class={"flex-row"} styles={"	#4D55CC"}/>
      <AboutCard image={"/public/images/about3.jpg"} content={obj.housewifes} class={"flex-row-reverse"}  styles={"#48A6A7"}/>
      <AboutCard image={"/public/images/about4.jpg"} content={obj.boys} class={"flex-row-row"} styles={"	#4D55CC"}/>

    </div>
  )
}


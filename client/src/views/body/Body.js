import React from "react";
import HomeComponent from "./home-page/home";
import AboutComponent from "./home-page/about";
import ServicesComponent from "./home-page/services";
import GalleryComponent from "./home-page/gallery";
import FeedbackComponent from "./home-page/feedback";
import ReservationComponent from "./home-page/reservation";
import FeedbackFormComponent from "./home-page/feedbackForm";
import Login from "./authentication-page/login";
import SignIn from "./authentication-page/signin";

const Body = () => {
    return (
        <div>
            <HomeComponent />
            <AboutComponent />
            <ServicesComponent />
            <ReservationComponent />
            <GalleryComponent />
            <FeedbackComponent />
            <FeedbackFormComponent />
            <Login />
            <SignIn />
        </div>
    );
}

export default Body;
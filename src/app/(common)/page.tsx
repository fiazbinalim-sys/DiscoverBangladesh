// import LoginWithGoogle from '@/components/LoginWithGoogle';

import HeroSection from '@/components/pages/home/Banner/Banner';
import EverythingYouNeed from '@/components/pages/home/EverythingYouNeed/EverythingYouNeed';
import FeaturedDistricts from '@/components/pages/home/FeaturedDistricts/FeaturedDistricts';
import FollowJourney from '@/components/pages/home/FollowJourney/FollowJourney';
import PartnerSection from '@/components/pages/home/PartnerSection/PartnerSection';
import TourPackages from '@/components/pages/home/TourPackages/TourPackages';
import React from 'react';
import MarqueeComponent from '../../components/pages/home/Marquee/Marquee';
import ChooseTravle from '@/components/pages/home/ChooseTravle/ChooseTravle';
import Offer from '@/components/pages/home/Offer/Offer';

const page = () => {
    return (
        <div >
         <HeroSection></HeroSection>
         <MarqueeComponent></MarqueeComponent>
         <FeaturedDistricts></FeaturedDistricts>
         <TourPackages></TourPackages>
         <PartnerSection></PartnerSection>
         <Offer></Offer>
         <ChooseTravle></ChooseTravle>
         <EverythingYouNeed></EverythingYouNeed>
         <FollowJourney></FollowJourney>
         
        </div>
    );
};

export default page;
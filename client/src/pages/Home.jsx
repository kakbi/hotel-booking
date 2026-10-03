import ExclusiveOffers from '../components/ExclusiveOffers';
import { FeatureDistination } from '../components/FeatureDistination';
import Hero from '../components/Hero';
import { NewsLetter } from '../components/NewsLetter';
import Testimonial from '../components/Testimonial';

function Home() {
    return (
        <>
            <Hero />
            <FeatureDistination />
            <ExclusiveOffers />
            <Testimonial />
            <NewsLetter />
        </>
    );
}

export default Home;

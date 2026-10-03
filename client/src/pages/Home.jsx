import ExclusiveOffers from '../components/ExclusiveOffers';
import { FeatureDistination } from '../components/FeatureDistination';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';

function Home() {
    return (
        <>
            <Hero />
            <FeatureDistination />
            <ExclusiveOffers />
            <Testimonial />
        </>
    );
}

export default Home;

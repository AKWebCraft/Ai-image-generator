import Hero from "../components/Hero";
import PricingCard from "../components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Hero
        heading="We got a plan for you!"
        text="Pay monthly or yearly and enjoy a 7 day free trial. Cancel whenever you feel like it - no fuss and no hoops."
      />
      <PricingCard />
    </div>
  );
};

export default Pricing;

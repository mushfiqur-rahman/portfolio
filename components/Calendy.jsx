// components/GetStartedButton.jsx
import { useEffect } from "react";

const Calendy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/mushfiq-kdu/30min", // Replace with your link
    });
    return false;
  };

  return <button onClick={openCalendly}>Book Now</button>;
};

export default Calendy;

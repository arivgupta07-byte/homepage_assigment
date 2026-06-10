import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      {/* Heading */}
      <div className="testimonials-head">
        <div className="green-pill"></div>

        <h2 className="testimonials-title">
          What our customer
          <br />
          says About Us
        </h2>

        <div className="yellow-line"></div>
      </div>

      {/* Floating circles */}

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>

      <div className="circle circle-5"></div>
      <div className="circle circle-6"></div>
      <div className="circle circle-7"></div>
      <div className="circle circle-8"></div>

      {/* Message Box */}

      <div className="message-box">
        <div className="quote quote-left">“</div>

        <p className="message-text">
          Elementum delivered the site within the timeline as requested.
          In the end, the client found a 50% increase in traffic within
          days since its launch. They also had an impressive ability to
          use technologies that the company hadn't used, which proved
          easy to use and reliable.
        </p>

        <div className="quote quote-right">”</div>
      </div>
    </section>
  );
}
import "./FeatureSection.css";

export default function FeatureSection() {
  return (
    <section className="features-wrapper">

      {/* Feature 1 */}
      <div className="feature-row">

        <div className="feature-content-left">

          <div className="relative inline-block">
            <div className="feature-highlight feature-highlight-1"></div>

            <h2 className="feature-title">
              Tomorrow should
              <br />
              be better than today
            </h2>
          </div>

          <p className="feature-description">
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <span className="text-[20px] font-medium">
              Read more
            </span>

            <div className="read-more-line"></div>
          </div>

        </div>

        <div className="feature-image">
          <img
            src="/feature1.png"
            alt="Feature 1"
          />
        </div>

      </div>

      {/* Feature 2 */}
      <div className="feature-row reverse">

        <div className="feature-image">
          <img
            src="/feature2.png"
            alt="Feature 2"
          />
        </div>

        <div className="feature-content-right">

          <div className="relative inline-block">
            <div className="feature-highlight feature-highlight-2"></div>

            <h2 className="feature-title">
              See how we can
              <br />
              help you progress
            </h2>
          </div>

          <p className="feature-description">
            We add a layer of fearless insights and action that
            allows change makers to accelerate their progress in
            areas such as brand, design digital, comms and social
            research.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <span className="text-[20px] font-medium">
              Read more
            </span>

            <div className="read-more-line"></div>
          </div>

        </div>

      </div>

    </section>
  );
}
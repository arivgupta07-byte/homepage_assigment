
import "./Hero.css";
export default function Hero() {
  return (
    <section
  style={{
    position: "relative",
    maxWidth: "1844px",
    width: "100%",
    minHeight: "1300px",
    margin: "0 auto",
  }}
>
      {/* Yellow Scribble */}
      <img
        src="/yellow-line.png"
        alt=""
        style={{
          position: "absolute",
          width: "594px",
          left: "666px",
          top: "333px",
        }}
      />

      {/* Pink Shape */}
      <div
        style={{
          position: "absolute",
          width: "405px",
          height: "137px",
          left: "1235px",
          top: "367px",
          background: "#FFC2EA",
          borderRadius: "100px",
        }}
      />

      {/* Green Shape */}
      <div
        style={{
          position: "absolute",
          width: "456px",
          height: "109px",
          left: "561px",
          top: "498px",
          background: "#D7EEDD",
          borderRadius: "100px",
        }}
      />

      {/* Main Heading */}
      <h1
        style={{
          position: "absolute",
          width: "1305px",
          height: "378px",
          left: "308px",
          top: "243px",
          fontFamily: "Gerbil",
          fontWeight: 400,
          fontSize: "100px",
          lineHeight: "126px",
          textAlign: "center",
          color: "#000",
          margin: 0,
          zIndex: 2,
        }}
      >
        The thinkers and
        <br />
        doers were changing
        <br />
        the status Quo with
      </h1>

      {/* Paragraph */}
      <p
        style={{
          position: "absolute",
          width: "831px",
          height: "72px",
          left: "545px",
          top: "648px",
          fontFamily: "Satoshi",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "36px",
          textAlign: "center",
          color: "#000",
          margin: 0,
        }}
      >
        We are a team of strategists, designers communicators,
        researchers. Together, we believe that progress only
        happens when you refuse to play things safe.
      </p>

      {/* Avatars */}
      <img src="/hero1.png" className="avatar avatar-1" />
      <img src="/hero2.png" className="avatar avatar-2" />
      <img src="/hero3.png" className="avatar avatar-3" />
      <img src="/hero4.png" className="avatar avatar-4" />
      <img src="/hero5.png" className="avatar avatar-5" />
      <img src="/hero6.png" className="avatar avatar-6" />
      <img src="/hero7.png" className="avatar avatar-7" />
      <img src="/hero8.png" className="avatar avatar-8" />
    </section>
  );
}
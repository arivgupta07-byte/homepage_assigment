export default function Services() {
  const services = [
    {
      label: "Office of multiple interest content",
      title: "Colaborative & partnership",
    },
    {
      label: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
    },
    {
      label: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
    },
  ];

  return (
    <section className="max-w-[1618px] w-full mx-auto mt-[250px] relative px-8">
      {/* Heading */}
      <div className="relative h-[316px]">
        {/* Green Pill */}
        <div className="absolute left-[430px] top-[24px] w-[262px] h-[92px] bg-[#D7EEDD] rounded-[100px]" />

        {/* Yellow Underline Image */}
        <img
          src="/Vector 5.png"
          alt=""
          className="absolute left-0 top-[180px] w-[371px]"
        />

        {/* Heading */}
        <h2
          className="relative z-10 w-[831px] text-[100px] leading-[116px] font-normal"
          style={{ fontFamily: "Gerbil" }}
        >
          What we can
          <br />
          offer you!
        </h2>
      </div>

      {/* Top Border */}
      <div className="border-t border-[#B1B1B1]" />

      {/* Services */}
      {services.map((service, index) => (
        <div
          key={index}
          className="relative h-[180px] border-b border-[#B1B1B1]"
        >
          {/* Left Label */}
          <p className="absolute left-0 top-[48px] max-w-[316px] text-[30px] leading-[42px] font-normal">
            {service.label}
          </p>

          {/* Service Title */}
          <h3
            className="absolute left-[500px] top-[20px] text-[56px] leading-[116px] font-normal"
            style={{ fontFamily: "Gerbil" }}
          >
            {service.title}
          </h3>

          {/* Third Row Circle Image */}
          {index === 2 && (
            <img
              src="/service-circle.png"
              alt=""
              className="absolute left-[1320px] top-[10px] w-[160px] h-[160px] rounded-full object-cover"
            />
          )}

          {/* Arrow */}
          <img
            src="/arrow.png"
            alt=""
            className="absolute right-0 top-[76px] w-[81px] h-auto"
          />
        </div>
      ))}
    </section>
  );
}
export default function Navbar() {
  const links = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav className="h-[100px] flex items-center justify-between px-[160px]">
      <h1
        className="text-[28px] font-normal"
        style={{ fontFamily: "Syne" }}
      >
        Elementum
      </h1>

      <ul className="hidden md:flex items-center gap-[64px]">
        {links.map((link) => (
          <li
            key={link}
            className="text-[18px] font-medium cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>

      <button className="text-3xl">
        ☰
      </button>
    </nav>
  );
}
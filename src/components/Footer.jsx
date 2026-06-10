export default function Footer() {
  return (
    <footer className="bg-[#D7EEDD] mt-[170px]">
      {/* Newsletter */}
      <div className="max-w-[904px] mx-auto text-center pt-32">
        <h2 className="text-[100px] leading-[116px]">
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="text-[24px] mt-6">
          To make your stay special and even more memorable
        </p>

        <button className="mt-8 w-[233px] h-[72px] bg-black text-white rounded-full text-[20px] font-bold">
          Subscribe Now
        </button>
      </div>

      {/* Divider */}
      <div className="max-w-[1600px] mx-auto border-t border-black mt-24"></div>

      {/* Footer Links */}
      <div className="max-w-[1600px] mx-auto py-24 grid grid-cols-4 gap-20">
        {/* Company */}
        <div>
          <h3 className="text-[22px] mb-8">Company</h3>

          <ul className="space-y-3 text-[20px]">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-[22px] mb-8">Terms & Policies</h3>

          <ul className="space-y-3 text-[20px]">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-[22px] mb-8">Follow Us</h3>

          <ul className="space-y-3 text-[20px]">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[22px] mb-8">Terms & Policies</h3>

          <p className="text-[20px] leading-[30px]">
            1498W Fluton Ste,
            <br />
            STE 2D
            <br />
            Chicago, IL 63867
            <br />
            <br />
            (123) 456789000
            <br />
            info@elementum.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[18px] pb-12">
        ©2022 Homey. All rights reserved
      </div>
    </footer>
  );
}
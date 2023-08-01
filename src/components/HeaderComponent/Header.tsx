import pokemonLogo from "../../assets/images/Logo.svg";

function Header() {
  return (
    <>
      <div className="relative h-[77px] w-screen bg-white">
        <div className="absolute inset-x-0 top-0 mt-[18px] text-center font-bold text-[24px]">
          TCG Marketplace
        </div>

        <div className="absolute top-[48px] left-1/2 transform -translate-x-1/2 transform z-10">
          <img src={pokemonLogo} alt="My SVG Icon" />
        </div>

        <div className="absolute top-[46px] left-1/2 transform -translate-x-1/2 transform w-[52px] h-[52px] bg-white rounded-full z-0"></div>
      </div>
    </>
  );
}

export default Header;

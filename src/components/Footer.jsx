import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3  ">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-x-7">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">buissness</li>
          <li className="link">how search works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">privacy</li>
          <li className="link">terms</li>
          <l className="link" i>
            setting...
          </l>
        </ul>
      </div>
    </footer>
  );
}

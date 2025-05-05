
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Мир дефектологии</h1>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="ghost">Главная</Button>
            </Link>
            <Link to="/types">
              <Button variant="ghost">Разновидности</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

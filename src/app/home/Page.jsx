import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signOut, useSession } from "next-auth/react";
import { useMediaQuery } from "react-responsive";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Logo } from "./Logo";

function NavBar() {
  const [session] = useSession();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-10" />
          <div className="hidden md:block">
            <Link to="/" className="ml-6 text-xl font-bold">
              Home
            </Link>
            <Link to="/about" className="ml-6 text-xl font-bold">
              About
            </Link>
            <Link to="/community" className="ml-6 text-xl font-bold">
              Communityy
            </Link>
          </div>
        </div>
        <div className="flex md:hidden">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaBars />}
              onClick={() => setShowMenu(!showMenu)}
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
              <MenuItem onClick={() => navigate("/community")}>
                Community
              </MenuItem>
              {session ? (
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              ) : (
                <MenuItem onClick={signIn}>Sign In</MenuItem>
              )}
            </MenuList>
          </Menu>
        </div>
        <div className="flex md:hidden">
          {session ? (
            <button onClick={handleSignOut} className="ml-6 text-xl font-bold">
              Sign Out
            </button>
          ) : (
            <button onClick={signIn} className="ml-6 text-xl font-bold">
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

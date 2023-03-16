import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Menu } from "@headlessui/react";


const Navbar = (props) => {
  const [menuComptoirItems, setMenuComptoirItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.comptoir-veveyse.ch/wp-json/wp-api-menus/v2/menus/18")
      .then((response) => {
        setMenuComptoirItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { handleSubmenuClick } = props;

  return (
    <>
      <nav>
        <ul className="menu">
          {menuComptoirItems.map((menu, index) => {
            return (
              <li className={`menu-items ${menu.classes}`} key={index}>
                {menu.children ? (
                  <Menu>
                    <Menu.Button>{menu.title}</Menu.Button>
                    <Menu.Items className="submenu">
                      {menu.children.map((submenu, index) => {
                        return (
                          <Menu.Item
                            className="submenu-items"
                            key={index}
                          >
                            <Link
                              href={submenu.url.replace(
                                "https://admin.comptoir-veveyse.ch",
                                ""
                              )}
                              onClick={handleSubmenuClick}
                            >
                              {submenu.title}
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link
                    href={menu.url.replace(
                      "https://admin.comptoir-veveyse.ch",
                      ""
                    )}
                    onClick={handleSubmenuClick}
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

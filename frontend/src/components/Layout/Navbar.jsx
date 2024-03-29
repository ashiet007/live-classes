import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const NAV_MENU = [
  {
    name: "Classes",
    icon: RectangleStackIcon,
    href: "/classes",
  },
  {
    name: "Tutors",
    icon: UserCircleIcon,
  },
  {
    name: "Tutions and fees",
    icon: CommandLineIcon,
    href: "https://www.material-tailwind.com/docs/react/installation",
  },
];

function NavItem({ children, href }) {
  return (
    <li>
      <Link href={href ? href : "#"}>
        <Typography
          variant="paragraph"
          color="gray"
          className="flex items-center gap-2 font-medium text-gray-900"
          placeholder={"Navbar"}
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50"
      placeholder={"Navbar"}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Typography
            color="blue-gray"
            className="text-lg font-bold"
            placeholder={"Logo"}
          >
            Live Classes
          </Typography>
        </Link>

        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        {session ? (
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="text" placeholder={"SignIn"}>
              Welcome! User
            </Button>

            <Button
              color="gray"
              placeholder={"blocks"}
              onClick={(e) => {
                signOut();
              }}
            >
              Sign out
            </Button>
          </div>
        ) : (
          <div className="hidden items-center gap-2 lg:flex">
            <Link href={"/login"}>
              <Button variant="text" placeholder={"SignIn"}>
                Sign In
              </Button>
            </Link>

            <Link href={"/signup"}>
              <Button color="gray" placeholder={"blocks"}>
                SignUp
              </Button>
            </Link>
          </div>
        )}

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder={"menu"}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          {session ? (
            <div className="mt-6 mb-4 flex items-center gap-2">
              <Link href={"/login"}>
                <Button variant="text" placeholder={"SignIn"}>
                  Welcome! user
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button color="gray" placeholder={"blocks"}>
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <div className="mt-6 mb-4 flex items-center gap-2">
              <Link href={"/login"}>
                <Button variant="text" placeholder={"SignIn"}>
                  Sign In
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button color="gray" placeholder={"blocks"}>
                  SignUp
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

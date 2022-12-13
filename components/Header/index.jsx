import Link from "next/link";
import logo from "../../public/1.webp";
import Image from "next/image";

import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <header aria-label="Site Header" className="bg-transparent fixed w-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              className="flex text-secondary md:text-title font-serif text-xl  gap-1"
              href="/"
            >
              B <p className="font-sans">&</p> A
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link
                    className={
                      currentPage === "/"
                        ? "px-2 py-1 text-primary   underline underline-offset-8 font-bold "
                        : "px-2 py-1 text-primary "
                    }
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      currentPage === "/productos"
                        ? "px-2 py-1 text-primary   underline underline-offset-8 font-bold "
                        : "px-2 py-1 text-primary "
                    }
                    href="/productos"
                  >
                    Productos
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      currentPage === "/nosotros"
                        ? "px-2 py-1 text-primary   underline underline-offset-8 font-bold"
                        : "px-2 py-1 text-primary "
                    }
                    href="/nosotros"
                  >
                    Nosotros
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      currentPage === "/contacto"
                        ? "px-2 py-1 text-primary   underline underline-offset-8 font-bold "
                        : "px-2 py-1 text-primary "
                    }
                    href="/contacto"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="block md:hidden">
              <button className="rounded  p-2 text-primary transition hover:text-primary">
                <svg
                  width="24"
                  height="13"
                  viewBox="0 0 24 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.362624 1.5V0.5H24V1.5V2.5H0.362624V1.5Z"
                    fill="#e7b09c"
                  />
                  <path
                    d="M0.362624 11.5C0.362624 10.9477 -0.45328 10.5 0.362624 10.5H24V11.5V12.5H0.362624C-0.45328 12.5 0.362624 12.0523 0.362624 11.5Z"
                    fill="#e7b09c"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

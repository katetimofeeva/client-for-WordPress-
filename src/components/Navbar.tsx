"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const menu = [
  // {
  //   label: "clients",
  //   href: "/clients",
  // },
  {
    label: "products",
    href: "/products",
  },
  {
    label: "projects",
    href: "/projects",
  },
];

interface MenuItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="p-3 fixed bg-lime-100 font-bold w-full">
        <nav className="flex justify-between items-center ">
          <Link href="/">HOME</Link>
          <div className="md:hidden ">
            <Image
              src="/icon/menu.svg"
              alt="Icon"
              className="w-6 h-6"
              width={24}
              height={24}
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="hidden md:flex">
            {menu.map(({ label, href }: MenuItem) => {
              return (
                <Link
                  key={label}
                  href={href}
                  className="mx-4 sm:text-sx md:text-lg "
                >
                  {label.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      {open && (
        <div className="absolute flex flex-col right-0 top-12 bg-lime-100 w-64 ">
          {menu.map(({ label, href }: MenuItem) => {
            return (
              <Link
                key={label}
                href={href}
                className="mx-4 sm:text-sx md:text-lg text-center py-4"
                onClick={() => setOpen(!open)}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;

// SELECT wp_posts.ID,
//        postmeta_name.meta_key AS client_name_key, postmeta_name.meta_value AS client_name_value,
//        postmeta_photo.meta_key AS client_photo_key, postmeta_photo.meta_value AS client_photo_value,
// 	   wp_uploads.guid AS client_photo_url,
// 	   postmeta_email.meta_key AS client_email_key, postmeta_email.meta_value AS client_email_value
// FROM wp_posts
// LEFT JOIN wp_postmeta AS postmeta_name ON wp_posts.ID = postmeta_name.post_id
// AND postmeta_name.meta_key = 'client_name'
// LEFT JOIN wp_postmeta AS postmeta_photo ON wp_posts.ID = postmeta_photo.post_id
// AND postmeta_photo.meta_key = 'client_photo'
// LEFT JOIN wp_postmeta AS postmeta_email ON wp_posts.ID = postmeta_email.post_id
// AND postmeta_email.meta_key = 'contact_email'
// LEFT JOIN wp_posts AS wp_uploads ON wp_uploads.ID = postmeta_photo.meta_value AND wp_uploads.post_type = 'attachment'
// WHERE postmeta_name.meta_key IS NOT NULL
// AND postmeta_photo.meta_key IS NOT NULL
// AND postmeta_email.meta_key IS NOT NULL;

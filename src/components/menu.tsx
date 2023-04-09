import { useEffect, useState } from "react";
import Link from "next/link";

export default function Menu() {
  const menus = [
    { name: "Home", url: "/" },
    { name: "Client Side Rendering", url: "/csr" },
    { name: "Server Side Rendering", url: "/ssr" },
  ];
  return (
    <div>
      <ul>
        {menus.map((menu) => (
          <li key={menu.name}>
            <Link href={menu.url}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

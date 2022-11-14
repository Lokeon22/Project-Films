import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";

export function Home() {
  return (
    <section className="w-full h-full">
      <Menu />
      <Card />
    </section>
  );
}

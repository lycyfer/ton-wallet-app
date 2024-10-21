"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { connector } from "./connector";


export default function Home() {

  console.log(connector)

  useEffect(() => {
    connector.restoreConnection()
  }, [])

  return (
    <TonConnectUIProvider manifestUrl="https://github.com/lycyfer/ton-wallet-app/blob/main/tonconnect-manifest.json">
      <main>
        <div>Auth will be here</div>
      </main>
    </TonConnectUIProvider>
  );
}

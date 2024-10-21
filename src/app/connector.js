import TonConnect from "@tonconnect/sdk";
import dynamic from "next/dynamic";



const dappMetadata = {
    manifestUrl: 'https://github.com/lycyfer/ton-wallet-app/blob/main/tonconnect-manifest.json'
}

const TonConnectSDK = dynamic(() => import('@tonconnect/sdk').then(mod => mod.TonConnect), {
    ssr: false
})
console.log(TonConnectSDK)
// export const connector = new TonConnect(dappMetadata)

export const connector = typeof window !== 'undefined' ? new TonConnectSDK.TonConnect(dappMetadata) : null
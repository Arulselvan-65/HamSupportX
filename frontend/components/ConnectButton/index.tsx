'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from '../Button';
import Image from "next/image";
import wallet_icon from "@/assets/wallet-icon.png";

const ConnectButtonC = () => {
    return (
        <div>
            <ConnectButton.Custom>
                {({
                      account,
                      chain,
                      openAccountModal,
                      openConnectModal,
                      openChainModal,
                      mounted,
                  }) => {
                    const ready = mounted;
                    const connected = ready && account && chain;

                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                style: {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <Button onclick={openConnectModal} text={"Connect Wallet"}/>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button onClick={openChainModal} type="button">
                                            Wrong network
                                        </button>
                                    );
                                }

                                return (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <button
                                            onClick={openAccountModal}
                                            type="button"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <div
                                                className='flex items-center justify-center rounded-lg text-gray-200 bg-gray-800 w-40 px-1 h-[51px] text-[18px]'>
                                                <div className='flex w-12 items-center justify-start'>
                                                    <Image src={wallet_icon}
                                                           style={{height: "35px", width:"35px"}} alt={"wallet-icon"}/>

                                                </div>
                                                {account.displayName}
                                            </div>
                                        </button>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
        </div>
    );
};

export default ConnectButtonC;

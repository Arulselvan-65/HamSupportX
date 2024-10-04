import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    arbitrumSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'HamSupportX',
    projectId: '11e0fa8fea92c93f48493a5cdfffec59',
    chains: [arbitrumSepolia],
    ssr: true,
});

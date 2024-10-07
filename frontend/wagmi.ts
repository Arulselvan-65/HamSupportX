import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    arbitrumSepolia
} from 'wagmi/chains';

const project_id = process.env.RAINBOW_PROJECT_ID
export const config = getDefaultConfig({
    appName: 'HamSupportX',
    projectId: `${project_id}` || '',
    chains: [arbitrumSepolia],
    ssr: true,
});

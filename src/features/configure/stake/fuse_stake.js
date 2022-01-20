import { govPoolABI } from '../abi';

export const fuseStakePools = [
  {
    id: 'moo_fusefi-wfuse-usdc-fuse',
    name: 'Fuse',
    assets: ['USDC', 'FUSE'],
    token: 'mooFuseFiUSDC-FUSE',
    tokenDecimals: 18,
    tokenAddress: '0x98d3913474fccEDeB63077237914be00202fB007',
    tokenOracle: 'lps',
    tokenOracleId: 'fusefi-wfuse-usdc',
    earnedToken: 'mooFuse',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x2C43DBef81ABa6b95799FD2aEc738Cd721ba77f3',
    earnContractAddress: '0x405EE7F4f067604b787346bC22ACb66b06b15A4B',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WFUSE',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1644834178,
    partners: [
      {
        logo: 'stake/fuse/logo.png',
        background: 'stake/fuse/bg.png',
        text: 'Fuse is a platform featuring a fast and low-cost, Ethereum-compatible blockchain, a robust plug-and-play mobile-centric crypto payments infrastructure for creating token-based applications and a rapidly growing ecosystem of payments, decentralized finance and NFT projects.',
        website: 'https://www.fuse.io',
        social: {
          telegram: 'https://t.me/fuseio',
          twitter: 'https://twitter.com/Fuse_network',
        },
      },
    ],
  },
];

import { govPoolABI } from '../abi';

export const cronosStakePools = [
  {
    id: 'moo_vvs-cro-btc-liquidus',
    name: 'Liquidus',
    assets: ['CRO', 'WBTC'],
    token: 'mooVvsCRO-BTC',
    tokenDecimals: 18,
    tokenAddress: '0x25DE69dA4469A96974FaE79d0C41366A63317FDC',
    tokenOracle: 'lps',
    tokenOracleId: 'vvs-cro-btc',
    earnedToken: 'LIQ',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xABd380327Fe66724FFDa91A87c772FB8D00bE488',
    earnContractAddress: '0xF424488CD9213b6Fd83F63C2BdCA8B0492b2a9a5',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'LIQ',
    partnership: true,
    status: 'active',
    isMooStaked: true,
    periodFinish: 1641545215,
    partners: [
      {
        logo: 'stake/liquidus/logo.png',
        background: 'stake/liquidus/bg.png',
        text: 'Liquidus is a practical tool that will allow you to easily stake your crypto assets on leading DeFi platforms. We’ll bring the rapidly expanding Decentralized Finance (DeFi) ecosystem to the masses, breaking complicated processes down through easy-to-use, simplistic interfaces. We’re here to change how people think about DeFi and our much-anticipated web and mobile application is planned for launch in Q1 of 2022.',
        website: 'https://farm.liquidus.finance/',
        social: {
          telegram: 'https://t.me/liquidusfinance',
          twitter: 'https://twitter.com/LiquidusFinance',
        },
      },
    ],
  },
];

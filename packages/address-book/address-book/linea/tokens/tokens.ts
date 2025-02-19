import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const ETH = {
  name: 'Wrapped Ether',
  address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
  symbol: 'WETH',
  oracleId: 'WETH',
  decimals: 18,
  chainId: 59144,
  website: 'https://weth.io/',
  description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
  bridge: 'linea-canonical',
  logoURI: 'https://arbiscan.io/token/images/weth_28.png',
  documentation: 'https://ethereum.org/en/developers/docs/',
} as const;

const _tokens = {
  ETH,
  WNATIVE: ETH,
  WETH: ETH,
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    oracleId: 'USDC',
    address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    chainId: 59144,
    decimals: 6,
    website: 'https://www.circle.com/usdc',
    documentation: 'https://developers.circle.com/docs',
    description:
      'USDC (Multichain) is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    logoURI:
      'https://tokens.pancakeswap.finance/images/0xB12BFcA5A55806AaF64E99521918A4bf0fC40802.svg',
    bridge: 'linea-canonical',
  },
  USDT: {
    name: 'USDT',
    symbol: 'USDT',
    oracleId: 'USDT',
    address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    chainId: 59144,
    decimals: 6,
    website: 'https://tether.to/',
    documentation: 'https://tether.to/en/how-it-works',
    description:
      'Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold. Tether is the first stablecoin to be created and it is the most popular stablecoin used in the ecosystem.',
    logoURI: 'https://hecoinfo.com/token/images/USDTHECO_32.png',
    bridge: 'linea-canonical',
  },
  DAI: {
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    oracleId: 'DAI',
    address: '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
    chainId: 59144,
    decimals: 18,
    website: 'https://makerdao.com/',
    documentation: 'https://docs.makerdao.com/',
    description:
      'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    bridge: 'linea-canonical',
  },
  WBTC: {
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    oracleId: 'WBTC',
    address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
    chainId: 59144,
    decimals: 8,
    website: 'https://wbtc.network/',
    description:
      'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    bridge: 'linea-canonical',
  },
  wstETH: {
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    oracleId: 'wstETH',
    address: '0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F',
    chainId: 59144,
    decimals: 18,
    website: 'https://lido.fi/',
    documentation: 'https://docs.lido.fi/',
    description:
      'Lido is a liquid staking solution for ETH backed by industry-leading staking providers. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending. Lido attempts to solve the problems associated with initial ETH staking - illiquidity, immovability and accessibility - making staked ETH liquid and allowing for participation with any amount of ETH to improve security of the Ethereum network.',
    logoURI: '',
    bridge: 'linea-canonical',
  },
  MENDI: {
    name: 'MENDI',
    symbol: 'MENDI',
    oracleId: 'MENDI',
    address: '0x43E8809ea748EFf3204ee01F08872F063e44065f',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://mendi.finance/',
    description:
      'MENDI is the reward token of Mendi Finance, a lending/borrowing protocol on Linea forked from Compound V2.',
    documentation: 'https://docs.mendi.finance/',
    bridge: 'native',
  },
  LYNX: {
    name: 'Lynex Token',
    symbol: 'LYNX',
    oracleId: 'LYNX',
    address: '0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.lynex.fi/',
    description:
      'Lynex democratizes sophisticated liquidity strategies, seamlessly connecting everyday traders with expert-level capabilities. Our platform features a competitive ecosystem of Automated Liquidity Managers (ALMs) and strategists, all striving to optimize returns, minimize risks like impermanent loss, and boost overall efficiency for every user.',
    documentation: 'https://lynex.gitbook.io/lynex-docs/protocol-overview/about-lynex',
    bridge: 'native',
    risks: ['NO_TIMELOCK'],
  },
  oLYNX: {
    name: 'Option LYNX Token',
    symbol: 'oLYNX',
    oracleId: 'oLYNX',
    address: '0x63349BA5E1F71252eCD56E8F950D1A518B400b60',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.lynex.fi/',
    description:
      'Lynex democratizes sophisticated liquidity strategies, seamlessly connecting everyday traders with expert-level capabilities. Our platform features a competitive ecosystem of Automated Liquidity Managers (ALMs) and strategists, all striving to optimize returns, minimize risks like impermanent loss, and boost overall efficiency for every user.',
    documentation: 'https://lynex.gitbook.io/lynex-docs/protocol-overview/about-lynex',
    bridge: 'native',
  },
  MAI: {
    name: 'Mai Stablecoin',
    symbol: 'MAI',
    oracleId: 'MAI',
    address: '0xf3B001D64C656e30a62fbaacA003B1336b4ce12A',
    chainId: 59144,
    decimals: 18,
    logoURI: '',
    website: 'https://www.mai.finance/',
    description:
      "MAI is a stablecoin collateralized by your crypto holdings. It's powered by Qi Dao, a protocol that enables any cryptocurrency community to create stablecoins backed by their native tokens.",
    documentation: 'https://docs.mai.finance/',
    bridge: 'native',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;

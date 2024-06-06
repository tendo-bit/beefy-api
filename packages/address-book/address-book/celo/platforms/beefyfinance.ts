const zeroAddress = '0x0000000000000000000000000000000000000000';
const hw = '0x3Eb7fB70C03eC4AEEC97C6C6C1B59B014600b7F7';

export const beefyfinance = {
  devMultisig: zeroAddress,
  treasuryMultisig: zeroAddress,
  strategyOwner: '0x5B96bbAca98D777cb736dd89A519015315E00D02',
  vaultOwner: '0x8B157c6DAeC439b447337A2F08ef055F5182B817',
  keeper: '0x4fED5491693007f0CD49f4614FFC38Ab6A04B619',
  treasurer: hw,
  launchpoolOwner: hw,
  rewardPool: '0x2D250016E3621CfC50A0ff7e5f6E34bbC6bfE50E',
  treasury: '0xd9F2Da642FAA1307e4F70a5E3aC31b9bfe920eAF',
  beefyFeeRecipient: '0x32C82EE8Fca98ce5114D2060c5715AEc714152FB',
  multicall: '0xa9E6E271b27b20F65394914f8784B3B860dBd259',
  bifiMaxiStrategy: '0xF2f8c64691E0Be88535388675C01a58E8557D0E8',
  voter: '0x5e1caC103F943Cd84A1E92dAde4145664ebf692A',
  beefyFeeConfig: '0x2840463Ea288c26B66E24f92E8C704e1aB6b095c',
  vaultFactory: '0x70127945067E4224d7B6ABfDc6f57e3ea45d5CA4',
} as const;

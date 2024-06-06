const getUniV3PositionPrices = require('../common/getUniV3PositionPrices');
const pools = require('../../../data/ethereum/uniswapLpPools.json');

const getUniswapPositionPrices = async tokenPrices => {
  const params = {
    pools: pools,
    tokenPrices: tokenPrices,
    chainId: 1,
    beefyHelper: '0x70FcD79981f16277513030400a1f9fBc32A64C83',
    nftManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  };

  return await getUniV3PositionPrices(params);
};

module.exports = getUniswapPositionPrices;

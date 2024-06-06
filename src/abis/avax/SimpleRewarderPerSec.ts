const SimpleRewarderPerSec = [
  {
    type: 'constructor',
    stateMutability: 'nonpayable',
    inputs: [
      {
        type: 'address',
        name: '_rewardToken',
        internalType: 'contract IERC20',
      },
      {
        type: 'address',
        name: '_lpToken',
        internalType: 'contract IERC20',
      },
      {
        type: 'uint256',
        name: '_tokenPerSec',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: '_MCJ',
        internalType: 'contract IMasterChefJoe',
      },
      {
        type: 'bool',
        name: '_isNative',
        internalType: 'bool',
      },
    ],
  },
  {
    type: 'event',
    name: 'OnReward',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        type: 'address',
        name: 'previousOwner',
        internalType: 'address',
        indexed: true,
      },
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardRateUpdated',
    inputs: [
      {
        type: 'uint256',
        name: 'oldRate',
        internalType: 'uint256',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'newRate',
        internalType: 'uint256',
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'contract IMasterChefJoe',
      },
    ],
    name: 'MCJ',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'balance',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'claimOwnership',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'emergencyWithdraw',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    name: 'isNative',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'contract IERC20',
      },
    ],
    name: 'lpToken',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'onJoeReward',
    inputs: [
      {
        type: 'address',
        name: '_user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: '_lpAmount',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    name: 'owner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    name: 'pendingOwner',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'pending',
        internalType: 'uint256',
      },
    ],
    name: 'pendingTokens',
    inputs: [
      {
        type: 'address',
        name: '_user',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'accTokenPerShare',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'lastRewardTimestamp',
        internalType: 'uint256',
      },
    ],
    name: 'poolInfo',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'contract IERC20',
      },
    ],
    name: 'rewardToken',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'setRewardRate',
    inputs: [
      {
        type: 'uint256',
        name: '_tokenPerSec',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    name: 'tokenPerSec',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [],
    name: 'transferOwnership',
    inputs: [
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
      },
      {
        type: 'bool',
        name: 'direct',
        internalType: 'bool',
      },
      {
        type: 'bool',
        name: 'renounce',
        internalType: 'bool',
      },
    ],
  },
  {
    type: 'function',
    stateMutability: 'nonpayable',
    outputs: [
      {
        type: 'tuple',
        name: 'pool',
        internalType: 'struct SimpleRewarderPerSec.PoolInfo',
        components: [
          {
            type: 'uint256',
            name: 'accTokenPerShare',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'lastRewardTimestamp',
            internalType: 'uint256',
          },
        ],
      },
    ],
    name: 'updatePool',
    inputs: [],
  },
  {
    type: 'function',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'rewardDebt',
        internalType: 'uint256',
      },
    ],
    name: 'userInfo',
    inputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'receive',
    stateMutability: 'payable',
  },
] as const;

export default SimpleRewarderPerSec;

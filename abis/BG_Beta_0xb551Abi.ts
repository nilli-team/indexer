export const BG_Beta_0xb551Abi = [
  { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "neededRole", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "InvalidInitialization", type: "error" },
  { inputs: [], name: "NotInitializing", type: "error" },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collective",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "exitRound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winningPct",
        type: "uint256",
      },
    ],
    name: "DistributeCollectiveWinnings",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "season",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prizePool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "distributedPool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    name: "DistributeSeason",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "season",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "IncreasePrizePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collective",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "season",
        type: "uint256",
      },
    ],
    name: "OracleExitRoundVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isVerified",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "season",
        type: "uint256",
      },
    ],
    name: "OracleWinningsVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "buyAndSell",
        type: "bool",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "fan", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "collective",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "voteAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fanVotes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collective",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fanbase",
        type: "string",
      },
    ],
    name: "SetCollectiveFanbase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "poolPct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collectivePct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolPct",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "protocolDestination",
        type: "address",
      },
    ],
    name: "SetFeeStructure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "fan", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "collective",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "isBuy", type: "bool" },
      {
        indexed: false,
        internalType: "uint256",
        name: "voteAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fanVotes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        components: [
          { internalType: "uint256", name: "base", type: "uint256" },
          { internalType: "uint256", name: "protocolFee", type: "uint256" },
          { internalType: "uint256", name: "collectiveFee", type: "uint256" },
          { internalType: "uint256", name: "poolFee", type: "uint256" },
          { internalType: "uint256", name: "totalFee", type: "uint256" },
          { internalType: "uint256", name: "total", type: "uint256" },
          { internalType: "uint256", name: "perVote", type: "uint256" },
        ],
        indexed: false,
        internalType: "struct BG_Beta.FullPrice",
        name: "price",
        type: "tuple",
      },
    ],
    name: "Trade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "fan", type: "address" },
      {
        indexed: true,
        internalType: "address",
        name: "collective",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "voteAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fanVotes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fanSender",
        type: "address",
      },
    ],
    name: "TransferVotes",
    type: "event",
  },
  {
    inputs: [],
    name: "CLAIMER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MANAGER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORACLE_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "fan", type: "address" },
      { internalType: "address", name: "collective", type: "address" },
    ],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "maxValue", type: "uint256" },
    ],
    name: "buyVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "collectives",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "supply", type: "uint256" },
      { internalType: "uint256", name: "burnt", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentSeason",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "curveDenominator",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "_collectives", type: "address[]" }],
    name: "distributeSeasonWinnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeStructure",
    outputs: [
      { internalType: "uint256", name: "poolPct", type: "uint256" },
      { internalType: "uint256", name: "collectivePct", type: "uint256" },
      { internalType: "uint256", name: "protocolPct", type: "uint256" },
      { internalType: "address", name: "protocolDestination", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "getBuyPrice",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "base", type: "uint256" },
          { internalType: "uint256", name: "protocolFee", type: "uint256" },
          { internalType: "uint256", name: "collectiveFee", type: "uint256" },
          { internalType: "uint256", name: "poolFee", type: "uint256" },
          { internalType: "uint256", name: "totalFee", type: "uint256" },
          { internalType: "uint256", name: "total", type: "uint256" },
          { internalType: "uint256", name: "perVote", type: "uint256" },
        ],
        internalType: "struct BG_Beta.FullPrice",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "getRedeemPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "getSellPrice",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "base", type: "uint256" },
          { internalType: "uint256", name: "protocolFee", type: "uint256" },
          { internalType: "uint256", name: "collectiveFee", type: "uint256" },
          { internalType: "uint256", name: "poolFee", type: "uint256" },
          { internalType: "uint256", name: "totalFee", type: "uint256" },
          { internalType: "uint256", name: "total", type: "uint256" },
          { internalType: "uint256", name: "perVote", type: "uint256" },
        ],
        internalType: "struct BG_Beta.FullPrice",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "increasePrizePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_stableCoin", type: "address" }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prizePool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "round", type: "uint256" },
    ],
    name: "receiveVerifiedCollectiveExitRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "isVerified", type: "bool" }],
    name: "receiveVerifiedTotalWinnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "redeemVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "callerConfirmation", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seasonNow",
    outputs: [
      {
        components: [
          { internalType: "bool", name: "isDistributed", type: "bool" },
          { internalType: "bool", name: "isVerified", type: "bool" },
          { internalType: "uint256", name: "startBlock", type: "uint256" },
          { internalType: "uint256", name: "endBlock", type: "uint256" },
          { internalType: "uint256", name: "prizePool", type: "uint256" },
          { internalType: "uint256", name: "distributedPool", type: "uint256" },
          { internalType: "uint256", name: "roundsN", type: "uint256" },
          {
            internalType: "uint256[]",
            name: "winningBreakdown",
            type: "uint256[]",
          },
        ],
        internalType: "struct BG_Beta.SeasonView",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "seasons",
    outputs: [
      { internalType: "bool", name: "isDistributed", type: "bool" },
      { internalType: "bool", name: "isVerified", type: "bool" },
      { internalType: "uint256", name: "startBlock", type: "uint256" },
      { internalType: "uint256", name: "endBlock", type: "uint256" },
      { internalType: "uint256", name: "prizePool", type: "uint256" },
      { internalType: "uint256", name: "distributedPool", type: "uint256" },
      { internalType: "uint256", name: "roundsN", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collective", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "minValue", type: "uint256" },
    ],
    name: "sellVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "_collectives", type: "address[]" },
      { internalType: "string[]", name: "fanbases", type: "string[]" },
    ],
    name: "setCollectivesFanbases",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_denominator", type: "uint256" }],
    name: "setCurve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "poolPct", type: "uint256" },
      { internalType: "uint256", name: "collectivePct", type: "uint256" },
      { internalType: "uint256", name: "protocolPct", type: "uint256" },
      { internalType: "address", name: "protocolDestination", type: "address" },
    ],
    name: "setFeeStructure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_season", type: "uint256" },
      { internalType: "uint256", name: "roundsN", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "winningBreakdown",
        type: "uint256[]",
      },
    ],
    name: "setSeason",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_stableCoin", type: "address" }],
    name: "setStableCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "setPause", type: "bool" }],
    name: "setTxPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stableCoin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "_collectives", type: "address[]" },
      { internalType: "address[]", name: "_receivers", type: "address[]" },
      { internalType: "uint256[]", name: "_amounts", type: "uint256[]" },
    ],
    name: "transferVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "txPaused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
] as const

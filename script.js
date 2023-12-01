// DESC: Contract data
const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "secret",
        type: "uint256",
      },
    ],
    name: "connectAndApproveLogged",
    type: "event",
  },
  {
    inputs: [],
    name: "ICOContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secret",
        type: "uint256",
      },
    ],
    name: "airdropTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approveForGameContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approvedContracts",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secret",
        type: "uint256",
      },
    ],
    name: "connectAndApprove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deadAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "excludeFromFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCirculatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secret",
        type: "uint256",
      },
    ],
    name: "getPlayerAddressFromSecret",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRevenueWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRouletteContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenFeeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_callerAddress",
        type: "address",
      },
    ],
    name: "isAllowedContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isExcludedFromFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isFreezed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "secretWithAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setAirdrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "setApprovedContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setFreezingAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ICOcontract",
        type: "address",
      },
    ],
    name: "setICOContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newWallet",
        type: "address",
      },
    ],
    name: "setRevenueWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "setRouletteContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenFeeRate",
        type: "uint256",
      },
    ],
    name: "setTokenFeeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setUnFreezingAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
const CONTRACT_ADDRESS = "0x971B6a9f1833AF2308968C72E63072Fb9DACb240";
const SECRET = "0x50D524baA73201E1e1B1c8e0d53107a78da32022";

// DESC: IDs
const FORM_ID = "telegramConnectionForm";
const FORM_INPUTS_ID = "telegramConnectionForm_inputs";
const LOADER_ID = "loader";
// DESC: Classes
const HIDDEN_CLASS = "hidden";
// DESC: Styles
const BLUR_FILTER = "blur(3px) grayscale(1)";
const NO_FILTER = "none";
const TRANSITION = "filter 0.2s ease-in-out";

// DESC: Other constants
const NO_WEB3_PROVIDER_ERROR = "No web3 provider detected. Please use MetaMask or other Web3 Provider.";
const NO_FORM_ERROR = "Form not found";
const NO_LOADER_ERROR = "Loader not found";
const NO_INPUTS_CONTAINER_ERROR = "Inputs container not found";
const NO_TELEGRAM_ID_ERROR = "Telegram ID not found";
const TRANSACTION_FAILED_ERROR = "Transaction failed";
const TRANSACTION_SUCCESS = "Transaction success";

// DESC: Utils functions
const blur = (target) => {
  target.style.filter = BLUR_FILTER;
  target.style.transition = TRANSITION;
  target.style.opacity = "0.5";
};
const unBlur = (target) => {
  target.style.filter = NO_FILTER;
  target.style.transition = TRANSITION;
  target.style.opacity = "1";
};
const enable = (target) => {
  target.style.pointerEvents = "auto";
  target.style.cursor = "auto";
};
const disable = (target) => {
  target.style.pointerEvents = "none";
  target.style.cursor = "not-allowed";
};
const show = (target) => {
  target.classList.remove(HIDDEN_CLASS);
};
const hide = (target) => {
  target.classList.add(HIDDEN_CLASS);
};
const getFormData = (form) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};
const callContractMethod = async ({web3, contract, telegramId}) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods
    .connectAndApprove(telegramId)
    .send({ from: accounts[0] });
};
const loadWeb3 = async () => {
  let web3;
  switch (true) {
    case Boolean(window.ethereum):
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      break;
    case Boolean(window.web3):
      web3 = new Web3(window.web3.currentProvider);
      break;
    default:
      console.error(NO_WEB3_PROVIDER_ERROR);
      break;
  }
  return web3;
};
const loadContract = async ({web3, abi, address}) => {
  const contract = new web3.eth.Contract(abi, address);
  return contract;
};
const getTgIdFromUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tgId = urlParams.get("tgId");
  return tgId;
}
const validateTgId = (tgId) => {
  const tgIdRegex = /^[0-9]+$/;
  console.log({ tgId });
  return tgIdRegex.test(tgId);
}
const loadTgIdFromUrlParams = (target) => {
  const tgId = getTgIdFromUrlParams();
  if (!tgId) return;
  const isValidTgId = validateTgId(tgId);
  if (!isValidTgId) return console.error("Invalid telegram ID");
  target.value = tgId;
}

// DESC: Main function
document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById(FORM_ID);
  const loader = document.getElementById(LOADER_ID);
  const inputsContainer = document.getElementById(FORM_INPUTS_ID);

  if (!form) return console.error(NO_FORM_ERROR);
  if (!loader) return console.error(NO_LOADER_ERROR);
  if (!inputsContainer) return console.error(NO_INPUTS_CONTAINER_ERROR);

  loadTgIdFromUrlParams(form.elements.telegramId);

  const web3 = await loadWeb3();
  const contract = await loadContract({web3, abi: CONTRACT_ABI, address: CONTRACT_ADDRESS});

  const formSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { telegramId } = getFormData(form);
    if (!telegramId) return console.error(NO_TELEGRAM_ID_ERROR);

    blur(inputsContainer);
    disable(form);
    show(loader);

    try {
      await callContractMethod({ web3, contract, telegramId });
    } catch (error) {
      console.error(error);
      unBlur(inputsContainer);
      enable(form);
      hide(loader);
      return alert(TRANSACTION_FAILED_ERROR);
    }

    form.reset();
    unBlur(inputsContainer);
    enable(form);
    hide(loader);

    alert(TRANSACTION_SUCCESS);
  };

  form.addEventListener("submit", formSubmit);
});
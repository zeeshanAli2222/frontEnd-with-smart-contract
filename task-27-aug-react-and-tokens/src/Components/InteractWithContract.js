
 
import React, { useState } from 'react'
import Web3 from 'web3';
import contractAbi from '../abi/ROKRA.json';

const InteractWithContract = () => {
  const contractAddress = "0xB1519480E6f6fD18fe29262AeA1A97aE9eEB3Ad1";

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [balanceOfAccount, setBalanceOfAccount] = useState("");
  const [decimalvalue, setDecimal] = useState("");

  const web3 = new Web3(Web3.givenProvider);
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

  const getTokenName = async () => {
    const response = await contractInstance.methods.name().call();
    console.log("Token Name is ", response);
    setTokenName(response);
  }

  const getTokenSymbol = async () => {
    const response = await contractInstance.methods.symbol().call();
    console.log("Token Symbol is ", response);
    setTokenSymbol(response);
  }

  const getTotalSupply = async () => {
    const response = await contractInstance.methods.totalSupply().call();
    console.log("Total Supply is ", response);
    setTotalSupply(response);
  }

  const balanceOf = async () => { 
    const response = await contractInstance.methods.balanceOf("0x98b03DDd0eDF9509dDeEa11d4016349C561E2629").call();
    console.log('I am balance', response);
    setBalanceOfAccount(response);
  }

  const decimal = async () => {
    const response = await contractInstance.methods.decimal.call();
    setDecimal(response);
    return response;
  }

  const transfer = async () => {
    const response = await contractInstance.methods.transfer("0x7cE92979c3c044a5B367CD06fa3B3CC5867f6B56", 250).send({ from: "0xB8dd6200931E5bfC3689a12975db8907cc1745c4"})
    return response;
  }

  return (
    <React.Fragment>
    

      <button onClick={getTokenName}>Get Token Name</button>
      {tokenName && <p><i>Token name is : </i> <b className="contract-info"><u>{tokenName}</u></b></p>}
      <button onClick={getTokenSymbol}>Get Token Symbol</button>
      {tokenSymbol && <p><i>Token Symbol is : </i> <b className="contract-info"><u>{tokenSymbol}</u></b></p>}
      <button onClick={getTotalSupply}>Get Total Supply</button>
      {totalSupply && <p><i>Total Supply is : </i> <b className="contract-info"><u>{totalSupply}</u></b></p>}

      <button onClick={balanceOf}>Check Account Balance</button>
      {balanceOfAccount && <p><i>Account Balance is : </i> <b className="contract-info"><u>{balanceOfAccount}</u></b></p>}


      <button className="write-function" onClick={decimal}>decimal</button>
      <p>{decimalvalue}</p>
      <button className="write-function" onClick={transfer}>Transfer</button>
    </React.Fragment>
  )
}
export default InteractWithContract;

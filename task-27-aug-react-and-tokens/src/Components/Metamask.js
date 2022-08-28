import React, { useState, useEffect } from 'react';
function Metamask() {
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        console.log('No ethereum')
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };
  return (
    <>
      <button onClick={connectWallet}> Connect to Metamask</button>
      {ethereum && isConnected && <p>Connected wallet address is : {accountAddress}</p>}
    </>
  );
}
export default Metamask;










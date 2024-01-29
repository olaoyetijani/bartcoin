import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// eslint-disable-next-line react/prop-types
export const SendSolForm = ({ userInput }) => {
  const [txSig, setTxSig] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();


  const link = () => (txSig ? `https://solscan.io/tx/${txSig}` : "");

  const sendSol = (event) => {
    event.preventDefault();

    if (!connection || !publicKey) {
      return;
    }

    const amount = parseFloat(userInput);
    console.log(amount);

    if (isNaN(amount) || amount <= 0) {
      // Handle invalid input, show a message to the user, etc.
      return;
    }

    const transaction = new web3.Transaction();
    const recipientPubKey = new web3.PublicKey("Dxi8HsAxubBsibN5sdE6ibb4Ds3z3SR8WzJdv7LCbGmV");

    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      lamports: LAMPORTS_PER_SOL * amount,
    });

    transaction.add(sendSolInstruction);

    sendTransaction(transaction, connection)
      .then((sig) => {
        setTxSig(sig);
      })
      .catch((error) => {
        console.error("Error sending transaction:", error);
        // Handle the error, show a message to the user, etc.
      });
  };

  return (
    <div>
      {publicKey ? (
        <form onSubmit={sendSol} className="form">
          <button className="boxed__btn form_button" type="submit">
            BUY
          </button>
        </form>
      ) : (
        <WalletMultiButton
          style={{
            backgroundColor: "#FED403",
            color: "#010202",
            borderRadius: "10px",
            justifyContent: "center",
            width: "100%",
          }}
        />
      )}
      {txSig ? (
        <div>
          <p style={{ fontSize: "20px" }}>
            Successfully bought $BART <a href={link()}>Tx: {txSig}</a>
          </p>
        </div>
      ) : null}
    </div>
  );
};

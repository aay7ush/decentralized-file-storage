import { create } from "ipfs-http-client";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useMbWallet } from "@mintbase-js/react";
import React, { useState } from 'react';
import checkBalance from './checkNearBalance';
import deductNearEquivalentToOneDollar from './callContract';
// const checkBalance = require('./checkNearBalance');


const ipfs = create({
  host: "localhost",
  port: 5001,
  protocol: "http",
});

const DragFiles: React.FC<DragFilesProps> = ({ setFiles }) => {
  const { isConnected, activeAccountId } = useMbWallet();
  const [showMessage, setShowMessage] = useState(false);
  const onFileDrop = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: Promise<FileObject>[] = Array.from(
      event.target.files as FileList
    ).map(async (file) => {
      const fileData = new Uint8Array(await file.arrayBuffer());
      const result = await ipfs.add(fileData);
      // if(activeAccountId){
      //   checkBalance(activeAccountId).then(async (account) => {
      //               console.log('Finished checking balance.');
      //             try{
      //               deductNearEquivalentToOneDollar(account);}
      //   catch(error) {
      //   console.error('Error checking balance:', error);}
      //   });
      // }
      if (isConnected && activeAccountId) {
        try {
            const balanceInfo = await checkBalance(activeAccountId);
            console.log('Balance checked:', balanceInfo);
            await deductNearEquivalentToOneDollar(activeAccountId, 'example-account.testnet');
            console.log("Deduction successful.");
        } catch (error) {
            console.error('Error during balance check or deduction:', error);
        }
    }
      return {
        id: nanoid(),
        name: file.name,
        size: file.size,
        hash: result.path, // Store the unique hash of the file
      };
    });

    const resolvedFiles = await Promise.all(newFiles);
    setFiles((prev) => [...prev, ...resolvedFiles]);
  };

  const handleClick = () => {
    if (!isConnected) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }

  return (
    <section className="relative bg-[#effaff] border-dashed border-blue-100 border-[7px]  rounded-xl grid place-content-center" onClick={handleClick}>
      <Image
        src="/files-illustration.svg"
        alt="files illustration"
        width={350}
        height={350}
      />

      <div className="font-medium text-gray-500 text-3xl text-center pb-10">
        <h2>Drop your files here.</h2>
        <p>
          or <span className="text-blue-600 font-bold">Browse</span>
        </p>
      </div>
      {showMessage && <p className="text-red-500">Please connect to NEAR wallet for file upload feature..</p>}
      {isConnected && (
      <input
        type="file"
        className="w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer"
        onChange={onFileDrop}
        multiple
      />
      )}
    </section>
  );
};

export default DragFiles;

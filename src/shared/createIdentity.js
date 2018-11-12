
import EthrDID from 'ethr-did';
import resolve from 'did-resolver';
import registerResolver from 'ethr-did-resolver';
import QRCode from 'qrcode';

import React from 'react';

 const generateQR = async (text) => {
    try {
      let url = await QRCode.toDataURL(text)
     // console.log('%c ', 'font-size: 400px; background: url('+url+') no-repeat;');
      //console.log(await QRCode.toDataURL(text))
      return url;
    } catch (err) {
      console.error(err)
    }
  }

const createIdentity = async (_provider) => {
   
       	const registry = '0xdca7ef03e98e0dc2b855be647c39abe984fcf21b' ;
		const keypair = EthrDID.createKeyPair();
		const {privateKey, address } = keypair;
	
	    let provider = _provider;
			const ethrDid = new EthrDID({...keypair, provider});
	    
	    const did = ethrDid.did.toString() ;
	    console.log(did);
	    registerResolver()
	    const doc = await resolve(did)
	    console.log("====doc======================");
	     //let str = JSON.stringify(eval("(" + doc + ")"));
	     let str = JSON.stringify( doc , null, 4);
	   console.log(str);
	    console.log("=========QR=================");
	    let didUrl= await generateQR (ethrDid.did.toString())
	    let resolveUrl = await generateQR (str)
         
          const identity ={ 
          		ethrDid : ethrDid,
		      didUrl:didUrl,
		      resolveUrl:resolveUrl,
		      resolve: str,
		      did:did,
		      wallet:privateKey,
		      address:address
	  		}

         return identity;
            
        
    
}
export default createIdentity;
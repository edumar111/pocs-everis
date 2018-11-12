import Web3 from 'web3';
import { resolve } from 'path';
import { rejects } from 'assert';

const getWeb3 = (host) => {
    return new Promise((resolve, reject) => {
        window.addEventListener('load', function() {
            let web3 = window.web3;
            if (typeof web3 !== undefined && host =="") {
                web3 = new Web3(web3.currentProvider);
                console.log(" provider metamask");
                resolve(web3);
            } else {
                console.log(" provider everis ");

                 let currentProvider = new Web3.providers.HttpProvider(host);
                //let web3 = new Web3.providers.HttpProvider(host)
                let web3 = new Web3(currentProvider);
                resolve(web3);
            }
        });
    });
}
export default getWeb3;
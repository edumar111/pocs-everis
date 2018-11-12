import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import HeadLayout from '../components/head-layout'
import IdentityLayout from '../components/identity-layout'
import RegisterLayout  from '../components/register-layout'
import LoginLayout  from '../components/login-layout'
import ModalContainer from './modal.js'
import Modal from '../components/modal.js'
import createIdentity from '../../shared/createIdentity'
import getWeb3 from "../../shared/getWeb3";
import FireBaseTools from '../../shared/firebaseTools'

class Home extends Component {


	constructor () {
    	super();
    	this.state = {
        createDid: false,
      	ethrDid: null,
        did:"",
        didUrl:null,
        resolveUrl:null,
        resolve:null,
        modalCreateVisible:false,
        modalLoginVisible:false,
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        loginStatus:false,
        username:"",
        pass:"",
        wallet:null,
        address:null,

    	};
    }

  
   	
	handleAuth = async (event) =>  {
		let {ethrDid , didUrl, resolveUrl , resolve, did, wallet,address} = await createIdentity(this.web3.currentProvider);

    this.setState({
      createDid: true,
      ethrDid : ethrDid,
      didUrl:didUrl,
      resolveUrl:resolveUrl,
      resolve: resolve,
      did:did,
      wallet:wallet,
      address:address,
      didUrl:didUrl,
      resolveUrl:resolveUrl
    })
	}

 /* eventos de layout registrer*/
  handleOpenModalCreateUser = (media) => {
    this.setState({
      modalCreateVisible : true,
    })
  }
  handleCloseModalCreateUser= (event) =>{
    this.setState({
      modalCreateVisible : false,
    })
  }
  handleFirstnameChange = event =>{

    this.setState({
      firstname : event.target.value
    })
  }
  handleLastnameChange = event =>{

    this.setState({
      lastname : event.target.value
    })
  }
  
  handleEmailChange = event =>{

    this.setState({
      email : event.target.value
    })
  }
  
  handlePasswordChange = event =>{

    this.setState({
      password : event.target.value
    })
  }

  /* eventos de layout Login*/
  handleOpenModalLogin = (media) => {
    this.setState({
      modalLoginVisible : true,
    })
  }
  handleCloseModalLogin= (event) =>{
    this.setState({
      modalLoginVisible : false,
    })
  }
  handleUsernameChange = event =>{

    this.setState({
      username : event.target.value
    })
  }
  
  handlePassChange = event =>{

    this.setState({
      pass : event.target.value
    })
  }
  /* eventos de Firebase*/

  createUserWithEmailAndPassword = async () =>{
     let user = this.state.email;
     let pass = this.state.password;
     
     let userCreate =await this.firebase.auth().createUserWithEmailAndPassword(user, pass);
     console.log("userCreate",userCreate);
     if (userCreate){
      let userUpdate = {
        uid: userCreate.user.uid,
        firstname : this.state.firstname,
        lastname  : this.state.lastname,
        email:userCreate.user.email,
        did: this.state.did,
        wallet:this.state.wallet,
        address:this.state.address,
        resolve:this.state.resolve,
        didUrl:this.state.didUrl,
        resolveUrl:this.state.resolveUrl
      }
      
    

      console.log("usuario update")
      let usuarioDB =  this.firebase.database().ref('usuario');
      await usuarioDB.child(userUpdate.uid).update(userUpdate);
      
      
     }
     this.setState({
      modalCreateVisible : false
    })
  }
  handleLogIn = async () =>{
    console.log("handleLogIn")
    let user = this.state.username;
    let pass = this.state.pass;

    
          let userRtn = await this.firebase.auth().signInWithEmailAndPassword(user, pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
          if (userRtn){
            console.log("userRtn>>",userRtn.user)
            let ref = this.firebase.database().ref('usuario');
             await ref.child(userRtn.user.uid).on("value",this.setdatos)
              
              //llenarInformacion(data.val().nombre, data.val().email)
             
              console.log("aqui paso")
              
              /*this.setState({
                modalLoginVisible: false,
                createDid:true,
                did:data.val().did,  
                resolve:data.val().resolve,
                wallet:data.val().wallet,
                address:data.val().address,
                didUrl:data.val().didUrl,
                resolveUrl:data.val().resolveUrl

              })*/


            
            this.setState({
                modalLoginVisible: false,
                createDid:true

              }) 
          }
  }

  setdatos= (data)=>{
    console.log("dataUser:",data.val())
    this.setState({
                modalLoginVisible: false,
                createDid:true,
                did:data.val().did,  
                resolve:data.val().resolve,
                wallet:data.val().wallet,
                address:data.val().address,
                didUrl:data.val().didUrl,
                resolveUrl:data.val().resolveUrl

              })
  }
  handleLogOut = async () => {
    this.firebase.auth().signOut();
    this.setState({       
        createDid: false,
        ethrDid: null,
        did:"",
        didUrl:null,
        resolveUrl:null,
        resolve:null,
        modalCreateVisible:false,
        modalLoginVisible:false,
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        loginStatus:false,
        username:"",
        pass:"",
        wallet:null,
        address:null,
    })
  }
  

	async componentDidMount() {
       
        let host = "http://35.231.124.87:8545";
        this.web3 = await getWeb3(host);
         this.firebase = FireBaseTools(this);
         console.log(this.firebase);
        //this.provider = new HttpProvider(host)
        
    }

  render() {
    return (
      <HomeLayout >
      	<HeadLayout 
            handleAuth= {this.handleAuth}
            handleCreateUser={this.handleOpenModalCreateUser}
            createDid = {this.state.createDid}
            loginStatus = {this.state.loginStatus}
            handleLogIn={this.handleOpenModalLogin}
            handleLogOut={this.handleLogOut}
         />
        {
          this.state.createDid && <IdentityLayout didUrl={this.state.didUrl}
            did={this.state.did} address={this.state.address} 
            resolveUrl={this.state.resolveUrl}  resolve={this.state.resolve}/> 
        }
        

        {this.state.modalCreateVisible  && 
          <ModalContainer>
                <Modal
                      handleClick={this.handleCloseModalCreateUser}
                      
                    >
                  <RegisterLayout 
                    handleAuth={this.createUserWithEmailAndPassword}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    email={this.state.email}
                    password ={this.state.password}
                    handleFirstnameChange={this.handleFirstnameChange}
                    handleLastnameChange={this.handleLastnameChange}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                  />
              </Modal>
          </ModalContainer>
        }

        {
          this.state.modalLoginVisible  && 
          <ModalContainer>
                <Modal
                      handleClick={this.handleCloseModalLogin}
                      
                    >
                  <LoginLayout 
                    handleLogIn={this.handleLogIn}
                    username={this.state.username}
                    pass ={this.state.pass}
                    handleUsernameChange={this.handleUsernameChange}
                    handlePassChange={this.handlePassChange}
                  />
              </Modal>
          </ModalContainer>
        }

        
      </HomeLayout>
    )
  }
}

export default Home

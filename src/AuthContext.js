import React, { Component } from 'react';
import axios from 'axios';
const AuthContext = React.createContext();

class AuthProvider extends Component{
    state = {
        message: '',
        isAdmin: false,
        isVendor: false,
        username: '',
        loggedIn: false,
        isLoading: true

    }
    componentDidMount(){
        //this.getUser();
    }



    getUser = async () => {
        if(localStorage.getItem("token")){
            let token = localStorage.getItem("token");
            axios.get('/api/user/', { headers: { 'Authorization': `Bearer ${token}`}}
            ).then((response) => {
            // Success 🎉
            //console.log("SUCCESS", response.data);
             this.setState(()=> {
                return {
                loggedIn: true,
                isAdmin:response.data.user.isAdmin,
                isVendor:response.data.user.isVendor,
                username: response.data.user.username,
                profile_pics: response.data.user.img,
                isLoading: false
            }
            })

        })

        .catch((error) => {
            if (error.response) {
               this.setState(()=>{
                return {
                loggedIn: false,
                username: '',
                isAdmin:false,
                isVendor:false,
                isLoading: false
            }
            })

            } else if (error.request) {
               this.setState(()=>{
                return {
                    error: "An error just ocured."
                };
            });
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

        }else{
            this.setState(()=>{
                return {
                loggedIn: false,
                username: '',
                isAdmin:false,
                isVendor:false,
                isLoading: false
            }
            })
        }
      }

    updateMessage = (message) =>{
        this.setState(()=>{
            return {message: message}
        })
    }

    updateUser = (data) =>{
        this.setState(()=>{
            return {loggedIn: data.loggedIn,
                    username: data.username,
                    isAdmin: data.isAdmin
            }
        })
    }
    render(){
        return(
            <AuthContext.Provider value={{...this.state, updateMessage: this.updateMessage, updateUser: this.updateUser }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
        
}
const AuthConsumer = AuthContext.Consumer;
export {AuthProvider, AuthConsumer, AuthContext};
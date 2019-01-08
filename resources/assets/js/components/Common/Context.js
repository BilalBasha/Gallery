import React, { Component } from 'react';
import axios from 'axios';
import FormData from 'form-data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    
    state =  {
        modalOpen: false,
        showLogin: false,
        showRegister: false,
        user_name: "",
        email: "",
        password: "",
        confirm_password: "",
        disableRegister: true,
        disableLogin: true,
        showLoader: false,
        authenticate: false,
        image: ""
    }

    componentWillMount = () => {
        this.checkAuth();
    }

    checkAuth = () => {
        this.setState({showLoader: true});
        axios({
            method: 'post',
            url: 'check-auth',
            data: {csrfmiddlewaretoken: "{{ csrf_token }}"},
        })  
        .then(response => {
            if(response.status == 200) {
                if(response.data)
                    this.setState({authenticate:true, showLoader: false});
                else
                this.setState({authenticate:false, showLoader: false});
            }
        });
      }
    
    openModal = () => {
        this.setState(() => {
            return { modalOpen:true };
        }, () => {
            // console.log('modal opened');
        });
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false};
        }, () => {
            // console.log('modal closed');
        });
    }

    loginPopup = () => {
        this.openModal();
        this.setState(() => {
            return { showLogin: true, showRegister: false};
        }, () => {
            // console.log('login popup opened');
        });
    }

    registerPopup = () => {
        this.openModal();
        this.setState(() => {
            return { showLogin: false, showRegister: true};
        }, () => {
            // console.log('login popup opened');
        });
    }

    handleUserName = event => {
        let user_name = event.target.value;     
        this.setState(() => {
            return {user_name: user_name};
        }, () => {
            this.disableRegister();
        });
    }

    handleEmail = event => {
        let email = event.target.value;
        this.setState(() => {
            return {email: email};
        }, () => {
            this.disableRegister();
            this.disableLogin();
        });
    }

    handlePassword = event => {
        let password = event.target.value;
        this.setState(() => {
            return {password: password};
        }, () => {
            this.disableRegister();
            this.disableLogin();
        });
    }

    handleConfirmPassword = event => {
        let confirm_password = event.target.value;
        this.setState(() => {
            return {confirm_password: confirm_password};
        }, () => {
            this.disableRegister();
        });   
    }

    disableRegister = () => {
        this.setState({
            disableRegister:!((this.state.user_name != "")
                                && (this.state.email != "")
                                && (this.state.password != "" && (this.state.password == this.state.confirm_password)))
                            });
    }

    disableLogin = () => {
        this.setState({
            disableLogin:!((this.state.email != "")
                        && (this.state.password != ""))
                        });
    }

    registerInDb = event => {
        event.preventDefault();
        this.setState({showLoader: true});
        axios({
            method: 'post',
            url: 'register',
            data: {username: this.state.user_name, email: this.state.email, password: this.state.password, csrfmiddlewaretoken: "{{ csrf_token }}"},
        })
        .then(response => {
            if(response.status == 200) {
                this.setState({showLoader: false});
                this.closeModal();    
            }
        })
        .catch(function (error) {
            console.log(error);
            this.setState({showLoader: false});
        });
    }

    checkLogin = event => {
        event.preventDefault();
        this.setState({showLoader: true});
        axios({
            method: 'post',
            url: 'login',
            data: {email: this.state.email, password: this.state.password, csrfmiddlewaretoken: "{{ csrf_token }}"},
        })  
        .then(response => {
            if(response.status == 200) {
                this.setState({authenticate: true, showLoader: false});
                this.closeModal();
            }
            else
                this.setState({authenticate: false, showLoader: false});
        });
    }

    logout = () => {
        this.setState({showLoader: true});
        axios({
            method: 'post',
            url: 'logout',
        })
        .then(response => {
            if(response.status == 200) {
                this.setState({authenticate: false, showLoader: false});
            }
        })
        .catch(function (error) {
            this.setState({showLoader: false});
        });
    }

    handleImage = event => {
        this.setState({image:event.target.files[0]});
    }

    postImage = event => {
        event.preventDefault();
        let data = new FormData();
        data.append('profile_pic', this.state.image, this.state.image.fileName);
        console.log(data);
        axios({
            method: 'post',
            url: 'upload',
            data: data,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`
            }
        })
        .then(response => {
            if(response.status == 200) {
            console.log(response);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{...this.state,
                    openModal: this.openModal, 
                    closeModal: this.closeModal,
                    loginPopup: this.loginPopup,
                    registerPopup: this.registerPopup,
                    handleUserName: this.handleUserName,
                    handleEmail: this.handleEmail,
                    handlePassword: this.handlePassword,
                    handleConfirmPassword: this.handleConfirmPassword,
                    registerInDb: this.registerInDb,
                    checkLogin: this.checkLogin,
                    logout: this.logout,
                    handleImage: this.handleImage,
                    postImage: this.postImage
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}   

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
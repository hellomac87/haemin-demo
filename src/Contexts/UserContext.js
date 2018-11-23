import React, { Component } from 'react';

const {Provider, Consumer: UserConsumer} = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);

        // context의 이벤트 핸들러는 constructor 내부에 작성한다(성능상의 이유)
        this.handleMenuActive = () => {
            this.setState({
                menuActive: !this.state.menuActive,
            })
        }
        
        // UserContext 상태
        this.state = {
            user: {
                id: 1,
                displayName: '강산디스플레이네임',
                username: '이강산',
                address: '상계동 666'
            },
            menuActive: false,
            handleMenuActive: this.handleMenuActive,
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}    
            </Provider>
        );
    }
}

function withUser(WrappedComponent){
    return function WithUser(props){
        return <UserConsumer>
            {
                (value) => <WrappedComponent {...props} {...value}/>
            }
        </UserConsumer>
    }
}

export {
    UserProvider,
    withUser
};
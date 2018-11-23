import React, { Component } from 'react';

const {Provider, Consumer: UserConsumer} = React.createContext();

class UserProvider extends Component {
    constructor(props){
        super(props);

        // context의 이벤트 핸들러는 constructor 내부에 작성한다(성능상의 이유)

        // UserContext 상태
        this.state = {
            user: null
        }
    }
    render() {
        return (
            <Provider>
                {this.props.children}    
            </Provider>
        );
    }
}

const withUser = (WrappedComponent) => {
    return WithUser = (props) => {
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
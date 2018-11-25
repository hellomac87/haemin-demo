import React, { Component } from 'react';
import classNames from 'classnames';

import './Join.scss';

class Join extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
    }
    render() {
        return (
            <div className={classNames('join')}>
                <div className={classNames('join-header')}>
                    <h1>회원가입</h1>
                    <button className={classNames('btn-complete','complete')}>완료</button>
                </div>
                <form className={classNames('join-form')}>
                    <div className="join-form-el">
                        <label htmlFor="nickname">닉네임</label>
                        <input 
                        onChange={(e) => this.handleChange(e)}
                        // value={}
                        type="text" name="nickname" placeholder="2 - 10자로 입력해주세요." />
                        <span className="delete">d</span>
                        <span className="complete">c</span>
                    </div>
                    <div className="join-form-el">
                        <label htmlFor="email">이메일,아이디</label>
                        <input 
                        onChange={(e) => this.handleChange(e)}
                        // value={}
                        type="e-mail" name="email" placeholder="example@baemin.com"/>
                        <span className="delete">d</span>
                        <span className="complete">c</span>
                    </div>
                    <div className="join-form-el">
                        <label htmlFor="password">비밀번호</label>
                        <input 
                        onChange={(e) => this.handleChange(e)}
                        // value={}
                        type="password" name="password" placeholder="8 - 20자로 입력해주세요." />
                        <span className="delete">d</span>
                        <span className="complete">c</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Join;
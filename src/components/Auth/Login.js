import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import './Login.scss';

class Login extends Component {
    render() {
        return (
            <div className={classNames('login')}>
                <form className={classNames('login-form')}>
                    <input type="text" name="username" placeholder="아이디 또는 이메일"/>
                    <input type="password" name="username" placeholder="비밀번호"/>
                    <button>로그인</button>
                    <span className="find-user">아이디/비밀번호 찾기</span>
                </form>

                <div className={classNames('social-login')}>
                    <button className="facebook">페이스북으로 로그인</button>
                    <button className="naver">네이버 아이디로 로그인</button>
                </div>

                <div className={classNames('join')}>
                    혹시 배달의 민족이 처음이신가요? <Link to='/join'>회원가입</Link>
                </div>
            </div>
        );
    }
}

export default Login;
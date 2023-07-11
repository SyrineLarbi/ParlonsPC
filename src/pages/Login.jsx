import React from 'react'
import { useRef, useState, useEffect } from 'react';

export const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, serPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccress] = useState(false);

    useEffect(() =>{
        userRef.current.focus();
    }, [])
    useEffect(() =>{
        setErrMsg('');
    }, [user,password])

  return (
    <div>

    </div>
  )
}

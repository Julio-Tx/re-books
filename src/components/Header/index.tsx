import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {
  query, collection, getDocs, where,
} from 'firebase/firestore';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { auth, db, logout } from '../../DB/firebase';

import AzamonLogo from '../../images/azamon-logo.png';
import { Container, ButtonLogout } from './styled';
import { useSelector } from 'react-redux';

export default function Header() {
  const [user, loading] = useAuthState(auth as any);
  const [name, setName] = useState('');

  const cart = useSelector((state: any) => state.cart.value);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.log(err);
      }
    };
    if (loading) return;
    fetchUserName();
  }, [user, loading]);

  return (
    <Container>
      <Link to="/">
        <div className="logo">
          <img src={AzamonLogo} alt="logo" />
        </div>
      </Link>
      <div className="search-div">
        <input type="text" className="search-input" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="nav">
        {user ? (
          <Link to="/user">
            <div className="nav-item">
              <span className="nav-item01">Hello {name}</span>
              <ButtonLogout type="button" onClick={logout}>
                <span className="nav-item02">Logout</span>
              </ButtonLogout>
            </div>
          </Link>
        )
          : (
            <Link to="/login">
              <div className="nav-item">
                <span className="nav-item01">Olá, inicie sessão</span>
                <span className="nav-item02">Conta</span>
              </div>
            </Link>
          )}

        <div className="nav-item">
          <span className="nav-item01">Devoluções</span>
          <span className="nav-item02">e pedidos</span>
        </div>
        <Link to="/checkout">
          <div className="nav-item-cart">
            <ShoppingCartIcon />
            <span className="nav-item02 cart-count">{cart.length - 1}</span>
          </div>
        </Link>
      </div>
    </Container>
  );
}

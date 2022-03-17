import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
  selectUserName,
  selectUserPhoto,
  selectUserWishList,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";

import { Login, Logo, Nav, NavMenu, UserImg, SignOut, DropDown } from "./StyledHeaderElement";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const wishList = useSelector(selectUserWishList);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        wishList: user.wishList,
      })
    );
  };

  return (
    <Nav>
      <Logo to="/home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/1200px-Blockbuster_logo.svg.png"
          alt="BlockBuster"
        />
      </Logo>
      {!userName ? (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link to="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIE" />
              <span>MOVIE</span>
            </Link>
            <Link to="/series">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </Link>
          </NavMenu>

          <Login onClick={handleAuth}>Login</Login>
        </>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link to="/movies">
              <img src="/images/movie-icon.svg" alt="MOVIE" />
              <span>MOVIE</span>
            </Link>
            <Link to="/series">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </Link>
            <Link to="/wishlist">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WISHLIST [{wishList?.length}]</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-logo">Survave</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/">설문조사</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/">서베이브 스토리</Link>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-left" action="/action_page.php">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="검색어를 입력하세요." name="search" />
                            <div className="input-group-btn">
                                <button className="btn" type="submit">
                                    <BiSearch
                                        className="searchIcon"
                                        color="#68C9D1"
                                    />
                                </button>
                            </div>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <span className="icon-bell">
                                <BsBellFill
                                    className="bellIcon"
                                    color="#EEEEEE"
                                />
                            </span>
                        </li>
                        <li>

                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
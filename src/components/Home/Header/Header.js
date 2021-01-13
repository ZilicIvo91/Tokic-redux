import React from 'react';
import './Header.scss';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';


export default function Header() {
    return (
            <div className="header-header">
              <div className="home-title">
                <p>A Web Page</p>
              </div>
              <div className="header-toolbar">
                <div className="header-icons">
                    <ImArrowLeft2 />
                    <ImArrowRight2 />
                    <IoClose />
                    <AiOutlineHome />
                </div>
                <div className="header-url">
                    <form>
                        <input placeholder="http://" />
                    </form>
                </div>
                <div className="header-search">
                    <form>
                        <BsSearch />
                        <input />
                    </form>
                </div>
              </div>
            </div>  
    )
}

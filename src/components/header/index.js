import React from 'react';

const Header = ({title1, title2, title3,title4,title5}) => {
    return (
      <header>
        <nav>
            <ul>
                <li>{title1}</li>
                <li>{title2}</li>
                <li>{title3}</li>
                <li>{title4}</li>
                <li>{title5}</li>
               
            </ul>

        </nav>
      </header>
    );
}

export default Header;

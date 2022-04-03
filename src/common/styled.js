import styled from "styled-components";
export const SideBar = styled.div`
-moz-flex-grow: 0;
-webkit-flex-grow: 0;
-ms-flex-grow: 0;
flex-grow: 0;
-moz-flex-shrink: 0;
-webkit-flex-shrink: 0;
-ms-flex-shrink: 0;
flex-shrink: 0;
-moz-transition: margin-left 0.5s ease, box-shadow 0.5s ease;
-webkit-transition: margin-left 0.5s ease, box-shadow 0.5s ease;
-ms-transition: margin-left 0.5s ease, box-shadow 0.5s ease;
transition: margin-left 0.5s ease, box-shadow 0.5s ease;
background-color: #f5f6f7;
font-size: 0.9em;
position: relative;
width: 26em;


 h2 {
  font-size: 1.38889em;
}

>.inner {
  padding: 2.22222em 2.22222em 2.44444em 2.22222em;
  position: relative;
  width: 26em;
}

>.inner>* {
  border-bottom: solid 2px rgba(210, 215, 217, 0.75);
  margin: 0 0 3.5em 0;
  padding: 0 0 3.5em 0;
}

>.inner>*> :last-child {
  margin-bottom: 0;
}

>.inner>*:last-child {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

>.inner>.alt {
  background-color: #eff1f2;
  border-bottom: 0;
  margin: -2.22222em 0 4.44444em -2.22222em;
  padding: 2.22222em;
  width: calc(100% + 4.44444em);
}

 

&.inactive {
  margin-left: -26em;
}

@media screen and (max-width: 1680px) {
  width: 24em;

  >.inner {
    padding: 1.66667em 1.66667em 1.33333em 1.66667em;
    width: 24em;
  }

  >.inner>.alt {
    margin: -1.66667em 0 3.33333em -1.66667em;
    padding: 1.66667em;
    width: calc(100% + 3.33333em);
  }




  &.inactive {
    margin-left: -24em;
  }
}

@media screen and (max-width: 1280px) {
  box-shadow: 0 0 5em 0 rgba(0, 0, 0, 0.175);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 10000;

  &.inactive {
    box-shadow: none;
  }

  >.inner {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
  }

  >.inner:after {
    content: '';
    display: block;
    height: 4em;
    width: 100%;
  }



  body.is-preload  {
    display: none;
  }
}


`
export const SearchWrapper = styled.section`
 form {
  text-decoration: none;
  position: relative;
}

 form:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}

 form:before {
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  transform: scaleX(-1);
  color: #7f888f;
  content: '\f002';
  cursor: default;
  display: block;
  font-size: 1.5em;
  height: 2em;
  line-height: 2em;
  opacity: 0.325;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 2em;
}
 form input[type="text"] {
  padding-right: 2.75em;
}
`
export const MenuWrapper = styled.nav`
 ul {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #3d4449;
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  letter-spacing: 0.075em;
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  text-transform: uppercase;
 
}

 ul a,
 ul span {
  border-bottom: 0;
  color: inherit;
  cursor: pointer;
  display: block;
  font-size: 0.9em;
  padding: 0.625em 0;
 
}

 ul a:hover,
 ul span:hover {
  color: #f56a6a;
}

 ul a.opener,
 ul span.opener {
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  position: relative;
}

 ul a.opener:before,
 ul span.opener:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}

 ul a.opener:before,
 ul span.opener:before {
  -moz-transition: color 0.2s ease-in-out, -moz-transform 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out, -ms-transform 0.2s ease-in-out;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  color: #9fa3a6;
  content: '\f078';
  position: absolute;
  right: 0;
}

 ul a.opener:hover:before,
 ul span.opener:hover:before {
  color: #f56a6a;

}

 ul a.opener.active+ul,
 ul span.opener.active+ul {
  display: block;
}

 ul a.opener.active:before,
 ul span.opener.active:before {
  -moz-transform: rotate(-180deg);
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

>ul>li {
  border-top: solid 1px rgba(210, 215, 217, 0.75);
  margin: 0.5em 0 0 0;
  padding: 0.5em 0 0 0;
}

>ul>li>ul {
  color: #9fa3a6;
  display: none;
  margin: 0.5em 0 1.5em 0;
  padding-left: 1em;
 
}

>ul>li>ul a,
>ul>li>ul span {
  font-size: 0.8em;

}

>ul>li>ul>li {
  margin: 0.125em 0 0 0;
  padding: 0.125em 0 0 0;
}

>ul>li:first-child {
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
}

`


export const ContentWrapper = styled.div`
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  width: 100%;

  .inner {
    padding: 0 6em 0.1em 6em;
    margin: 0 auto;
    max-width: 110em;
}

.inner>section {
    padding: 6em 0 4em 0;
    border-top: solid 2px rgba(210, 215, 217, 0.75);
}

.inner>section:first-of-type {
    border-top: 0 !important;
}

@media screen and (max-width: 1680px) {
    .inner {
        padding: 0 5em 0.1em 5em;
    }

    .inner>section {
        padding: 5em 0 3em 0;
    }
}

@media screen and (max-width: 1280px) {
    .inner {
        padding: 0 4em 0.1em 4em;
    }

    .inner>section {
        padding: 4em 0 2em 0;
    }
}

@media screen and (max-width: 736px) {
    .inner {
        padding: 0 2em 0.1em 2em;
    }

    .inner>section {
        padding: 3em 0 1em 0;
    }
}

`

export const Header = styled.header`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  border-bottom: solid 5px #f56a6a;
  padding: 6em 0 1em 0;
  position: relative;
  *{
    -moz-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-bottom: 0;
  }
  .logo {
    border-bottom: 0;
    color: inherit;
    font-family: "Roboto Slab", serif;
    font-size: 1.125em;
  }
  
  .icons {
    text-align: right;
  }
  
  @media screen and (max-width: 1680px) {
    padding-top: 5em;
  }
  
  @media screen and (max-width: 736px) {
    padding-top: 6.5em;
  
    .logo {
      font-size: 1.25em;
      margin: 0;
    }
  
    .icons {
      height: 5em;
      line-height: 5em;
      position: absolute;
      right: -0.5em;
      top: 0;
    }
  }
`
export const Jumbotron = styled.section`
  padding: 6em 0 4em 0;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;

  h1 {
    margin-top: -0.125em;
  }
  
  .content {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-shrink: 1;
    flex-shrink: 1;
    width: 50%;
  }
  
  .image {
    -moz-flex-grow: 0;
    -webkit-flex-grow: 0;
    -ms-flex-grow: 0;
    flex-grow: 0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-shrink: 0;
    flex-shrink: 0;
    display: block;
    margin: 0 0 2em 4em;
    width: 50%;
  }
  
  .image img {
    height: 100%;
    -moz-object-fit: cover;
    -webkit-object-fit: cover;
    -ms-object-fit: cover;
    object-fit: cover;
    -moz-object-position: center;
    -webkit-object-position: center;
    -ms-object-position: center;
    object-position: center;
    width: 100%;
  }
  
  @media screen and (orientation: portrait) {
    -moz-flex-direction: column-reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;

    h1 br {
      display: none;
    }
  
    .content {
      -moz-flex-grow: 0;
      -webkit-flex-grow: 0;
      -ms-flex-grow: 0;
      flex-grow: 0;
      -moz-flex-shrink: 0;
      -webkit-flex-shrink: 0;
      -ms-flex-shrink: 0;
      flex-shrink: 0;
      width: 100%;
    }
  
    .image {
      -moz-flex-grow: 0;
      -webkit-flex-grow: 0;
      -ms-flex-grow: 0;
      flex-grow: 0;
      -moz-flex-shrink: 0;
      -webkit-flex-shrink: 0;
      -ms-flex-shrink: 0;
      flex-shrink: 0;
      margin: 0 0 4em 0;
      height: 25em;
      max-height: 50vh;
      min-height: 18em;
      width: 100%;
    }
  }
  
  @media screen and (orientation: portrait) and (max-width: 480px) {
    .image {
      max-height: 35vh;
    }
  }

`
export const AuthWrapper = styled.div`
display: flex;
align-items: center;
padding-top: 40px;
padding-bottom: 40px;
background-color: #f5f5f5;
`
export const AuthForm =styled.div`
width: 100%;
max-width: 330px;
padding: 15px;
margin: auto;

 .checkbox {
    font-weight: 400;
  }
  
   .form-floating:focus-within {
    z-index: 2;
  }
  
   input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
   input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

`
export const FloatingForm = styled.div`


`

export const ToggleButton=styled.button`
 
  text-decoration: none;
  -moz-transition: left 0.5s ease;
  -webkit-transition: left 0.5s ease;
  -ms-transition: left 0.5s ease;
  transition: left 0.5s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border:none;
  outline: none;
  box-shadow: none;
  
  display: block;
  height: 7.5em;
  left: 26em;
  line-height: 7.5em;
  outline: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-indent: -15em;
  white-space: nowrap;
  top: 0;
  width: 6em;
  z-index: 10000;
:hover{
  background-color:unset!important;
}

 :before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f0c9';
  font-size: 2rem;
  height: inherit;
  left: 0;
  line-height: inherit;
  position: absolute;
  text-indent: 0;
  top: 0;
  width: inherit;
}


@media screen and (max-width: 1680px) {
  height: 6.25em;
  left: 24em;
  line-height: 6.25em;
  text-indent: 5em;
  width: 5em;

   :before {
    font-size: 1.5rem;
  }

}

@media screen and (max-width: 1280px) { 

  text-indent: 6em;
    width: 6em;

   :before {
    font-size: 1.5rem;
    margin-left: -0.4375em;
  }


}

@media screen and (max-width: 736px) {
  text-indent: 7.25em;
  width: 7.25em;

   :before {
    color: #7f888f;
    margin-left: -0.0625em;
    margin-top: -0.25em;
    font-size: 1.1rem;
    z-index: 1;
  }

   :after {
    background: rgba(222, 225, 226, 0.75);
    border-radius: 0.375em;
    content: '';
    height: 3.5em;
    left: 1em;
    position: absolute;
    top: 1em;
    width: 5em;
  }
}


`
export const MainWrapper=styled.div`
display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  min-height: 100vh; 
  `
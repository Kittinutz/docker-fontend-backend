
import styled from 'styled-components'
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
export const HeaderContainer = styled.div`
  display:flex;
  height: 100%;
  width: 100%;
  background-image:url('https://q-ak.bstatic.com/images/hotel/max1024x768/113/113636149.jpg');
  padding:20% 20% 20% 20%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position: center center;
  background-color:tomato;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
            @media screen and (min-width:600){
            padding:50%;
            }
  @media (max-width: 600px) {
   padding:50% 50% 50% 50%;
   margin:10% 0 0 0;
  }
  
@keyframes fadein {
      from { opacity: 0; }
    to   { opacity: 1; }
}
/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
} `
export const HeaderWrapper = styled.div`
  display:flex;
  background-color:rgba(0,0,0,0.1);
  padding-top:20% 0 0 0;
  height:100%;
  position: absolute;
  width:100%
  z-index:1;
  right:0;
  top:0;
  `
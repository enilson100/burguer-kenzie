import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #27AE60;
    --color-primary-50: #93d7af;
    --color-secondary: #fb5757;
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20:#E0E0E0;
    --gray-0:#f5f5f5;
    --color-success: #168821;
    --color-warning: #Ffcd07;
    --color-error: #e60000;
    --color-information: #155bcb;
    --font: font-family: 'Inter', sans-serif;

   
  }

*
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  overflow-x: hidden;
	line-height: 1;
  font-family: 'Inter', sans-serif;
 
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

`;

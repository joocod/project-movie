import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
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
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	overflow-x: hidden;
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
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}
img{
	display: block;
	width: 100%;
}
button{
    border: none;
    background: transparent;
    cursor: pointer;
}
input{
    background: transparent;
    border: none;
}
body,html{
	background: #000000;
	&.no-scroll{
		overflow-y: hidden;
	}
}

/* swiper */
.swiper-button-prev,
.swiper-button-next{
    color: #fff;
    width: 60px;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    transition: 500ms;
    margin: 0;
}
.swiper-button-prev{
    left: 0;
}
.swiper-button-next{
    right: 0;
}
.swiper-button-prev:hover,
.swiper-button-next:hover{
    background: rgba(0, 0, 0, 0.9);
}

.swiper-pagination{
    top: 0!important;
    text-align: right;
    left: auto!important;
    bottom: auto!important;
    right: 60px;
}

.swiper-pagination .swiper-pagination-bullet{
    height: 3px;
    width: 10px;
    border-radius: 0;
    background: gray;
}

.swiper-pagination .swiper-pagination-bullet.active{
    background: #fff;
}

.swiper{
    padding-top: 30px;
    overflow: visible;
}
`
export default GlobalStyle;
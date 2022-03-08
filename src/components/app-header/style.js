import styled from 'styled-components';


export const HeaderWrapper = styled.div`
	height: 75px;
	color: #fff;
	background-color: #242424;

	.content {
		height: 70px;
		background-color: #242424;

		display: flex;
		justify-content: space-between;
	}

	.divider {
		height: 5px;
		background-color: #C20C0C;
	}
`;

export const HeaderLeft = styled.div`
	display: flex;

	.logo {
		display: block;
		width: 176px;
		height: 69px;
		background-position: 0 0;
		text-indent: -9999px;
	}

	.navs {
		display: flex;
		line-height: 70px;
		font-size: 14px;

		.nav {
			display: inline-block;
			position: relative;
			padding: 0 19px;
			height: 70px;
			text-decoration: none;
			color: #ccc;

			:hover, &.active {
				background-color: #000;
				color: #fff;	
			}

			&.active .subscript-icon {
				display: block;
				position: absolute;
				display: inline-block;
				width: 12px;
				height: 7px;
				bottom: -1px;
				left: 50%;
				transform: translate(-50%, 0);
				background-position: -226px 0;
			}
		}

		li:last-child .nav{
			::after {
				position: absolute;
				content: "";
				width: 28px;
				height: 19px;
				background-image: url(${require("@/assets/img/sprite_01.png")});
				background-position: -190px 0;
				top: 20px;
				right: -15px;
			}
		}
	}
`;

export const HeaderRight = styled.div`

`;
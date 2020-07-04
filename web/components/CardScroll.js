import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'

const Scroll = styled.div`
	display: flex;
	padding: 1rem;
	flex-direction: row;
	margin: 0 auto;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: wrap;
	box-sizing: border-box;
	justify-content: flex-start;
	-webkit-overflow-scrolling: touch;
	padding-bottom: 5rem;
	width: 100%;
	

	&::before {
		position: absolute;
		display: inline;
		width: 100px;
		height: 100px;
		margin-left: 100px;
		z-index: 9998;
	}

	&::-webkit-scrollbar {
		display: none;
	}

	ul {
		width: 100%;
	}
`

function CardScroll(props) {
	return <Scroll>{props.children}</Scroll>
}

export default CardScroll

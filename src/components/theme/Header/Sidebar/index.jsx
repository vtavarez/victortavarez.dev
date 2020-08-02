import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Sidebar = ({ sidebar, toggle, blog, tags, tag, article }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks blog={blog} tags={tags} tag={tag} article={article} />
  </Wrapper>
)

export default Sidebar

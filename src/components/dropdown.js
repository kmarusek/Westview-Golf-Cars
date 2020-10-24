import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const DropdownWrapper = styled.div`
  cursor: pointer
`

const Dropdown = (props) => {
  const { children, menuOptions } = props
  const [ showOptions, setShowOptions ] = useState(false)
  const wrapperRef = useRef()

  const closeMenu = useCallback(() => {
    setShowOptions(false)
    document.removeEventListener('click', closeMenu)
  }, [setShowOptions])

  useEffect(() => {
    const { current } = wrapperRef
    if (!current) return

    const handleFocus = () => {
      current.classList.add('active');
    }

    const handleBlur = () => {
      current.classList.remove('active');
    }

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    }
  }, [])

  const openDropdown = useCallback(() => {
    setShowOptions(true)
    document.addEventListener('click', closeMenu)
  }, [setShowOptions])

  const renderOptions = useMemo(() => {
    return menuOptions.map((menu, idx) => (
      <div key={`menu-${idx}`}>
        <Link to={menu.to} className="text-black">
          {menu.text}
        </Link>
      </div>
    ))
  }, [menuOptions])

  return(
    <DropdownWrapper ref={wrapperRef} onClick={openDropdown} role='button' tabIndex='0'>
      {children}
      <div className='text-right'>
        {showOptions ? renderOptions : null}
      </div>
    </DropdownWrapper>
  )
}

export default Dropdown

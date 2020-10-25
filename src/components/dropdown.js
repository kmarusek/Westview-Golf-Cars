import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TiArrowSortedUp } from 'react-icons/ti'

const DropdownWrapper = styled.div`
  cursor: pointer;
  padding-right: 2px;
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
      current.classList.add('open');
    }

    const handleBlur = () => {
      current.classList.remove('open');
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
      <div key={`menu-${idx}`} className='py-2'>
        <Link to={menu.to} className="text-black">
          {menu.text}
        </Link>
      </div>
    ))
  }, [menuOptions])

  return(
    <DropdownWrapper ref={wrapperRef} onClick={openDropdown} role='button' className={`pl-6 w-40 ${showOptions ? '' : ''}`}>
      <p className='text-right uppercase font-semibold text-lg inline-block'>{children}</p>
      <TiArrowSortedUp className={`inline-block -mt-2 mx-2 text-lg transition duration-300 ${showOptions ? 'transform rotate-180': ''}`} />
      <div className='text-right '>
        {showOptions ? renderOptions : null}
      </div>
    </DropdownWrapper>
  )
}

export default Dropdown

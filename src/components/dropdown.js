import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TiArrowSortedUp } from 'react-icons/ti'
import { usePopper } from 'react-popper'
import { useHover } from 'use-events'

const DropdownWrapper = styled.div`
  cursor: pointer;
  padding-right: 2px;
`

const Dropdown = (props) => {
  const { children, menuOptions } = props
  const [ showOptions, setShowOptions ] = useState(false)
  const wrapperRef = useRef()
  const popperRef = useRef(null)
  const { styles, attributes } = usePopper({
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 20],
        },
      },
    ],
  })
  const [active, bind] = useHover()

  useEffect(() => {
    const { current } = wrapperRef
    if (!current) return

    const handleFocus = () => {
      current.classList.add('open')
    }

    const handleBlur = () => {
      current.classList.remove('open')
    }

    current.addEventListener('mouseover', handleFocus)
    current.addEventListener('mouseout', handleBlur)

    return () => {
      current.removeEventListener('mouseover', handleFocus)
      current.removeEventListener('mouseout', handleBlur)
    }
  }, [])

  const closeMenu = useCallback(() => {
    setShowOptions(false)
    document.removeEventListener('click', closeMenu)
  }, [setShowOptions])

  const openDropdown = useCallback(() => {
    setShowOptions(true)
    document.addEventListener('click', closeMenu)
  }, [setShowOptions, closeMenu])

  const renderOptions = useMemo(() => {
    return menuOptions.map((menu, idx) => (
      <Link
        to={menu.to}
        key={`menu-${idx}`}
        className="p-2 px-4 block text-black hover:bg-primary hover:text-white text-base"
      >
        {menu.text}
      </Link>
    ))
  }, [menuOptions])
  
  return (
    <DropdownWrapper
      ref={wrapperRef}
      role="button"
      className={`relative h-12`}
      onClick={openDropdown}
      {...bind}
    >
      {children}
      <TiArrowSortedUp
        className={`inline-block -mt-2 mx-2 text-lg transition duration-300 ${
          active ? 'transform rotate-180' : ''
        }`}
      />
      {(active || showOptions) && (
        <div
          className="text-right bg-gray-200 w-48 shadow-xl"
          ref={popperRef}
          style={{
            ...styles.popper,
            top: 36,
            right: 0,
            left: 'auto',
          }}
          {...attributes.popper}
        >
          {renderOptions}
        </div>
      )}
    </DropdownWrapper>
  )
}

export default Dropdown

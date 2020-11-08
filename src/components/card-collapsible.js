import React from 'react'
import Collapsible from 'react-collapsible'
import { TiArrowSortedUp } from 'react-icons/ti'
import '../../static/style/card-collapsible.css'

const CollapsingTrigger = ({ title, className = 'bg-gray-400', }) => {
  return (
    <div className={`px-2 py-2 relative cursor-pointer bg-primary rounded-sm ${className}`} role='button'>
      <p className='collapsing__text text-center uppercase tracking-wider font-semibold text-black pl-1'>{title || 'Title'}</p>
      <div className='absolute right-0 top-0 mt-1 mr-2 arrow-up' >
        <TiArrowSortedUp className='text-black text-3xl' />
      </div>
    </div>
  )
}

export const CardCollapsible = ({ open = false, sectionTitle, children, outerClassName = '', className = '', triggerClassname = '',}) => {
  return (
    <Collapsible
      trigger={<CollapsingTrigger title={sectionTitle} className={triggerClassname} />}
      open={open}
      className={`collapsing ${className}`}
      triggerClassName='collapsing__trigger'
      openedClassName='collapsing collapsing--is-open'
      triggerOpenedClassName='collapsing__trigger collapsing__trigger--is-open'
      transitionTime={70}
      contentOuterClassName={`collapsing__outer ${outerClassName}`}
      contentInnerClassName='collapsing__inner border border-gray-300 border-top-0 p-4 pb-0'
    >
      {children}
    </Collapsible>
  )
}
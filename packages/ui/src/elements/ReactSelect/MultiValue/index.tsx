import type { MultiValueProps } from 'react-select'

import React from 'react'
import { components as SelectComponents } from 'react-select'
import { v4 as uuid } from 'uuid'

import type { Option } from '../types.js'

import { useDraggableSortable } from '../../DraggableSortable/useDraggableSortable/index.js'
import './index.scss'

const baseClass = 'multi-value'
export const MultiValue: React.FC<MultiValueProps<Option>> = (props) => {
  const {
    className,
    data: { value },
    innerProps,
    isDisabled,
    // @ts-expect-error // TODO Fix this - moduleResolution 16 breaks our declare module
    selectProps: { customProps: { disableMouseDown } = {}, isSortable } = {},
  } = props

  const { attributes, isDragging, listeners, setNodeRef, transform } = useDraggableSortable({
    id: typeof value === 'object' && 'path' in value ? String(value.path) : uuid(),
    disabled: !isSortable,
  })

  const classes = [
    baseClass,
    className,
    !isDisabled && 'draggable',
    isDragging && `${baseClass}--is-dragging`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <SelectComponents.MultiValue
      {...props}
      className={classes}
      innerProps={{
        ...innerProps,
        ...attributes,
        ...listeners,
        onMouseDown: (e) => {
          if (!disableMouseDown) {
            // we need to prevent the dropdown from opening when clicking on the drag handle, but not when a modal is open (i.e. the 'Relationship' field component)
            e.stopPropagation()
          }
        },
        ref: setNodeRef,
        style: {
          transform,
        },
      }}
    />
  )
}
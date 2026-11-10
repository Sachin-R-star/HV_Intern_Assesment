import React from 'react';

/**
 * Clean inline-editable text component that gracefully toggles between
 * regular semantic HTML and an active in-place contentEditable field.
 */
export default function EditableText({
  as: Component = 'span',
  value = '',
  onSave,
  isEditable = false,
  className = '',
  placeholder = 'Type here...',
  children,
  ...restProps
}) {
  if (!isEditable) {
    return (
      <Component className={className} {...restProps}>
        {children || value}
      </Component>
    );
  }

  const handleBlur = (e) => {
    const nextVal = e.currentTarget.innerText.trim();
    if (nextVal !== value && onSave) {
      onSave(nextVal || value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && Component !== 'p') {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <Component
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`relative cursor-text rounded transition-all outline-dashed outline-1 outline-gold-400/70 hover:outline-2 hover:outline-gold-500 hover:bg-gold-50/40 px-1 -mx-1 ${className}`}
      title="Click to edit text"
      {...restProps}
    >
      {value}
    </Component>
  );
}

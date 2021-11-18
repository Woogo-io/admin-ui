import clsx from 'clsx';
import { EditorState } from 'draft-js';
import React from 'react';
import { IconType } from '../../../theme/icons';
import { STYLES, OnToggleType, TypeToggleType } from './constants';
import StyleButton from './StyleButton';
import theme from '../../../theme/default';

export interface StyleControlsProps {
  editorState: EditorState;
  onToggle: OnToggleType;
}

const StyleControls = (props: StyleControlsProps) => {
  const { editorState, onToggle } = props;

  const selection = editorState.getSelection();

  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const currentStyle = editorState.getCurrentInlineStyle();

  const isActive = (type: TypeToggleType, style: string) => {
    if (type === 'block') return blockType === style;
    if (type === 'inline') return currentStyle.has(style);
    return false;
  };

  return (
    <div className={clsx(theme.editor.header.classic)}>
      {STYLES.map((style) => (
        <StyleButton
          key={style.label}
          active={isActive(style.type as TypeToggleType, style.value)}
          label={style.label}
          onToggle={onToggle}
          style={style.value}
          type={style.type as TypeToggleType}
          icon={style.icon as IconType}
        />
      ))}
    </div>
  );
};

export default StyleControls;

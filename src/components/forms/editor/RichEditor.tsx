/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import Draft, {
  Editor, EditorState, RichUtils,
} from 'draft-js';
import clsx from 'clsx';
import theme from '../../../theme/default';
import StyleControls from './StyleControls';

export interface RichEditorProps {
  className?: string;
  style?: string;
  error?: boolean;
  placeholder?: string;
  editorState: EditorState;
  onChange: (state: EditorState) => void;
  blockRendererFn?: (block: Draft.ContentBlock) => any;
  customStyleMap?: Draft.DraftStyleMap;
}

const handleKeyCommand = (onChange: (state: EditorState) => void) => (command: string, editorState: EditorState) => {
  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState) {
    onChange(newState);
    return 'handled';
  }

  return 'not-handled';
};

const RichEditor = (props: RichEditorProps) => {
  const {
    editorState, placeholder, onChange, className, error, blockRendererFn, customStyleMap,
  } = props;

  const editor = useRef<Editor>(null);

  const onToggle = (type: 'block' | 'inline', style: string) => {
    if (type === 'inline') {
      onChange(
        RichUtils.toggleInlineStyle(editorState, style),
      );
    } else if (type === 'block') {
      onChange(
        RichUtils.toggleBlockType(editorState, style),
      );
    }
  };

  const currentContent = editorState.getCurrentContent().getPlainText();

  return (
    <div className={clsx(theme.editor.classic)}>
      <StyleControls editorState={editorState} onToggle={onToggle} />
      <hr className={clsx(theme.editor.hr)} />
      <div className={clsx(
        className,
        error ? theme.editor.text.invalid : theme.editor.text.classic,
      )}
      >
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand(onChange)}
          ref={editor}
          spellCheck
          onChange={onChange}
          blockRendererFn={blockRendererFn}
          customStyleMap={customStyleMap}
        />
        {placeholder && currentContent === '' && (
          <span className={clsx(theme.editor.placeholder)}>
            {placeholder}
          </span>
        )}
      </div>
    </div>
  );
};

export default RichEditor;

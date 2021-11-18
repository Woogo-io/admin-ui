export const STYLES = [
  { type: 'block', label: 'H1', value: 'header-one' },
  { type: 'block', label: 'H2', value: 'header-two' },
  { type: 'block', label: 'H3', value: 'header-three' },
  { type: 'block', label: 'H4', value: 'header-four' },
  { type: 'block', label: 'H5', value: 'header-five' },
  { type: 'block', label: 'H6', value: 'header-six' },
  {
    type: 'block', label: 'Blockquote', value: 'blockquote', icon: 'QuoteRightIcon',
  },
  {
    type: 'block', label: 'UL', value: 'unordered-list-item', icon: 'ListUlIcon',
  },
  {
    type: 'block', label: 'OL', value: 'ordered-list-item', icon: 'ListOlIcon',
  },
  {
    type: 'block', label: 'Code Block', value: 'code-block', icon: 'CodeBlockIcon',
  },
  {
    type: 'inline', label: 'Bold', value: 'BOLD', icon: 'BoldIcon',
  },
  {
    type: 'inline', label: 'Italic', value: 'ITALIC', icon: 'ItalicIcon',
  },
  {
    type: 'inline', label: 'Underline', value: 'UNDERLINE', icon: 'UnderlineIcon',
  },
  {
    type: 'inline', label: 'Monospace', value: 'CODE', icon: 'TerminalIcon',
  },
];

export type TypeToggleType = 'block' | 'inline';
export type OnToggleType = (type: TypeToggleType, style: string) => void;

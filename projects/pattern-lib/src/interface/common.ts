export type typeField =
  | 'button'
  | 'text'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'text'
  | 'time'
  | 'tel'
  | 'url'
  | 'week';

export interface DisplayedColumnsInterface {
  sort: boolean;
  dataIndex: string;
  title: string;
}

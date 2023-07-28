interface Props {
  /**
  * Component's HTML Element
  *
  * @default 'div'
  */
  component?: string;
  colors?: {
    /**
     *
     * @default 'fill-primary dark:fill-md-dark-primary'
     */
    toolbarIconIos?: string;
    /**
     *
     * @default 'fill-black'
     */
    toolbarIconMd?: string;
    /**
     *
     * @default 'bg-transparent'
     */
    inputBgIos?: string;
    /**
     *
     * @default 'border-[#c8c8cd] dark:border-white dark:border-opacity-30'
     */
    borderIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-variant'
     */
    inputBgMd?: string;
     /**
     *
     * @default 'dark:placeholder-white dark:placeholder-opacity-40'
     */
     placeholderIos?: string;
    /**
     *
     * @default 'placeholder-md-light-on-surface-variant dark:placeholder-md-dark-on-surface-variant'
     */
      placeholderMd?: string;
  }
  /**
   * Messagebar id attribute
   */
  id?: string;
  /**
   * Additional messagebar classes
   */
  style?: React.CSSProperties;
  /**
   * Messagebar name
   */
  name?: string;
  /**
   * Messagebar placeholder
   *
   * @default 'Message'
   *
   */
  placeholder?: string | number;
  /**
   * Messagebar value
   */
  value?: any;
  /**
   * Renders outer hairlines (borders). If not specified, will be enabled for iOS theme
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Additional left styles
   */
  leftClassName?: string;
  /**
   * Additional right styles
   */
  rightClassName?: string;
  /**
  * Content of the Messagebar's "left" area
  */
  left?: string | number | React.ReactNode;
  /**
  * Content of the Messagebar's "right" area
  */
  right?: string | number | React.ReactNode;
  /**
   * `input` event handler
   */
  onInput?: (e: any) => void;
  /**
   * `change` event handler
   */
  onChange?: (e: any) => void;
}

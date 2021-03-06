import * as React from 'react';
import { IconProps } from "../../../index.type";
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export declare type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
export declare type AutoComplete = 'on' | 'off';
export declare type Size = 'tiny' | 'regular' | 'large';
export interface InputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
    name?: string;
    type?: InputType;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    size?: Size;
    icon?: string;
    inlineLabel?: string;
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    autocomplete?: AutoComplete;
    autoComplete?: AutoComplete;
    readonly?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    error?: boolean;
    info?: string;
    minWidth?: string;
    onClear?: (e: React.MouseEvent<HTMLElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    actionIcon?: React.ReactElement<IconProps>;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;

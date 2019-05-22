    
import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperFormFieldComponent } from './wrappers/form-field.wrapper';
import { FormlyFieldInputComponent } from './types/input';
import { FormlyFieldSelectComponent } from './types/select';
import { FormlyFieldRadioComponent } from './types/radio';
// import { FormlyAccordianFormFieldComponent } from './wrappers/form-field.accordian';

export const FIELD_TYPE_COMPONENTS = [
  FormlyFieldInputComponent,
  // FormlyFieldCheckbox,
   FormlyFieldRadioComponent,
  FormlyFieldSelectComponent,
  // FormlyFieldTextArea,
  // FormlyFieldMultiCheckbox,
  FormlyWrapperFormFieldComponent,
  // FormlyAccordianFormFieldComponent
];

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInputComponent,
      wrappers: ['form-field'],
    },
    // {
    //   name: 'checkbox',
    //   component: FormlyFieldCheckbox,
    //   wrappers: ['form-field'],
    // },
    {
      name: 'radio',
      component: FormlyFieldRadioComponent,
      wrappers: ['form-field'],
    },
    {
      name: 'select',
      component: FormlyFieldSelectComponent,
      wrappers: ['form-field'],
    },
    // {
    //   name: 'textarea',
    //   component: FormlyFieldTextArea,
    //   wrappers: ['form-field'],
    // },
    // {
    //   name: 'multicheckbox',
    //   component: FormlyFieldMultiCheckbox,
    //   wrappers: ['form-field'],
    // },
  ],
  wrappers: [
    {name: 'form-field', component: FormlyWrapperFormFieldComponent },
  ],
};

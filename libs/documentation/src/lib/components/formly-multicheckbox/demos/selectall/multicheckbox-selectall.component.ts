import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './multicheckbox-selectall.component.html',
  selector: `sds-formly-multicheckbox-selectall-demo`,
})

export class MultiCheckboxSelectAll {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'domains',
      type: 'multicheckbox',
      defaultValue: { cfda: true, opp: true, fh: false },
      templateOptions: {
        label: 'Domains',
        description: 'Select any socio-economic categories which reflect the current status of your entity',
        required: true,
        selectAllOption: true,
        toolTip: ' you agree to the terms and conditions ',
        position: 'bottom',
        options: [
          {
            key: 'cfda',
            value: 'Assistance Listing',
            position: 'bottom',
            toolTip: '<b>Assistance Listing</b><u>Tool tip with style</u>',

          },
          {
            key: 'opp',
            value: 'Contract Opportunities',
            position: 'bottom',
            toolTip: 'Contract Opportunities',

          },
          {
            key: 'ei',
            value: 'Entity Information'
          }, {
            key: 'fh',
            value: 'Federal Hierarchy'
          },
          {
            key: 'wd',
            value: 'Wage Determinations'
          }
        ]
      },
    },
  ];
}

import { Component } from '../../../geoffsrm.page.holder'

export class LeadsNameInfo extends Component {

 constructor(page) {
  super(page)
 }

 leadsNameInfoTableFirstRowCellNumber(number) {
      return this.page.locator(`(//table//tr)[3]//td[${number}]`)
 }


 
}
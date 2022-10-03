import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  expanded = false;
  constructor() { }


  dropdownCustomUpDown() {
    const checkboxes = document.getElementById("checkboxes");
    const focusSelect = document.getElementById("select_custom");
    const arrow = document.getElementById("icon");
    const arrowSvg = document.getElementsByTagName("i")[0];

    if (!this.expanded) {
      checkboxes.style.display = "block";
      arrow.style.transform = "rotate(0deg)";
      arrow.style.top = "calc(50% - 6px)";
      focusSelect.style.border = "#3366FF 2px solid";
      arrowSvg.style.backgroundImage = "url(../../assets/images/chevron.svg)"
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      arrow.style.transform = "rotate(-180deg)";
      arrow.style.top = "calc(50% - 11px)";
      focusSelect.style.border = "#DBDBDB 2px solid"
      arrowSvg.style.backgroundImage = "url(../../assets/images/chevron_black.svg)"
      this.expanded = false;
    }
  }

  getValueSelectCustom(event) {
    const select = document.getElementById('select_custom');
    const opt = document.createElement('option');
    opt.text = event.target.value;
    opt.id = "optSelected";
    opt.selected = true;
    select.append(opt);
  }

}

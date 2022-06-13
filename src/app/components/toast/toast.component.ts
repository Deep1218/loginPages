import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  host: {
    class:
      'toast-container position-fixed bottom-0 start-50 translate-middle-x p-3',
    style: 'z-index: 1200',
  },
})
export class ToastComponent implements OnInit {
  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
}

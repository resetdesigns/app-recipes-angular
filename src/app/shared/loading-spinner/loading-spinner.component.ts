import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; display: block"
      width="25px"
      height="25px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="25"
        stroke-width="10"
        stroke="#0a0a0a"
        stroke-dasharray="39.269908169872416 39.269908169872416"
        fill="none"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  `,
})
export class LoadingSpinnerComponent {}

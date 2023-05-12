import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        <p>BIZCARD &copy; 2023  by Adi Tayri</p>
        <br>
        <p> Email: <a href="mailto:BIZCARD@gmail.com">BIZCARD@gmail.com</a></p>
      </div>
    </footer>
  `,
  styles: [
    `
    footer{
        position: relative;
        bottom: 0;
       width: 100%;
       height: 50px; 
       background-color: #333;
       color: #fff;
       padding: 20px 0;
       align-items: center;
    }
    footer .container{
        max-width: var(--max-width);
        margin: 0 auto;
        text-align: center;
    }
    footer a {
        color: #fff;
        font-size:14px;
      }
      footer p {
        margin: 0;
        font-size:15px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

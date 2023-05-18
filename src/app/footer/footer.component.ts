import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        <p>BIZCARD &copy; 2023  by Adi Tayri</p>
        <p> Email: <a href="mailto:aditayri@gmail.com">aditayri@gmail.com</a></p>
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
        margin: 0 auto;
        text-align: center;
    }
    footer a {
        color: #fff;
        font-size:12px;
      }
      footer p {
        margin: 0;
        font-size:12px;
        margin-top:3px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

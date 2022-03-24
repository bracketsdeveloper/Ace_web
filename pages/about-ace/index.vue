<template>
  <div class="App">
      <BreadCrumb page-name="About Ace" />
    <section class="wpo-about-section pt-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-img">
              <img src="/assets/images/about.5dcaca85.jpg" alt="" />
              <div class="shape-1"></div>
              <div class="shape-2"></div>
              <!-- <span class="ab-btn">ACE</span> -->
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <span>Our Core Values</span>
                <h2>We believe in being client-centric and providing gifts that reflect <span>emotions..</span> just as you want!!</h2>
                <div class="transparent-text">Values</div>
              </div>
              <p>
                Trust us to streamline the gifting process for you. Our gifting solutions will essentially strengthen your business ties and uplift a thriving work culture among employees. 
              <br>Ace promotes your brand through gifting with:
              </p>
              <ul>
                <li>
                  <i class="ti-plus"></i> Added Value
                </li>
                <li>
                  <i class="ti-plus"></i> Creativity
                </li>
                <li>
                  <i class="ti-plus"></i> End to end solutions.
                </li>
              </ul>
              <NuxtLink class="theme-btn-s2" to="/gift-guide">Explore</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wpo-work-section section-padding pt-0">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="section-title-s4">
              <span>Process Progress</span>
              <h2>Our Well-Rounded Process</h2>
              <div class="transparent-text">Process</div>
            </div>
          </div>
        </div>
        <div class="wpo-work-wrap">
          <div class="row custom-row">
            <div class="col col-lg-2 col-md-6 col-12">
              <div class="wpo-work-iem">
                <div class="wpo-work-icon-wrap">
                  <div class="wpo-work-icon">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTIzMjVDQUZGQjJGMTFFQkI0NEZENzk2REMzNTZEM0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTIzMjVDQUVGQjJGMTFFQkI0NEZENzk2REMzNTZEM0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGExZmE5NzQtNGJhMi0zNDRkLTk4N2YtODlmMjhlYTZkNGJkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZjNzcyOTItNWQyMS05YjQ4LTgyZWMtZDNhOGNjYTE3N2Q3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+91cBXAAABShJREFUeNrMmX1oVlUcx5/Nbe6FjWJuarRKczZrmjWzPywqX8psFCvKkowgNDAFRbC3UYjUsjQqtQKDwvwnLCw2GaSFQW+UwaZD12o2etPszZflRtpu30OfS4ez8zx7dp/bYwc+PPf+fuf8zu+ec37n/u55coIgSMRYWvitj8tgTswO/s7v2XEZzEvEW36J2V7sI9jPb+H/dQSfFrE+ccKMoIcSsUyMTqKPE9PHUvocpE82xRXiiDgkJoiTSZ7vXCJ2npgiysyyEcfEftEqmkVPkvZFoluMFZXi53RH0DAr+Kf0iLGO7lLRGvxbTosusRPM9Z+WfreY7tgYIw6in5PMj6GGfyYG3rVka62ON4lpKdpPFeut+hst3U5kM1P5kM4auUpcIQrERxh9TYwaxjor5WFM2SvKRB22E5k6GLKfDhZ4dEXiWfElmFEr9NS72Vo2afWbrnO7MHy9E+mlXN+I/kcIkIWjV+LMSMBsxOLgUgwusWSTxF/IR1trtRDCtVXJtal7sdV+IfJVmTpYhKEvLNkU0SsOQcB9wGiVOrKwXi9tQzufWG0iO/g4Ri6yZHuRmescOm9jW7K3qDZ0OchMabfqXIDsyUwc/EN0O7L7MbzZU388uPLNtFnsyDtFf1QHqzG63KNbh26WNe1d1n5nric7G/46j51l6CZGcXAFjeu4N4v/CSL6BBQTCAPUfVA8ZAVGBRHcS/1d2Ai3oMuoe28qB03lGtZZrfVau0lsE/nc34WxPrGPeyN/E3mFZbgC2TbuF9CmD/mdyMMob7Jef7X4YnwqNMINweAyxvM0K9HlOfJ+AsKt3+5ZX3nYWMl9MferCSa3vGDywa3ioMglfzhB6j6HTGWFGLCS0TdEl9giDnA93pOpjBOdXE8S94iJ3PfxO5LffH4XkxEl6PPjVGtwNU9RzX2V2GNt0OGoXct9ixgHLciuoU6btS73YCtBcCQLxCGDZAaNb/fonkI3wwkouyx3Xm1NHjvz0V0ZxcFwvbQ68gnsXz3OnmdeeY9ApbM39tDmQsdWmHKNiLpRN2Mg35J1OMFigqzR07YRnf2wHZa+ANn2TN4kNRh5zpItsqZskzWl3xOVJVzbSW0T14ssOxudNR45m2n27PZLLAdus5xOWO9dI7vVqveA58G3x5FujST6jjpTPU/UO6+zDda+OhtdPXXtqT0mTnEdS8I6lU47mUZXX2VlOWFaX+WpZ95aB6gzOc6M2jDXs9BdKp0ItikXh7FxQ1wpv0kmvxVvO06+FeED/TzxjbiDe2Pzu0wSVpNNf41DDZb8MWRzMzxRuAU73clOFVI5eJb14e37bv1NHBmGMztIw1x5+Jo8RZ+D2uYmOZIYIT4TDeJ9j/5hjkfq0jj+mc7RSJFHt5s+PqXPxHCOPtL5mHo1jbpbqVscpa9M1tAHdHySjNpHmKC+F7WfTM4Hj/L7DmeCOe7kkGPOF7+eiRPWz8UoEtNU5bD4SlydzRPWheISFvaOVAMgykWpuJvsPSsO1nAObRy4jql0d4QBpjmPB6nJ9hR/KKrE+UPU+0nsE7OzOcXV4hymroGR9AWJKcU8SDVrMZZD9KF4KRh+eTFKX1GnuIxpKxDTksxEwDps5zP2cnE8W1N8nLVVK35I42E6ojiX8ETecMpa3q/9jJaPfgZh/Zn6K6xRrBEv8x9HOCOnCaL7xCrxTNz/NKVLOQHwqEe3Jp0T1P8yWXAj2mQ2uXxYvY7s+Uztx/V/2xa+/PJIxUwm80octv8WYAD11YZ9L49ibgAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div class="wpo-work-icon-thumb"><span>1</span></div>
                </div>
                <div class="wpo-work-text">
                  <h4>Product Selection</h4>
                </div>
              </div>
            </div>
            <div class="col col-lg-2 col-md-6 col-12">
              <div class="wpo-work-iem">
                <div class="wpo-work-icon-wrap">
                  <div class="wpo-work-icon">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAuCAYAAAC1ZTBOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QThCQjI3MEFGQjJGMTFFQkFFNThFQkE5NDVCM0UyNkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QThCQjI3MDlGQjJGMTFFQkFFNThFQkE5NDVCM0UyNkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGExZmE5NzQtNGJhMi0zNDRkLTk4N2YtODlmMjhlYTZkNGJkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZjNzcyOTItNWQyMS05YjQ4LTgyZWMtZDNhOGNjYTE3N2Q3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uO+gUwAABHRJREFUeNrMmWlIFVEUx5/2ypLK1FZTaRf7UmYbhURUFFTY/qE0iyCsoD2ybJUo+lBkiVJBZCQVLbRaJBHRYlCRX7RFW223vdS21+t/4j91HWaevufMqwM/5s68OzNnzrnn3HPvC3C73Q7KVdDPYZ+UgEHgtbc3BihKykOiQB+LlYsEBWy/AcPBW4N+cu1DbUq+Aj9AhMVKBoNKcAEkgECTfs9Bd/Be/4Pc0AHcB63AAxvc3IbHLNBWub4dLATrwE3QDjQ3eoAT5IOO/IJwG5QM4LEnOAQmgVzQGqTyt2oQR086jCwZC+aAs6ARaAImsG2FaOMpne39fMdYUKgMCVNx8tgLtGTk7QBJ/NIKC5SUIbQUdAEteO09A6g/z795/ky3O9P9V37yuFsCymYO8F3SXsN2hFFfcfc8kKGMn41gmvIdyRwz9UW8EqM8t2ldXaG5ezXHoeTJNF2fj6DUArdXge++3KgpGc0x+M6gzzHyzySQCfYRA+eh4z8UseRx8JIRFm3QR9JFNwve9RXcUVKSV0pKWpgKhoK+nBZTGUAync0CmywyiiTsIl/HZAoIoTUPM39lUsmTwGWRJR/46u65YKvuehorFpG75J8GzjYwHnyhxSbT1f9V4IgcAWXMk/t0fXowh1rh7hzFQ0bSQGmPoNEKNCWHsWR7YXDjYLDCIqOcqEXJT0q/UWzniZLTwS6l8NRLlkXJXILyaS19pPCYSAWnMCVucFLBQhacnQxu/GFTMayPDQffv4fty1wt/PkxG1xnqdabaSfEj7GhlWpisJ/gImc/WRuVOBnVazn5B1DBNkpFLZX0ZgsUqaQbS01+c3A1KYuxJWAL8/VMUXIMOKO7aazRgsgPlvzK4XWORjr62+0sLJuBV8AFevqh4BVOKUXvIraTeO7iecvfq1le7AregDt+UlDIB19AIHgOKng9ngqu1/o6OcPk0dzFJgk/ysRN4ppyH13sYiG8lUvdAbx+gYX2cnWNI3IN3ALlBl883+1ZEny0ZK7yjNO8torno9W+2oyTyVItjtPgSjCDkXaeC3gzS5bVM1i0DBLMLHODM06N1eI3cBuU8FjOrwm1eUxm8z0reX6a5531fR00rV4m+SFwHoNqtuP43hyjvlqjF/jAaOvnBwXTqVQizzXvhXtSUihmrrRbwVAqVMzzFGVjItxsc0CTRrp6zi7J5XE4j7uVPaMgT9WHpqTLZgXjwWgq9kRRuMjDvmWNTdR7LJUkDTQGDS1W8DO3b9rSYtFc76ezJNsJ2oNnRhtWGjlu/4g2P5coc/f82jasNJmtlOzJrEKsIpIVjlT+e0Ei90XH1GXzyqnb7HzEdoJS49VXvnMcBnFxJXKQxzCpF8EQA30M3S3E2Ojm/XxHhsnvlSDMyN1q4GgibmhmkRVlKXCAFgulW2VFeAUs0PWtMF1L+SlxV4GByvwc6c1znDbnxXE8yq7dJbY3Mkd6vZS0S2IZkMVKUb3M1/WuXRLFFDSSf43E+7I/afeYfMYxuLg+z/klwAB5pyK29Etq2gAAAABJRU5ErkJggg=="
                      alt=""
                    />
                  </div>
                  <div class="wpo-work-icon-thumb"><span>2</span></div>
                </div>
                <div class="wpo-work-text">
                  <h4>Sample Approval</h4>
                </div>
              </div>
            </div>
            <div class="col col-lg-2 col-md-6 col-12">
              <div class="wpo-work-iem">
                <div class="wpo-work-icon-wrap">
                  <div class="wpo-work-icon">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjVFN0E5RTdGQjMwMTFFQjhDMjFDRDBFRTY0QURCREEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjVFN0E5RTZGQjMwMTFFQjhDMjFDRDBFRTY0QURCREEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGExZmE5NzQtNGJhMi0zNDRkLTk4N2YtODlmMjhlYTZkNGJkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZjNzcyOTItNWQyMS05YjQ4LTgyZWMt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"
                      alt=""
                    />
                  </div>
                  <div class="wpo-work-icon-thumb"><span>3</span></div>
                </div>
                <div class="wpo-work-text">
                  <h4>Custom Branding</h4>
                </div>
              </div>
            </div>
            <div class="col col-lg-2 col-md-6 col-12">
              <div class="wpo-work-iem">
                <div class="wpo-work-icon-wrap">
                  <div class="wpo-work-icon">
                    <img
                      src="/assets/images/qlty.png"
                      alt=""
                    />
                  </div>
                  <div class="wpo-work-icon-thumb"><span>4</span></div>
                </div>
                <div class="wpo-work-text">
                  <h4>Quality Assessment</h4>
                </div>
              </div>
            </div>
            <div class="col col-lg-2 col-md-6 col-12">
              <div class="wpo-work-iem">
                <div class="wpo-work-icon-wrap">
                  <div class="wpo-work-icon">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlBMDI2ODJGQjMwMTFFQjg4RjBDNTE4MEVGN0FFNTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlBMDI2ODFGQjMwMTFFQjg4RjBDNTE4MEVGN0FFNTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGExZmE5NzQtNGJhMi0zNDRkLTk4N2YtODlmMjhlYTZkNGJkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZjNzcyOTItNWQyMS05YjQ4LTgyZWMt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"
                      alt=""
                    />
                  </div>
                  <div class="wpo-work-icon-thumb"><span>5</span></div>
                </div>
                <div class="wpo-work-text">
                  <h4>Product Delivery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wpo-testimonials-section section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-4 col-lg-12">
            <div class="testimonials-left">
              <span>Testimonial</span>
              <h3>What Our Clients Have To Say</h3>
              <p>
                Paving the way to build business bonds through gifting.
              </p>
              <NuxtLink to="/contact-us" class="theme-btn">Get in Touch</NuxtLink>
            </div>
          </div>
          <div class="col-xl-8 col-lg-12">
            <div class="testimonials-wrapper regular slider">
                <VueSlickCarousel v-bind="slickOptions" ref="slick" >
              <div>
                <div
                  class="testimonials-item"
                  tabindex="-1"
                  style="width: 100%; display: inline-block"
                >
                  <div class="testimonials-item-top">
                    <p>
                      Thanks to the continual efforts and impeccable services provided by Ace, gifting has now become convenient and simple.
                    </p>
                  </div>
                  <div class="testimonials-item-bottom">
                    <div class="testimonials-item-bottom-author">
                      <img
                        src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QSzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYjc3Y2Y0MC0wNWZlLTQ1OTctOGE2Ni03MGExOTM1ODJiNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzM1NEMwMjdGRThCMTFFQkJGQzA4MkJFMDA0MkFCMzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzM1NEMwMjZGRThCMTFFQkJGQzA4MkJFMDA0MkFCMzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YWMyOTc0Yy1lOGJkLTQ5NjQtYTdmYi0xNGYwZWFhODQ3NWIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YmI3N2NmNDAtMDVm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"
                        alt=""
                      />
                    </div>
                    <div class="testimonials-item-bottom-author-text">
                      <h3>Sara Watson</h3>
                      <span>UX?UI Designer</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  class="testimonials-item"
                  tabindex="-1"
                  style="width: 100%; display: inline-block"
                >
                  <div class="testimonials-item-top">
                    <p>
                      Thank you for making the whole Gifting experience easy and stress-free.
                    </p>
                  </div>
                  <div class="testimonials-item-bottom">
                    <div class="testimonials-item-bottom-author">
                      <img
                        src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QSraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYjc3Y2Y0MC0wNWZlLTQ1OTctOGE2Ni03MGExOTM1ODJiNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ5ODlGMEI4NEI3MTFFQzgxRTBDNjQ3NzdERTJFNkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ5ODlGMEE4NEI3MTFFQzgxRTBDNjQ3NzdERTJFNkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMzU0QzAyNkZFOEIxMUVCQkZDMDgyQkUwMDQyQUIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMzU0QzAyN0ZFOEIxMUVC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"
                        alt=""
                      />
                    </div>
                    <div class="testimonials-item-bottom-author-text">
                      <h3>David Miller</h3>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  class="testimonials-item"
                  tabindex="-1"
                  style="width: 100%; display: inline-block"
                >
                  <div class="testimonials-item-top">
                    <p>
                      Thanks to Ace, we’ve now established a well-oiled process, receive great feedback on our gifts. 
This further boosts our business relationships.
                    </p>
                  </div>
                  <div class="testimonials-item-bottom">
                    <div class="testimonials-item-bottom-author">
                      <img
                        src="data:image/jpeg;base64,/9j/4QA4RXhpZgAASUkqAAgAAAABAJiCAgATAAAAGgAAAAAAAABDb29raWUgU3R1ZGlvIDIwMTcAAAAA/+wAEUR1Y2t5AAEABAAAAGQAAP/hBkdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmMyMzY1ZjZmLTk0MGYtNGI2OS05YmVmLTg5MTc1ZGJiODRjYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBREZGQzgzOUZFOEIxMUVCQTlBOUQ2QzkxMzA5MUQwOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBREZGQzgzOEZFOEIxMUVCQTlBOUQ2QzkxMzA5MUQwOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjY0MDlkZC0yNzE5LTQxZjAtOWE5Ni1lNGFmZmE1ZTgyYjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzIzNjVmNmYtOTQwZi00YjY5LTliZWYtODkxNzVkYmI4NGNhIi8+IDxkYzpyaWdodHM+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkNvb2tpZSBTdHVkaW8gMjAxNzwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6cmlnaHRzPiA8ZGM6Y3JlYXRvcj4gPHJkZjpTZXE+IDxyZGY6bGk+U2V2YSBMZXZpdHNreTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NeSBwbGFjZSBpcyByaWdodCBiZWhpbmQgY29ybmVyLiBQb3NpdGl2ZSBhdHRyYWN0aXZlIHlvdW5nIGNhdWNhc2lhbiBmZW1hbGUgd2l0aCBjdXJseSBoYWlyIGluIHN0eWxpc2ggZXlld2VhciBwb2ludGluZyBsZWZ0IGFuZCBzbWlsaW5nIGNoZWVyZnVsbHksIGFza2luZyBmcmllbmRzIHRvIGNvbWUgdG8gaGVyIGhvdXNlPC9yZGY6bGk+IDxyZGY6bGkgeG1sOmxhbmc9IngtcmVwYWlyIj5NeSBwbGFjZSBpcyByaWdodCBiZWhpbmQgY29ybmVyLiBQb3NpdGl2ZSBhdHRyYWN0aXZlIHlvdW5nIGNhdWNhc2lhbiBmZW1hbGUgd2l0aCBjdXJseSBoYWlyIGluIHN0eWxpc2ggZXlld2VhciBwb2ludGluZyBsZWZ0IGFuZCBzbWlsaW5nIGNoZWVyZnVsbHksIGFza2luZyBmcmllbmRzIHRvIGNvbWUgdG8gaGVyIGhvdXNlPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7QBeUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACYcAVoAAxslRxwCAAACAAIcAnQAEkNvb2tpZSBTdHVkaW8gMjAxNzhCSU0EJQAAAAAAEJ+hesbQ6uN0NTqYoL4xdRz/7gAOQWRvYmUAZMAAAAAB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"
                        alt=""
                      />
                    </div>
                    <div class="testimonials-item-bottom-author-text">
                      <h3>Elizabeth Anne</h3>
                      <span>Fasion Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wpo-fun-fact-section wpo-fun-fact-section-s3">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="wpo-fun-fact-grids clearfix">
              <div class="grid">
                <div class="info">
                  <h3>82</h3>
                  <p>Categories</p>
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <h3>45</h3>
                  <p>Clients</p>
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <h3>15</h3>
                  <p>Countries</p>
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <h3>100%</h3>
                  <p>Convenient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'AboutAcePage',
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
    }
  },
  mounted() {
    AOS.init()
  },
  
}
</script>

<style scoped>
nav {
  background-color: #fff !important;
}

.custom-row{
  justify-content: space-between;
  align-items: center;
}

.wpo-testimonials-section .testimonials-wrapper .testimonials-item .testimonials-item-top {
    min-height: 241px;
}
</style>
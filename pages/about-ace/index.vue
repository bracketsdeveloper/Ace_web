<template>
  <div class="App">
      <BreadCrumb page-name="About Ace" bg-image="bread5.png" />
    <section class="wpo-about-section pt-120">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-img">
              <img src="/assets/images/about_ace.jpg" alt="" />
              <div class="shape-1"></div>
              <div class="shape-2"></div>
              <!-- <span class="ab-btn">ACE</span> -->
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <span>Our Core Values</span>
                <h2>We believe in being <br />client-centric and providing<br /> gifts that reflect <span>emotions..</span><br /> just as you want!!</h2>
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
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAYAAAClgknJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlBMDI2ODJGQjMwMTFFQjg4RjBDNTE4MEVGN0FFNTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlBMDI2ODFGQjMwMTFFQjg4RjBDNTE4MEVGN0FFNTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGExZmE5NzQtNGJhMi0zNDRkLTk4N2YtODlmMjhlYTZkNGJkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6N2ZjNzcyOTItNWQyMS05YjQ4LTgyZWMtZDNhOGNjYTE3N2Q3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rsq0BgAABaVJREFUeNrUmnlsFVUUxuf1tQhFsPDAQqtd1JIGogS1VLRVXLDRqhGFPxpxo0YMoLgUDE0xiqHEWBRogKhEiIC44IJLg9EAxiYooOIWI0uoArFiROHZQqF0/K75bjyZ3nlv5vVNbU/yy73v3O2cmbucO3kh27atgCQNrAIhcB84HsgoyoEAuBocsf+To+C6IMYKwvjnhOHjQDE4xd/1INRTHSgBv9DQDYbyN1j2KyjtaQ7Uiqc+mbpssJ/kUne7qPdMT3DgYvATDfpQ6B+2O8ujovwD6vaBov/LgXnCuDupGwS+oO5zMAycDRqp+xIMZd0K0X5+dzowEnzNgbeAM6mfJgx63NCuSpTPoK4v+Ji678CFQTswWxjxgDBiM3XfgFEx2hfyLSj5DAygvlL0Wx2EAwVgGwfYCSLU3yMGftLHwDWiXSV1Z4kxdtDZpDgwXQz2iGEh7uFi9vs2LwI/so9NIEz9TDHeQ11xIEdMjR+4LSr9JDFAbRK2wvmivwrqMjkdbW4A+X4dmCo6rRH6t6g7lMzDiCd2E/t+T+jnCDvu9+JAJjtQsheMoL4MdFC/OI4xaiqMdiEcp+2zwuBy6vLFVGsAWW4OVLickmuo+8NDQFbmCOKcosqu9xAIHmb99UK/wHDu/OvAcLCWBQfEXjwetFL/AkiLM3Ae657mdjsLHCcq/xhoZ51cD29xGeueBNeKbbhJOJdlcftzeruEuhZwg8d5XM02xUKnYyH9u5h15nrsU40dZZulQr9eb936yalwdyuYAHazcJ04Zb1Qx3ZWDAcs1qnz0W86eEXETmWMAJTNeam40zSBSeBdcBXvOe3gDp93o2NM68FfzEeYPs00w1HXi7SCu0AFOA9sov5WZXsqf2wEK3j9G8jKGcIQL3KC6UxDWY1LXa+ibAmDV+l8B222UkWl6Uxr6UjY5yADmJaCQ8xvYzqOaRZoFHW9Spg2/QyqZUGqofKgBK/X6Uwbha6N6X5H2i/BMTrZlmK65yfY+S6ms4UuRLRUOer6/gbh5avEcq74iM9wIMwoUkkzOCgOnoPUKdnu4UR2EmHb5c6ylCR+oTkNSsAicFKsAb0OTrGslHWTIqY1oD9AtSTQXxunSZXVTWJ6A5EuLrRuFacDN4G7xdnQ6xx4GRwAT3Cu3tybHBgDhoI6cfQ/1dMdkIt4DtMNTN8BE+nU79RdCeaBc2Oc1Cq2Wgle7xYPxB6uZJfYY4sM33jqqYvygmPCZmSb7I/GSla4nQNlTBcL33ZwW5wldO1Mh3G3MhFPbnGpdw24xKAfDqaIs8b4Bt6nh874f6njBrWIv4fEeVJbXMpuY/mnDn2WOLXPcJTtFmUL3d7AjeB78LfDv3XiqVkirunjO2axrMFgtVhLlaLsTZFfJfJqMylwnPaddqFLma4xDLqdxkwW4UCi8jzD6AkML1ZSr35fDu7lvUHdRXJpUw0dKnc7XFPYWMlWlye5E1yR4EVEyiimn4CPhH4g09Xi6du8tCh5GzQw39+0jeoY+7DLwOpyUsR8R4zzxI4Tih8zTLFvxTWzD6eZdlLfJfqKdh2mgfUl43yXgceItZFmKB/CuVnv421oQwq4o2lb9BrLARd4PYn1JXmuoXwE5+Naw9OQEah6xV/5cGCwmNPjDZFBfzHf0+OdxGrqLAMzGDosYDyv9uTNjpDCFL1GxSLzKlGmauPIN0ytjWLKtXkJJdSXhGwGcQ+CPWAsy5RxzV28bjpFX3imuGy/5YbDM24wN5FbWIjGv8g52hBABJMhpuRUgz1jRZ1+fsLp18BLzE8DewMKwUJiehw1lB9x0Xu6kcUSvRs1e7haxtJFDfoTYitvFeV/inyL2zmQKXTnML3M8GUuh2lJjHNDf78pdPmmUyj6UfmRzI8GeWIKNTGvyvcxn+3o9zf1v4Valy20N8jCfwQYAO1Jya1L1KBgAAAAAElFTkSuQmCC"
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
                <VueSlickCarousel v-if="testimonial.length>0" v-bind="slickOptions" ref="slick" >
              <div v-for="(item, index) in testimonial" :key="index">
                <div
                  class="testimonials-item"
                  tabindex="-1"
                  style="width: 100%; display: inline-block"
                >
                  <div class="testimonials-item-top">
                    <p>
                      {{item.message}}
                    </p>
                  </div>
                  <div class="testimonials-item-bottom">
                    <div class="testimonials-item-bottom-author">
                      <img
                       :src="apiLink+'uploads/'+item.image"
                       alt=""
                      />
                    </div>
                    <div class="testimonials-item-bottom-author-text">
                      <h3>{{item.name}}</h3>
                      <span>{{item.designation}}</span>
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
            <div class="section-title-s4">
              <span>Clients</span>
              <h2>Our Clients</h2>
              <div class="transparent-text">Clients</div>
            </div>
          </div>
        </div>
        <div class="row product-area-row product-slider brand-slider">
              <button
                type="button"
                data-role="none"
                class="slick-prev slick-arrow p-prev p2-prev"
                @click="prevBrand"
              >
                <font-awesome-icon :icon="['fa', 'angle-left']" />
              </button>
              <button
                type="button"
                data-role="none"
                class="slick-next slick-arrow p-next p2-next"
                @click="nextBrand"
              >
                <font-awesome-icon :icon="['fa', 'angle-right']" />
              </button>
            </div>
        <div class="row brand-row">
          <!-- <div class="col col-xs-12">
            <div class="wpo-fun-fact-grids clearfix"> -->
              <VueSlickCarousel v-bind="slickOptionsBrand" ref="slickBrand" >
              <div class="grid">
                <div class="info">
                  <!-- <h3>82</h3>
                  <p>Categories</p> -->
                  <img src="/assets/images/client/1.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/2.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/3.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/4.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/5.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/6.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/7.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/8.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/9.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/10.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/11.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/12.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/13.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/14.jpg" />
                </div>
              </div>
              <div class="grid">
                <div class="info">
                  <img src="/assets/images/client/15.jpg" />
                </div>
              </div>
              </VueSlickCarousel>
            <!-- </div>
          </div> -->
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
        draggable: false,
        pauseOnHover: false,
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
      slickOptionsBrand: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        pauseOnHover: true,
        swipe: true,
        slidesToShow: 4,
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
      testimonial:[]
    }
  },
  async fetch() {
    await this.getTestimonial()
  },
  computed:{
    apiLink (){
      return this.$store.state.apis.link
    },

  },
  mounted() {
    AOS.init()
  },
  methods:{
    nextBrand() {
      this.$refs.slickBrand.next()
    },
    prevBrand() {
      this.$refs.slickBrand.prev()
    },
    async getTestimonial(){
      this.$store.commit('loaders/show')
      try { 
        const response = await this.$axios.$get(`/testimonial/view-all`)
        this.testimonial = response.data
      } catch (error) {
         console.log(error);// eslint-disable-line
      }finally{this.$store.commit('loaders/hide')}
    },
  }
  
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

.wpo-fun-fact-section-s3 .grid .info, .wpo-fun-fact-section .grid .info img{
  width: 100%;
  object-fit: contain;
}

.brand-row{
  border: 3px solid #44bfed;
  border-radius: 10px;
}

.wpo-fun-fact-section-s3 .section-title-s4 h2 {
    font-size: 48px;
    font-size: 3.2rem;
    font-weight: 600;
    position: relative;
    margin: 0.31em 0 0;
}

.product-slider {
  position: relative;
  margin-bottom: 30px;
}
.p-prev {
  display: inline-block;
  padding: 20px;
  border: 1px solid #c8c8c8;
  width: 75px;
  font-size: 22px;
  position: absolute;
  top: -120px;
  right: 100px;
  background: #fff;
  color: #f25d79;
}
.p2-prev {
  top: -75px;
}

.p-next {
  display: inline-block;
  padding: 20px;
  border: 1px solid #c8c8c8;
  width: 75px;
  font-size: 22px;
  position: absolute;
  top: -120px;
  right: 0;
  background: #fff;
  color: #f25d79;
}

.p2-next {
  top: -75px;
}

@media (max-width:767px) {

    .wpo-fun-fact-section-s2 .wpo-fun-fact-grids .grid,
    .wpo-fun-fact-section-s3 .wpo-fun-fact-grids .grid,
    .wpo-fun-fact-section .wpo-fun-fact-grids .grid {
        width: 100%;
        margin-bottom: 10px
    }

    .info {
        width: 100%;
        padding: 25px 0;
    }

    .product-slider {
      position: relative;
      margin-top: 50px;
      margin-bottom: 30px;
    }
}
</style>
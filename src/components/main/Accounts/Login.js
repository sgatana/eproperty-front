import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="container content">
        <div className="row" >
          <div className="col-md-8" style={{ color: 'white', textAlign: 'justify' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat quam et pulvinar tincidunt. Sed faucibus nunc a dui euismod pellentesque. Suspendisse euismod, odio nec ultricies porta, enim ante malesuada quam, interdum lacinia eros massa id sapien. Nam pharetra nisl dignissim metus mollis molestie. Maecenas sit amet urna eu augue tincidunt lacinia. Cras blandit elit ut cursus lobortis. Sed ut eleifend arcu. Maecenas faucibus convallis diam at malesuada. Pellentesque ullamcorper mollis nibh tincidunt suscipit. Integer rhoncus justo eu lorem luctus hendrerit. Suspendisse a eros non nisl porta porta id sit amet quam. Donec iaculis ligula id elit bibendum, nec varius felis facilisis. Nam congue arcu in ligula posuere scelerisque. Morbi vestibulum odio semper leo congue, quis varius justo consequat.

    adipiscing elit.in tempor justo imperdiet nec. Etiam eu diam vitae quam rutrum porttitor. Phasellus cursus arcu rhoncus felis consequat vehicula. Donec vitae tellus lorem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra laoreet metus, et mollis orci facilisis sed. Etiam quis gravida nulla. Integer gravida venenatis neque condimentum egestas. Quisque eu diam ultrices, hendrerit nunc at, consectetur dui. Donec ac lacus eget elit eleifend efficitur. In vel ligula vitae dui lobortis pretium. In vel semper mi. Nulla justo est, luctus sed mauris quis, pulvinar mollis ipsum. Pellentesque ornare pulvinar augue in egestas. I am here at the end
          </p>
          </div>
          <div className="col-md-4">
            <div className="form ">
              <p className="text-center"><i className="fa fa-user-circle userIcon"></i></p>
              <h2 className="text-center form-header">Sign in to E~Property <hr /></h2>
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Enter your id number" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  <input type="password" className="form-control" placeholder="Enter your id password" />
                </div>
                <button className="btn button btn form-control mb-4">Login <span className="fa fa-sign-in icons"></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
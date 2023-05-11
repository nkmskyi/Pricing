function Card() {
  return (
    <div className="cardRow">
      <div className="col">
        <div className="card">
          <div className="cardHeader">
            <h2>Free</h2>
          </div>
          <div className="cardBody">
            <h1 className="bodyHeader">
              $0
              <small>/месяц</small>
            </h1>
            <ul>
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn1">Sign up for free</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="cardHeader">
            <h2>Pro</h2>
          </div>
          <div className="cardBody">
            <h1 className="bodyHeader">
              $15
              <small>/месяц</small>
            </h1>
            <ul>
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn2">Get starter</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card2">
          <div className="cardHeader2">
            <h2>Enterprise</h2>
          </div>
          <div className="cardBody">
            <h1 className="bodyHeader">
              $29
              <small>/месяц</small>
            </h1>
            <ul>
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button className="btn2">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

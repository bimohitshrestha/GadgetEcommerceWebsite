import React from 'react'

const Info = ({props}) => {
  return (
    
    <div>
        {/*{console.log(props.id)}*/}
        {/*{console.log(props)}*/}

       {/*} <h1>S.no.{props.id}</h1>
        <h2>User:{props.userId}</h2>
        <h3>Title:{props.title}</h3>
  <p>Content:{props.body}</p>*/}

     <div class="col">
        <div class="card">

      <div class="card-body">
        <h5 class='card0-title'>{props.id}</h5>
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.body}</p>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Info
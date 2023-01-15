export default function Students(props){
 
    return (
      <div className="container p-4">
        <div className="row border">
          <div className="col-4">
            <img alt="Ima" src={props.headshot} className="w-100 py-2"></img>
          </div>
          <div className="col-6">
            {props.name}
            <br />
            Coding EXP: {props.exp}
          </div>
        </div>
      </div>
    )
  }
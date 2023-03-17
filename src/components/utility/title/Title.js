import "./Title.css"

const Title = (props) => {
  return (
    <div className="title">
      <h6>{props.title}</h6>
      <h2>{props.info}</h2>
    </div>
  )
}

export default Title
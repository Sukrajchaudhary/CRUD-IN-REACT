function Video({ title, channel, views, time, verified, id, children, handleDelete, editVideos }) {
  return (
    <>
      <div className="pic">
        <div className="close"
          style={{ color: "red", cursor: "pointer", marginLeft: "30px", display: 'flex' }}
          onClick={() => handleDelete(id)}
        >X</div>
        <div className="Add"
          style={{ color: "red", cursor: "pointer", marginLeft: "30px", floatLeft: "100px" }}
          onClick={() => editVideos(id)}
        >+</div>
        <img src={`https://placebear.com/250/200`} alt="img"></img>
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified ? "✅" : null}</div>
      <div className="views">{views} views <span>{time} </span></div>
      {children}
    </>
  )
}
export default Video